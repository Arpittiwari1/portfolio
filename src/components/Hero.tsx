import { portfolioData } from "@/data/portfolioData";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import AskAI from "@/components/AskAI";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section className="pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-7">
          <Badge variant="outline" className="h-6 px-3 font-normal text-muted-foreground">
            {personal.role} at LevelUP MultiLink LLP
          </Badge>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            {personal.name}
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-snug text-foreground sm:text-2xl">
            {personal.heroMessage}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {personal.heroSubtext}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}>
              View projects
            </a>
            <a
              href={socialLinks.email}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-10 px-4")}
            >
              Contact me
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "size-10")}
            >
              <GithubIcon />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={cn(buttonVariants({ variant: "ghost", size: "icon-lg" }), "size-10")}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <AskAI />
        </div>
      </div>
    </section>
  );
}
