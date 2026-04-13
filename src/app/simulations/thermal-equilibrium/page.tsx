import Link from "next/link";
import ThermalSimulation from "@/components/ThermalSimulation";

export const metadata = {
  title: "Thermal Equilibrium — Does It Melt? — Eat The Sun",
  description:
    "Interactive simulation: drag the altitude slider and see whether a cable at 8 km/s through the upper atmosphere survives. Spoiler: it does.",
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

export default function ThermalEquilibriumPage() {
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
              href="/simulations"
              className="text-muted hover:text-foreground transition-colors"
            >
              ← Simulations
            </Link>
            <Link
              href="/research"
              className="text-muted hover:text-foreground transition-colors"
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
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border bg-green-500/10 text-green-400 border-green-500/20">
              Interactive
            </span>
            <span className="text-muted text-sm">Roadmap Step 1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Does it melt?
          </h1>
          <p className="text-muted text-lg max-w-2xl">
            A cable moving at 8 km/s through the upper atmosphere experiences
            aerodynamic drag heating. If the equilibrium temperature exceeds
            material limits, the orbital ring concept fails. Drag the slider and
            see for yourself.
          </p>
        </div>

        <ThermalSimulation />

        <div className="mt-12 bg-surface border border-border rounded-xl p-6">
          <h3 className="font-bold mb-3">What this proves</h3>
          <p className="text-muted text-sm leading-relaxed mb-3">
            The first existential test for the orbital ring: can the rotor
            survive aerodynamic heating? At 100 km altitude, atmospheric density
            is low enough that drag heating is just 2.56 W/m (solar minimum) —
            easily radiated away. The equilibrium temperature is approximately
            -10°C, giving a 4.1× thermal margin against copper&apos;s melting
            point.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            The hard constraint is altitude: below ~85 km, atmospheric density
            increases exponentially and drag heating becomes catastrophic. The
            rotor must stay above this floor. At 80 km, drag heating reaches
            ~51 kW/m — no known material survives.
          </p>
          <Link
            href="/research/incremental-bootstrap-architecture#thermal-equilibrium-at-100-km"
            className="inline-block mt-4 text-solar hover:text-solar-bright text-sm font-medium transition-colors"
          >
            Read the full analysis in the white paper →
          </Link>
        </div>
      </div>
    </main>
  );
}
