import Link from "next/link";

export const metadata = {
  title: "Research — Eat The Sun",
  description: "Published research on orbital ring construction and incremental bootstrap architecture.",
};

function PaperCard({
  title,
  authors,
  date,
  version,
  abstract,
  href,
  status,
}: {
  title: string;
  authors: string;
  date: string;
  version: string;
  abstract: string;
  href: string;
  status: "published" | "draft" | "upcoming";
}) {
  const statusColors = {
    published: "bg-green-500/10 text-green-400 border-green-500/20",
    draft: "bg-solar/10 text-solar border-solar/20",
    upcoming: "bg-muted/10 text-muted border-muted/20",
  };

  return (
    <Link
      href={href}
      className="block bg-surface border border-border rounded-xl p-8 hover:border-solar/30 transition-colors group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusColors[status]}`}
        >
          {status === "published" ? "Published" : status === "draft" ? "Draft" : "Upcoming"}
        </span>
        <span className="text-muted text-sm">{version}</span>
        <span className="text-muted text-sm">·</span>
        <span className="text-muted text-sm">{date}</span>
      </div>
      <h2 className="text-xl font-bold mb-2 group-hover:text-solar transition-colors">
        {title}
      </h2>
      <p className="text-muted text-sm mb-4">{authors}</p>
      <p className="text-muted text-sm leading-relaxed">{abstract}</p>
    </Link>
  );
}

export default function ResearchPage() {
  return (
    <main className="pt-24 pb-20 px-6">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="w-5 h-5 text-solar"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <span>Eat The Sun</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/#how-it-works"
              className="text-muted hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#roadmap"
              className="text-muted hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/research"
              className="text-foreground font-medium"
            >
              Research
            </Link>
            <Link
              href="https://github.com/vargasjr-dev/eat-the-sun"
              className="text-muted hover:text-foreground transition-colors"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Research</h1>
        <p className="text-muted text-lg mb-12">
          White papers, technical analyses, and simulation results. All research
          is published openly.
        </p>

        <div className="space-y-6">
          <PaperCard
            title="Incremental Bootstrap Architecture for an Orbital Ring via Tethered Material Transport"
            authors="Seethepalli, V. · Seethepalli, S. · JR, V. · Fuertes, V."
            date="April 12, 2026"
            version="v1.2"
            abstract="We propose a novel incremental bootstrap architecture for constructing an orbital ring around Earth, using high-tensile fiber tethers suspended from the ring's magnetically levitated stationary platforms to mechanically transport construction material from the surface. Unlike previous proposals that assume full-scale construction, our approach begins with a minimum viable ring and scales incrementally through a self-reinforcing material transport loop."
            href="/research/incremental-bootstrap-architecture"
            status="draft"
          />
        </div>
      </div>
    </main>
  );
}
