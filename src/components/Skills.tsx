import { portfolioData } from "@/data/portfolioData";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" description="Tools and concepts I use regularly.">
      <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {portfolioData.skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 p-5 sm:p-6 md:grid-cols-[220px_1fr] md:gap-8"
          >
            <h3 className="text-sm font-medium">{group.category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-mono font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
