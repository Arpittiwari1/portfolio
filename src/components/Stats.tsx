import { portfolioData } from "@/data/portfolioData";

export default function Stats() {
  return (
    <div className="border-t border-border">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {portfolioData.highlights.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col-reverse justify-end gap-1 py-8 ${
              i % 2 === 1 ? "border-l border-border pl-6" : ""
            } ${i > 0 ? "md:border-l md:border-border md:pl-6" : ""}`}
          >
            <dt className="text-sm text-muted-foreground">{item.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
