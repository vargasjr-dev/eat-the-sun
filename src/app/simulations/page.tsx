import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Simulations — Eat The Sun",
  description:
    "Interactive physics simulations that derisk the orbital ring concept. Explore the math yourself.",
};

function SolarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function SimCard({
  title,
  description,
  href,
  status,
  tagline,
}: {
  title: string;
  description: string;
  href: string;
  status: "live" | "coming-soon";
  tagline: string;
}) {
  const isLive = status === "live";

  const inner = (
    <div
      className={`bg-surface border rounded-xl p-8 transition-colors ${
        isLive
          ? "border-border hover:border-solar/30 cursor-pointer group"
          : "border-border/50 opacity-60"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
            isLive
              ? "bg-green-500/10 text-green-400 border-green-500/20"
              : "bg-muted/10 text-muted border-muted/20"
          }`}
        >
          {isLive ? "Live" : "Coming Soon"}
        </span>
      </div>
      <h2
        className={`text-xl font-bold mb-1 ${isLive ? "group-hover:text-solar transition-colors" : ""}`}
      >
        {title}
      </h2>
      <p className="text-solar text-sm font-medium mb-3">{tagline}</p>
      <p className="text-muted text-sm leading-relaxed">{description}</p>
    </div>
  );

  if (isLive) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}

export default function SimulationsPage() {
  return (
    <><Nav />
      <main className="pt-24 pb-20 px-6">

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Simulations</h1>
        <p className="text-muted text-lg mb-12">
          Interactive physics proofs. Don&apos;t take our word for it — run the
          numbers yourself.
        </p>

        <div className="space-y-6">
          <SimCard
            title="Thermal Equilibrium"
            tagline="Does it melt?"
            description="A cable at 8 km/s through the upper atmosphere sounds like it should vaporize. Drag the altitude slider and see what actually happens. Spoiler: at 100 km, it's colder than a winter day in New York."
            href="/simulations/thermal-equilibrium"
            status="live"
          />
          <SimCard
            title="Bootstrap Growth"
            tagline="How fast does it grow?"
            description="Watch the self-reinforcing loop in action. The ring lifts cable, the cable strengthens the ring, the stronger ring lifts more cable. See the exponential unfold."
            href="/simulations/bootstrap-growth"
            status="coming-soon"
          />
          <SimCard
            title="Hoop Stress Explorer"
            tagline="What doesn't break?"
            description="Toggle materials and overspeed percentages. See which combinations survive orbital hoop stress and which snap. The 2% overspeed sweet spot becomes obvious."
            href="/simulations/hoop-stress"
            status="coming-soon"
          />
          <SimCard
            title="Cost Comparison"
            tagline="How cheap is it?"
            description="Rockets vs orbital ring at any scale. Drag the tonnage slider and watch the cost curves diverge. The economics are overwhelming."
            href="/simulations/cost-comparison"
            status="coming-soon"
          />
        </div>
      </div>
    </main>
    </>
  );
}
