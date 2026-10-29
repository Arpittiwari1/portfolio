import { portfolioData } from "@/data/portfolioData";
import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { socialLinks } = portfolioData;
  const email = socialLinks.email.replace("mailto:", "");

  return (
    <Section
      id="contact"
      title="Get in touch"
      description="Open to connecting with engineers, recruiters, founders, and teams working on software and AI."
    >
      <a
        href={socialLinks.email}
        className="text-2xl font-semibold tracking-tight underline decoration-border underline-offset-8 transition-colors hover:decoration-brand sm:text-3xl"
      >
        {email}
      </a>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 gap-2 px-4")}
        >
          <LinkedinIcon />
          LinkedIn
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 gap-2 px-4")}
        >
          <GithubIcon />
          GitHub
        </a>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 px-4")}
        >
          LeetCode
        </a>
      </div>
    </Section>
  );
}
