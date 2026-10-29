import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>
          {personal.name}, {personal.role}
        </p>
        <p>&copy; {new Date().getFullYear()} {personal.name}</p>
      </div>
    </footer>
  );
}
