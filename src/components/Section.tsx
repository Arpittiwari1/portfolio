import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            {description && (
              <p className="mt-3 text-base text-muted-foreground">{description}</p>
            )}
          </div>
          {children}
        </div>
      </Reveal>
    </section>
  );
}
