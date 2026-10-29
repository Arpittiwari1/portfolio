import { portfolioData } from "@/data/portfolioData";
import Section from "@/components/Section";

export default function About() {
  const [lead, ...rest] = portfolioData.personal.about;

  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-5">
        <p className="text-xl leading-relaxed text-foreground">{lead}</p>
        {rest.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
