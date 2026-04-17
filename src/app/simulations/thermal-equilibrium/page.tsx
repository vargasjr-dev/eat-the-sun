import Link from "next/link";
import ThermalSimulation from "@/components/ThermalSimulation";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Thermal Equilibrium — Does It Melt? — Eat The Sun",
  description:
    "The orbital ring's rotor is a cable circling Earth at 8 km/s through the thermosphere. If it can't survive aerodynamic heating, nothing else matters. Interactive proof that it does.",
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
    <><Nav />
      <main className="pt-24 pb-20 px-6">

      <div className="max-w-4xl mx-auto">
        {/* Context: what and why */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border bg-green-500/10 text-green-400 border-green-500/20">
              Interactive
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Does it melt?
          </h1>

          {/* The "what" */}
          <div className="bg-surface border border-border rounded-xl p-6 mb-6">
            <h2 className="text-sm font-mono text-solar mb-3 uppercase tracking-wider">
              What is &quot;it&quot;?
            </h2>
            <p className="text-muted leading-relaxed">
              The orbital ring&apos;s core structure is a <strong className="text-foreground">continuous cable
              loop</strong> — a rotor made of high-tensile fiber (Zylon) that circles
              the entire Earth at 100 km altitude. It spins at 8 km/s, slightly
              faster than orbital velocity. That excess speed generates outward
              centrifugal force, which is what holds the ring&apos;s stationary
              platforms up against gravity — no rockets, no propellant.
            </p>
          </div>

          {/* The "why" */}
          <div className="bg-surface border border-border rounded-xl p-6 mb-6">
            <h2 className="text-sm font-mono text-solar mb-3 uppercase tracking-wider">
              Why does this question matter?
            </h2>
            <p className="text-muted leading-relaxed">
              At 8 km/s, the cable is tearing through the thermosphere — the
              upper atmosphere isn&apos;t a vacuum. Air molecules slam into the
              cable and convert kinetic energy into heat. If the equilibrium
              temperature exceeds what the cable material can withstand,{" "}
              <strong className="text-foreground">
                the entire orbital ring concept is dead
              </strong>
              . No ring, no tethers, no cheap access to orbit, no Dyson swarm.
              This is the first question that must be answered before anything
              else.
            </p>
          </div>

          <p className="text-muted text-lg">
            Drag the altitude slider and see for yourself.
          </p>
        </div>

        <ThermalSimulation />

        <div className="mt-12 bg-surface border border-border rounded-xl p-6">
          <h3 className="font-bold mb-3">The answer</h3>
          <p className="text-muted text-sm leading-relaxed mb-3">
            At 100 km altitude, atmospheric density is low enough that drag
            heating is just 2.56 W/m in solar minimum — easily radiated away as
            infrared. The cable reaches an equilibrium temperature of
            approximately -10°C. That&apos;s a 4.1× thermal margin against
            copper&apos;s melting point, and well within the operating range of
            Zylon, carbon fiber, and every other candidate material.
          </p>
          <p className="text-muted text-sm leading-relaxed mb-3">
            <strong className="text-foreground">It does not melt.</strong> The
            concept survives its first existential test.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            The hard constraint is altitude: below ~85 km, atmospheric density
            increases exponentially and drag heating becomes catastrophic. At
            80 km it reaches ~51 kW/m — no known material survives. The rotor
            must stay above this floor.
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
    </>
  );
}
