import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Roadmap — Eat The Sun",
  description:
    "The dependency graph from first proof to solar energy harvested. Every node is a step closer to limitless energy.",
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

type NodeStatus = "done" | "active" | "upcoming" | "milestone";

function NodeCard({
  title,
  description,
  status,
  href,
  large,
}: {
  title: string;
  description: string;
  status: NodeStatus;
  href?: string;
  large?: boolean;
}) {
  const styles: Record<
    NodeStatus,
    { border: string; bg: string; dot: string; glow?: string }
  > = {
    done: {
      border: "border-green-500/40",
      bg: "bg-green-500/5",
      dot: "bg-green-400",
    },
    active: {
      border: "border-solar/40",
      bg: "bg-solar/5",
      dot: "bg-solar animate-pulse",
    },
    upcoming: {
      border: "border-border",
      bg: "bg-surface",
      dot: "bg-muted/40",
    },
    milestone: {
      border: "border-solar/50",
      bg: "bg-solar/5",
      dot: "bg-solar",
      glow: "shadow-[0_0_24px_rgba(245,158,11,0.15)]",
    },
  };

  const s = styles[status];

  const inner = (
    <div
      className={`${s.bg} border ${s.border} rounded-xl transition-all ${s.glow || ""} ${
        large ? "p-6 md:p-8" : "p-4 md:p-5"
      } ${href ? "hover:border-solar/60 cursor-pointer group" : ""}`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${s.dot}`} />
        <div className="min-w-0">
          <h3
            className={`font-bold leading-snug ${href ? "group-hover:text-solar transition-colors" : ""} ${
              large ? "text-lg md:text-xl" : "text-sm md:text-base"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-muted leading-relaxed mt-1 ${
              large ? "text-sm" : "text-xs md:text-sm"
            }`}
          >
            {description}
          </p>
          {href && (
            <span className="text-xs text-solar font-medium mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
              Explore →
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{inner}</Link>;
  }
  return inner;
}

function Connector({ className }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className || ""}`}>
      <div className="flex flex-col items-center gap-0">
        <div className="w-px h-8 bg-gradient-to-b from-border to-solar/30" />
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          className="text-solar/30"
        >
          <path d="M6 8L0 0h12z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function LayerLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center mb-6">
      <span className="text-xs font-mono text-muted/60 uppercase tracking-widest">
        {children}
      </span>
    </div>
  );
}

export default function RoadmapPage() {
  return (
    <><Nav />
      <main className="pt-24 pb-20 px-6">

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roadmap</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every node is a dependency. Work flows down. The goal is at the
            bottom.
          </p>
        </div>

        {/* === LAYER: PROVE THE PHYSICS === */}
        <LayerLabel>Prove the Physics</LayerLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <NodeCard
            title="Thermal Equilibrium Proof"
            description="Does a cable at 8 km/s through the thermosphere survive? Drag the altitude slider. At 100 km: -10°C."
            status="done"
            href="/simulations/thermal-equilibrium"
          />
          <NodeCard
            title="Hoop Stress Explorer"
            description="Which materials survive orbital hoop stress? Toggle overspeed and see the 2% sweet spot where Zylon holds with 1.5× margin."
            status="upcoming"
          />
          <NodeCard
            title="Bootstrap Growth Simulator"
            description="The self-reinforcing loop visualized. Watch 20 tonnes become 40, then 80. Each doubling accelerates the next."
            status="upcoming"
          />
          <NodeCard
            title="Cost Comparison"
            description="Rockets vs orbital ring at any throughput. The crossover is stark: $100/kg to $1.40/kg."
            status="upcoming"
          />
        </div>

        <Connector />

        {/* === LAYER: ENGINEERING PLAN === */}
        <LayerLabel>Engineering Plan</LayerLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <NodeCard
            title="Material Supply Chain"
            description="Can you procure 20 tonnes of Zylon? Map every manufacturer, lead time, and per-kg cost at volume."
            status="upcoming"
          />
          <NodeCard
            title="Tether Wind Loading"
            description="The jet stream is the highest open risk. Model Stage 1 tether dynamics across equatorial sites with real atmospheric data."
            status="upcoming"
          />
          <NodeCard
            title="Ground Station Siting"
            description="Kiribati, Galápagos, ocean platform. Real locations evaluated for latitude, wind, infrastructure, and logistics."
            status="upcoming"
          />
          <NodeCard
            title="Regulatory Landscape"
            description="100 km is the Kármán line — the boundary between airspace and outer space. Map every governing body and the path through."
            status="upcoming"
          />
        </div>

        <Connector />

        {/* === LAYER: BUILD === */}
        <LayerLabel>Build</LayerLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <NodeCard
            title="Expert Network"
            description="Orbital mechanics, materials science, maglev engineering, space policy. The people who make this credible and real."
            status="upcoming"
          />
          <NodeCard
            title="Minimum Viable Ring"
            description="20 tonnes of Zylon cable at 100 km. 9 tether stations. ~$2M all-in. The ring that replicates before it dies."
            status="upcoming"
          />
        </div>

        <Connector />

        {/* === LAYER: OPERATE === */}
        <LayerLabel>Operate</LayerLabel>
        <div className="max-w-lg mx-auto">
          <NodeCard
            title="Orbital Ring"
            description="Self-reinforcing bootstrap complete. Marginal launch cost: $1.40/kg. Mechanical transport from surface to orbit."
            status="milestone"
            large
          />
        </div>

        <Connector />

        {/* === LAYER: EXPAND === */}
        <LayerLabel>Expand</LayerLabel>
        <div className="max-w-lg mx-auto">
          <NodeCard
            title="Lunar Integration"
            description="Electromagnetic mass driver on Shackleton Crater. Lunar silicon, aluminum, and iron slung to Earth orbit at negligible cost."
            status="milestone"
            large
          />
        </div>

        <Connector />

        {/* === ROOT NODE: THE GOAL === */}
        <div className="max-w-xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-solar/10 rounded-2xl blur-xl" />
            <div className="relative bg-surface border-2 border-solar/50 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
              <SolarIcon className="w-12 h-12 text-solar mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Solar Energy Harvested
              </h2>
              <p className="text-muted leading-relaxed">
                A Dyson swarm of solar satellites — each one capturing energy and
                running computation. Built from lunar material, launched for
                free. The cheapest path to limitless energy, realized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
