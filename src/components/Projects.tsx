import { portfolioData } from "@/data/portfolioData";
import Section from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </h4>
  );
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-y-2">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center">
          <span className="rounded-md border border-border bg-background px-3 py-1.5 text-sm">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden className="mx-2 text-muted-foreground">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Projects() {
  const { caseStudies, socialLinks } = portfolioData;

  return (
    <Section
      id="projects"
      title="Projects"
      description="Two systems I built at LevelUP MultiLink LLP."
    >
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <Card key={study.id} className="gap-0 py-0">
            <div className="border-b border-border p-6 sm:p-8">
              <Badge
                variant="outline"
                className="h-auto whitespace-normal py-1 text-left font-normal text-muted-foreground"
              >
                {study.tag}
              </Badge>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{study.title}</h3>
              <p className="mt-1 text-sm text-brand">{study.subtitle}</p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {study.description}
              </p>
            </div>

            <div className="grid border-b border-border md:grid-cols-2">
              <div className="border-b border-border p-6 sm:p-8 md:border-b-0 md:border-r">
                <Label>The problem</Label>
                <p className="text-sm leading-relaxed">{study.problem}</p>
              </div>
              <div className="p-6 sm:p-8">
                <Label>Result</Label>
                <p className="text-sm leading-relaxed">{study.businessImpact}</p>
              </div>
            </div>

            <div className="border-b border-border p-6 sm:p-8">
              <Label>How it works</Label>
              <Flow steps={study.architectureDiagram.map((n) => n.label)} />
            </div>

            <div className="grid border-b border-border md:grid-cols-2">
              <div className="border-b border-border p-6 sm:p-8 md:border-b-0 md:border-r">
                <Label>What I built</Label>
                <ul className="list-disc space-y-1.5 pl-5 text-sm marker:text-muted-foreground">
                  {study.ownership.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 sm:p-8">
                <Label>Details</Label>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed marker:text-muted-foreground">
                  {study.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {study.aiDetails && (
              <div className="border-b border-border bg-muted/30 p-6 sm:p-8">
                <Label>AI assistant</Label>
                <p className="max-w-3xl text-sm leading-relaxed">{study.aiDetails.overview}</p>
                <div className="mt-5">
                  <Flow steps={study.aiDetails.flow.map((n) => n.label)} />
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Constraint: </span>
                  {study.aiDetails.emphasis}
                </p>
              </div>
            )}

            {study.security && (
              <div className="grid gap-6 border-b border-border p-6 sm:p-8 md:grid-cols-2">
                <div>
                  <Label>Auth pipeline</Label>
                  <Flow steps={study.security.authFlow} />
                </div>
                <div>
                  <Label>RBAC roles</Label>
                  <div className="flex flex-wrap gap-1.5">
                    {study.security.roles.map((role) => (
                      <Badge key={role} variant="secondary" className="font-normal">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 sm:p-8">
              <Label>Tech stack</Label>
              <div className="flex flex-wrap gap-1.5">
                {study.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}

        <Card className="flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold">Open source and experiments</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Public projects are being prepared. Check GitHub for what is available.
            </p>
          </div>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "shrink-0 gap-2")}
          >
            <GithubIcon />
            GitHub
          </a>
        </Card>
      </div>
    </Section>
  );
}
