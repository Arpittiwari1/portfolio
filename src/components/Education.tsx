import { portfolioData } from "@/data/portfolioData";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Education() {
  const { education, codingProfile } = portfolioData;

  return (
    <Section id="education" title="Education and practice">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="gap-0 p-6">
          <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Education
          </h3>
          <p className="mt-4 text-lg font-semibold tracking-tight">{education.institution}</p>
          <p className="mt-1 text-sm text-brand">{education.degree}</p>
          <p className="mt-3 text-sm text-muted-foreground">{education.duration}</p>
        </Card>

        <Card className="gap-0 p-6">
          <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Problem solving
          </h3>
          <div className="mt-4 flex items-baseline gap-3">
            <p className="text-lg font-semibold tracking-tight">{codingProfile.platform}</p>
            <p className="text-sm text-muted-foreground">{codingProfile.solvedCount} solved</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {codingProfile.topics.map((topic) => (
              <Badge key={topic} variant="secondary" className="font-normal">
                {topic}
              </Badge>
            ))}
          </div>
          <a
            href={codingProfile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 w-fit")}
          >
            View profile
          </a>
        </Card>
      </div>
    </Section>
  );
}
