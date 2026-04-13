import Link from "next/link";

export const metadata = {
  title: "Roadmap — Eat The Sun",
  description:
    "The path from white paper to orbital ring. Ten concrete steps toward building the cheapest path to limitless energy.",
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

type StepStatus = "done" | "active" | "upcoming";

function StepCard({
  number,
  title,
  description,
  owner,
  status,
  detail,
  href,
}: {
  number: number;
  title: string;
  description: string;
  owner: string;
  status: StepStatus;
  detail?: string;
  href?: string;
}) {
  const statusStyles: Record<StepStatus, { dot: string; border: string; badge: string; label: string }> = {
    done: {
      dot: "bg-green-400",
      border: "border-green-500/30",
      badge: "bg-green-500/10 text-green-400 border-green-500/20",
      label: "Complete",
    },
    active: {
      dot: "bg-solar animate-pulse",
      border: "border-solar/30",
      badge: "bg-solar/10 text-solar border-solar/20",
      label: "In Progress",
    },
    upcoming: {
      dot: "bg-muted/50",
      border: "border-border",
      badge: "bg-muted/10 text-muted border-muted/20",
      label: "Upcoming",
    },
  };

  const s = statusStyles[status];

  return (
    <div className={`bg-surface border ${s.border} rounded-xl p-6 md:p-8 transition-colors`}>
      <div className="flex items-start gap-4 md:gap-6">
        {/* Step number + timeline dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center font-mono font-bold text-sm">
            {number.toString().padStart(2, "0")}
          </div>
          <div className={`w-2 h-2 rounded-full mt-3 ${s.dot}`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="text-lg font-bold">{title}</h3>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full border ${s.badge}`}>
              {s.label}
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed mb-3">
            {description}
          </p>
          {detail && (
            <p className="text-muted/70 text-xs leading-relaxed mb-3 italic">
              {detail}
            </p>
          )}
          <div className="flex items-center justify-between">
            <div className="text-xs text-muted font-mono">{owner}</div>
            {href && (
              <Link
                href={href}
                className="text-xs text-solar hover:text-solar-bright font-medium transition-colors"
              >
                View →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhaseHeader({
  phase,
  title,
  description,
}: {
  phase: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mt-16 mb-8 first:mt-0">
      <div className="text-solar font-mono text-sm mb-1">{phase}</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
      <p className="text-muted">{description}</p>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <main className="pt-24 pb-20 px-6">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <SolarIcon className="w-5 h-5 text-solar" />
            <span>Eat The Sun</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/#how-it-works"
              className="text-muted hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link href="/roadmap" className="text-foreground font-medium">
              Roadmap
            </Link>
            <Link
              href="/research"
              className="text-muted hover:text-foreground transition-colors"
            >
              Research
            </Link>
            <Link
              href="/simulations"
              className="text-muted hover:text-foreground transition-colors"
            >
              Simulations
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

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Roadmap</h1>
        <p className="text-muted text-lg mb-4">
          From white paper to orbital ring. Ten steps to make it real.
        </p>
        <p className="text-muted text-sm mb-12">
          This isn&apos;t a 50-year academic timeline. It&apos;s a startup
          execution plan — ordered by what moves us toward funding and derisking
          fastest.
        </p>

        {/* Phase: Prove It */}
        <PhaseHeader
          phase="Phase 0"
          title="Prove It"
          description="Build public, interactive proofs that make the physics undeniable. If a VC can't understand it in 30 seconds, it doesn't count."
        />

        <div className="space-y-4">
          <StepCard
            number={1}
            title="Interactive Thermal Proof"
            description="The 'does it melt?' demo. Drag a slider to change altitude, watch the equilibrium temperature update in real time. At 100 km, it's -10°C. Colder than a New York winter."
            detail="Core physics: drag heating (½ρv³C_d·d) vs radiative cooling (εσT⁴·πd). Simple model, devastating result. This is a 30-second pitch moment in a URL."
            owner="VargasJR — Engineering"
            status="done"
            href="/simulations/thermal-equilibrium"
          />
          <StepCard
            number={2}
            title="Bootstrap Growth Simulator"
            description="Animated visualization of the self-reinforcing growth loop. 20 tonnes of Zylon becomes 40, becomes 80. Show the exponential. Show the hockey stick VCs love."
            detail="Model: ring mass over time as a function of station count, throughput per station, and payload fraction allocated to self-reinforcement vs. other cargo."
            owner="VargasJR + Velissa"
            status="upcoming"
          />
          <StepCard
            number={3}
            title="Hoop Stress Explorer"
            description="Toggle between materials (Zylon, Dyneema, carbon fiber, steel) and overspeed percentages. See what breaks and what survives. The 2% overspeed sweet spot becomes obvious."
            detail="σ_hoop = ρ × (v² − v_orb²). Independent of cable thickness — only material density and overspeed matter. Zylon at 2% gives 1.5× safety factor."
            owner="Velissa — Physics"
            status="upcoming"
          />
          <StepCard
            number={4}
            title="Cost Comparison Calculator"
            description="Side-by-side: rockets vs orbital ring at any throughput scale. Drag the tonnage slider and watch the crossover. At $1.40/kg vs $100/kg, the gap is obscene."
            detail="Break-even: the $2M minimum viable ring pays for itself in under a year at conservative throughput. At scale, 98.6% cost reduction."
            owner="VargasJR — Engineering"
            status="upcoming"
          />
        </div>

        {/* Phase: Plan It */}
        <PhaseHeader
          phase="Phase 1"
          title="Plan It"
          description="Turn the physics into an engineering plan. Answer the hard questions investors will ask."
        />

        <div className="space-y-4">
          <StepCard
            number={5}
            title="Material Supply Chain Analysis"
            description="Can you actually buy 20 tonnes of Zylon? Who manufactures it? What's the lead time? What's the real per-kg cost at volume? This is where 'paper' becomes 'plan.'"
            detail="Toyobo (Japan) is the primary Zylon manufacturer. Current production capacity, pricing at scale, and alternative PBO suppliers need mapping."
            owner="Vargas + Sidd"
            status="upcoming"
          />
          <StepCard
            number={6}
            title="Tether Wind Loading Deep Dive"
            description="The Stage 1 jet stream problem is the highest-severity open risk. Model it properly across equatorial sites. Quantify the fairing improvement. Potentially white paper #2."
            detail="Current safety factor is 1.7-2.6× but assumes simplified wind model. Need real atmospheric data from candidate sites and dynamic simulation of tether oscillation."
            owner="Velissa — Physics"
            status="upcoming"
          />
          <StepCard
            number={7}
            title="Ground Station Site Selection"
            description="Kiribati, Galápagos, ocean platform — real locations on a real map. Evaluate latitude, infrastructure, politics, logistics, and equatorial wind patterns."
            detail="Equatorial siting minimizes jet stream exposure. Key trade-offs: existing infrastructure (Galápagos) vs optimal latitude (Kiribati) vs flexibility (floating platform)."
            owner="VargasJR + Velissa"
            status="upcoming"
          />
          <StepCard
            number={8}
            title="Regulatory Landscape Map"
            description="Who governs a structure at 100 km? ITU? FAA? UN COPUOS? No one's done this before. Map every regulatory body and identify the clearest path to approval."
            detail="100 km is the Kármán line — the boundary between airspace (national sovereignty) and outer space (Outer Space Treaty). The legal ambiguity is both a risk and an opportunity."
            owner="Vargas + Sidd"
            status="upcoming"
          />
        </div>

        {/* Phase: Fund It */}
        <PhaseHeader
          phase="Phase 2"
          title="Fund It"
          description="Package everything into a funding case. The site, the proofs, and the plan become the pitch."
        />

        <div className="space-y-4">
          <StepCard
            number={9}
            title="Pitch Deck v1"
            description="15 slides. Problem, solution, why now, team, economics, ask. The interactive proofs become the live demo. The white paper becomes the technical appendix."
            detail="Target: seed round to fund material procurement and small-scale tether prototyping. The $2M minimum viable ring is the ask — small enough to be credible, big enough to change everything."
            owner="Vargas + Sidd"
            status="upcoming"
          />
          <StepCard
            number={10}
            title="Advisory Board & Expert Outreach"
            description="Identify 5-10 people in orbital mechanics, materials science, maglev engineering, and space policy. A name on the site changes the entire conversation with investors."
            detail="Target profiles: someone from the maglev/Hyperloop world, a materials scientist who's worked with PBO fibers, an orbital mechanics researcher, and a space policy expert."
            owner="Vargas + Sidd"
            status="upcoming"
          />
        </div>

        {/* Horizon */}
        <div className="mt-20 bg-surface border border-border rounded-xl p-8 text-center">
          <div className="text-solar font-mono text-sm mb-2">THE HORIZON</div>
          <h2 className="text-2xl font-bold mb-4">
            After the seed: build and launch
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-6">
            With funding secured, the roadmap extends into hardware prototyping,
            tether testing, and eventually the first orbital deployment. The ring
            that costs $2M builds the ring that&apos;s worth $1T.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-sm">
            <div className="bg-background rounded-lg p-4">
              <div className="text-solar font-bold mb-1">Phase 1</div>
              <div className="text-muted">Orbital Ring</div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <div className="text-solar font-bold mb-1">Phase 2</div>
              <div className="text-muted">Lunar Integration</div>
            </div>
            <div className="bg-background rounded-lg p-4">
              <div className="text-solar font-bold mb-1">Phase 3</div>
              <div className="text-muted">Dyson Swarm</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
