"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "What is Arpit's core tech stack?",
  "Tell me about the ICP prospecting platform.",
  "How has Arpit used Ollama?",
  "What kind of roles is Arpit open to?",
];

const markdownComponents: Components = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="mb-2 list-disc space-y-1 pl-5 last:mb-0">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 list-decimal space-y-1 pl-5 last:mb-0">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2">
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">{children}</code>
  ),
};

export default function AskAI() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => abortRef.current?.abort(), []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const ask = async (text: string) => {
    const question = text.trim();
    if (!question || loading) return;

    const history: Message[] = [...messages, { role: "user", content: question }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setError("");
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    const dropEmptyAnswer = () =>
      setMessages((prev) =>
        prev[prev.length - 1]?.content === "" ? prev.slice(0, -1) : prev,
      );

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Something went wrong. Please try again.");
        dropEmptyAnswer();
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        const snapshot = answer;
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: snapshot },
        ]);
      }
      if (!answer.trim()) {
        setError("No answer was returned. Please try again.");
        dropEmptyAnswer();
      }
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setError("The answer was interrupted. Please try again.");
      dropEmptyAnswer();
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <Card id="ask" className="gap-0 py-0 shadow-2xl shadow-black/30">
      <div className="border-b border-border px-5 py-4">
        <h2 className="text-sm font-semibold">Ask my AI</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Ask about my work, projects, or skills. Answers come from the content of this site.
        </p>
      </div>

      <div ref={scrollRef} aria-live="polite" className="h-72 overflow-y-auto px-5 py-4">
        {messages.length === 0 ? (
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-xs text-muted-foreground">Try one of these</p>
            {suggestions.map((s) => (
              <Button
                key={s}
                type="button"
                variant="outline"
                onClick={() => ask(s)}
                disabled={loading}
                className="h-auto justify-start whitespace-normal px-3 py-2 text-left font-normal"
              >
                {s}
              </Button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" && "justify-end")}>
                <div
                  className={cn(
                    "max-w-[90%] text-sm leading-relaxed",
                    m.role === "user"
                      ? "rounded-lg bg-secondary px-3 py-2"
                      : "text-muted-foreground",
                  )}
                >
                  {m.role === "assistant" && m.content === "" ? (
                    <span className="animate-pulse text-xs">Thinking...</span>
                  ) : m.role === "assistant" ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                      {m.content}
                    </ReactMarkdown>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="border-t border-border px-5 py-2 text-xs text-destructive">
          {error}
        </p>
      )}

      <form onSubmit={onSubmit} className="flex gap-2 border-t border-border p-3">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={500}
          placeholder="Ask a question"
          aria-label="Your question"
          className="h-9"
        />
        <Button type="submit" size="lg" disabled={loading || !input.trim()}>
          {loading ? "Sending" : "Send"}
        </Button>
      </form>
    </Card>
  );
}
