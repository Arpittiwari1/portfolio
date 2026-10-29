import { portfolioData } from "@/data/portfolioData";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {portfolioData.experience.map((item) => (
          <Card key={item.company} className="gap-0 p-6 sm:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                <p className="mt-0.5 text-base text-brand">{item.company}</p>
              </div>
              <p className="text-sm text-muted-foreground md:text-right">
                {item.duration}
                <span className="block">{item.location}</span>
              </p>
            </div>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {item.summary}
            </p>

            <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-sm leading-relaxed marker:text-muted-foreground">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-1.5 border-t border-border pt-6">
              {item.coreTech.map((tech) => (
                <Badge key={tech} variant="secondary" className="font-mono font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
