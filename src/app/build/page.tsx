import Link from "next/link";

export const metadata = {
  title: "Build Sequence — Eat The Sun",
  description:
    "The step-by-step engineering playbook for constructing an orbital ring. What gets manufactured, launched, assembled, and in what order.",
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

function BuildStep({
  step,
  title,
  location,
  description,
  specs,
  openQuestions,
}: {
  step: number;
  title: string;
  location: string;
  description: string;
  specs: { label: string; value: string }[];
  openQuestions?: string[];
}) {
  return (
    <div className="relative">
      {/* Timeline connector */}
      <div className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-solar/40 to-border" />

      <div className="flex gap-5">
        {/* Step marker */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-solar/10 border border-solar/30 flex items-center justify-center font-mono font-bold text-sm text-solar z-10">
          {step}
        </div>

        <div className="flex-1 pb-12">
          {/* Header */}
          <div className="mb-1">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className="text-xs font-mono text-muted">{location}</span>
          </div>

          {/* Description */}
          <p className="text-muted text-sm leading-relaxed mt-3 mb-4">
            {description}
          </p>

          {/* Specs table */}
          <div className="bg-surface border border-border rounded-lg overflow-hidden mb-4">
            {specs.map((spec, i) => (
              <div
                key={i}
                className={`flex justify-between px-4 py-2.5 text-sm ${
                  i < specs.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <span className="text-muted">{spec.label}</span>
                <span className="font-mono font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Open questions */}
          {openQuestions && openQuestions.length > 0 && (
            <div className="bg-solar/5 border border-solar/20 rounded-lg px-4 py-3">
              <div className="text-xs font-mono text-solar mb-2 uppercase tracking-wider">
                Open Questions
              </div>
              <ul className="space-y-1">
                {openQuestions.map((q, i) => (
                  <li key={i} className="text-sm text-muted flex gap-2">
                    <span className="text-solar/60 flex-shrink-0">?</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BuildSequencePage() {
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
            <Link
              href="/roadmap"
              className="text-muted hover:text-foreground transition-colors"
            >
              Roadmap
            </Link>
            <Link href="/build" className="text-foreground font-medium">
              Build
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border bg-solar/10 text-solar border-solar/20">
              Engineering Playbook
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border bg-muted/10 text-muted border-muted/20">
              Draft
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Sequence
          </h1>
          <p className="text-muted text-lg mb-4">
            How do you actually build an orbital ring? Step by step — what gets
            manufactured, what gets launched, what gets assembled, and in what
            order.
          </p>
          <p className="text-muted text-sm">
            This is the minimum viable ring: a single Zylon cable rotor with
            tethered platforms. Enough to prove the concept and begin
            self-reinforcing growth. Total cost target: ~$2-3M.
          </p>
        </div>

        {/* Build Steps */}
        <div className="mt-12">
          <BuildStep
            step={1}
            title="Manufacture the Rotor Cable"
            location="Ground — Manufacturing Facility"
            description="Produce a continuous loop of Zylon (PBO fiber) cable, roughly 40,000 km in circumference — enough to circle the Earth at 100 km altitude. The cable is wound onto a deployment spool sized for a single launch vehicle payload fairing. Zylon is an existing industrial material manufactured by Toyobo (Japan), used in body armor, motorsport tethers, and aerospace applications."
            specs={[
              { label: "Material", value: "Zylon (PBO fiber)" },
              { label: "Total mass", value: "~20 tonnes" },
              { label: "Length", value: "~40,000 km" },
              { label: "Tensile strength", value: "5.8 GPa" },
              { label: "Density", value: "1.56 g/cm³" },
              { label: "Hoop stress at 2% overspeed", value: "3.88 GPa (1.5× safety factor)" },
            ]}
            openQuestions={[
              "Can Toyobo produce a single continuous 40,000 km fiber, or does it need to be spliced? What's the splice strength penalty?",
              "What's the actual per-kg cost at 20-tonne volume? Published figures suggest ~$100/kg but bulk pricing is unknown.",
              "What spool geometry fits inside a Starship payload fairing (9m diameter × 22m height)?",
              "What coating or sheathing protects Zylon from atomic oxygen degradation at 100 km?",
            ]}
          />

          <BuildStep
            step={2}
            title="Launch to 100 km"
            location="Launch Site → Low Earth Orbit"
            description="A single launch vehicle (e.g. Starship) delivers the spooled cable to a 100 km altitude circular orbit. The payload is the cable spool plus a deployment mechanism. At current projected pricing, this is the single largest cost in the entire bootstrap sequence."
            specs={[
              { label: "Payload mass", value: "~20 tonnes" },
              { label: "Target altitude", value: "100 km" },
              { label: "Launch vehicle", value: "Starship (or equivalent heavy lift)" },
              { label: "Estimated launch cost", value: "~$2M (at ~$100/kg projected)" },
              { label: "Orbit type", value: "Equatorial circular" },
            ]}
            openQuestions={[
              "100 km is below typical orbital altitude — atmospheric drag will deorbit the payload within days if not spun up quickly. What's the timeline constraint?",
              "Does the spool deploy from orbit, or does the launch vehicle unspool during ascent?",
              "What's the deployment mechanism? Spin-stabilized release? Spring-loaded?",
            ]}
          />

          <BuildStep
            step={3}
            title="Deploy and Spin Up the Rotor"
            location="100 km Altitude — Equatorial Orbit"
            description="The cable is unspooled from the deployment mechanism into a continuous loop encircling the Earth. Ground-based electromagnetic stations then accelerate the cable from orbital velocity (7,844 m/s) to 102% overspeed (7,999 m/s). The 2% excess velocity generates net outward centrifugal force — this is what will hold the stator platforms up."
            specs={[
              { label: "Orbital velocity at 100 km", value: "7,844 m/s" },
              { label: "Target velocity (102%)", value: "7,999 m/s" },
              { label: "Excess centrifugal acceleration", value: "0.384 m/s² per kg of rotor" },
              { label: "Spin-up energy (20 tonnes)", value: "~640 GJ (~180 MWh)" },
              { label: "Spin-up electricity cost", value: "~$9,000 at $0.05/kWh" },
            ]}
            openQuestions={[
              "How do ground-based EM stations couple to a cable at 100 km altitude? Is this inductive, or does it require embedded conductors in the cable?",
              "How many ground stations are needed, and where should they be positioned?",
              "What's the unspooling procedure? How do you form a 40,000 km loop from a spool in orbit?",
              "What keeps the cable at 100 km during the spin-up window before excess centrifugal force kicks in?",
            ]}
          />

          <BuildStep
            step={4}
            title="Levitate the First Platform"
            location="100 km Altitude — On the Rotor"
            description="A 15 kg stator platform is magnetically levitated onto the spinning rotor. The platform uses a Halbach array for passive maglev coupling — the rotor's excess centrifugal force supports the platform's weight against gravity. The platform is the anchor point for everything that follows: tethers, payloads, power, and comms."
            specs={[
              { label: "Platform mass", value: "15 kg total" },
              { label: "Maglev system", value: "8 kg Halbach array" },
              { label: "Winch", value: "3 kg brushless DC" },
              { label: "Frame", value: "3 kg carbon fiber" },
              { label: "Fittings", value: "1 kg titanium" },
              { label: "Stator support ratio", value: "0.04 kg stator per kg rotor" },
              { label: "Max platforms at 20T rotor", value: "~9 stations" },
              { label: "Deflection angle at 20T", value: "~19° (stable)" },
            ]}
            openQuestions={[
              "How is the first platform delivered to the rotor? Separate small launch, or included in the Step 2 payload?",
              "What's the procedure for initial magnetic coupling? Does the platform approach from above, below, or alongside?",
              "How does the Halbach array handle the 155 m/s velocity differential (rotor overspeed)?",
              "What active stabilization is needed beyond passive maglev?",
            ]}
          />

          <BuildStep
            step={5}
            title="Lower the First Tether"
            location="100 km → 20 km Altitude"
            description="From the levitated platform, three redundant 0.5mm Zylon threads are lowered 80 km to a stratospheric balloon station at 20 km. This is Stage 2 of the three-stage transport system. Above 20 km, there's negligible wind — the tether hangs nearly vertically. Power flows up via a high-voltage DC conductor woven into the tether. Comms flow via a fiber-optic strand."
            specs={[
              { label: "Tether material", value: "Zylon (PBO), 0.5mm × 3 redundant" },
              { label: "Length", value: "80 km" },
              { label: "Total tether mass", value: "~72 kg" },
              { label: "Breaking strength", value: "~4,550 N" },
              { label: "Self-weight tension", value: "~960 N" },
              { label: "Remaining payload capacity", value: "~3,590 N (366 kg)" },
              { label: "Power delivery", value: "10 kV / 0.33A / 3.3 kW HVDC" },
            ]}
            openQuestions={[
              "What's the tether lowering mechanism? Gravity-fed from the platform winch?",
              "How does the tether connect to the balloon station at 20 km? Autonomous docking?",
              "How is the HVDC conductor integrated into the Zylon tether without compromising tensile strength?",
              "What's the failure mode if one of the three redundant threads breaks?",
            ]}
          />

          <BuildStep
            step={6}
            title="Deploy the Balloon Station and Lower Tether"
            location="Surface → 20 km Altitude"
            description="A cluster of stratospheric balloons is deployed to 20 km, forming the relay station between the surface tether (Stage 1) and the ring tether (Stage 2). A Dyneema (UHMWPE) rope is suspended from the balloon station down to a ground station at an equatorial site. This lower tether must survive the jet stream at 10-12 km — the highest-risk segment."
            specs={[
              { label: "Lower tether material", value: "Dyneema (UHMWPE), 4-6 mm diameter" },
              { label: "Length", value: "20 km" },
              { label: "Mass", value: "200-500 kg" },
              { label: "Breaking strength", value: "29,400-68,600 N" },
              { label: "Jet stream wind load", value: "~17,000-26,000 N" },
              { label: "Safety factor", value: "1.7-2.6× (before fairings)" },
              { label: "Ground station", value: "Equatorial — Kiribati, Galápagos, or ocean platform" },
            ]}
            openQuestions={[
              "What balloon technology works at 20 km for sustained operation? What's the replacement cycle?",
              "Can aerodynamic fairings on the lower tether meaningfully reduce jet stream loading?",
              "What's the ground station infrastructure? Anchoring, winch systems, power supply?",
              "How does the balloon station physically bridge the two tether segments?",
            ]}
          />

          <BuildStep
            step={7}
            title="First Payload: Self-Reinforcement Begins"
            location="Surface → Ring (100 km)"
            description="The first payload climbs the full three-stage tether system: ground to balloon station (Stage 1), balloon to ring platform (Stage 2), received at the ring (Stage 3). The payload is more Zylon cable. Every kilogram of cable added to the rotor increases the ring's load-bearing capacity, enabling heavier future payloads. The self-reinforcing loop has begun."
            specs={[
              { label: "First payload mass", value: "10-100 kg" },
              { label: "Trip time (10 kg at 3.3 kW)", value: "~50 minutes" },
              { label: "Trip time (100 kg at 3.3 kW)", value: "~8 hours" },
              { label: "Energy per 100 kg trip", value: "~26 kWh" },
              { label: "Electricity cost per 100 kg", value: "~$1.40" },
              { label: "Month 1 target", value: "100 kg/day × 30 days = 3 tonnes" },
              { label: "Ring mass increase in month 1", value: "+15% (20T → 23T)" },
            ]}
            openQuestions={[
              "What's the climber mechanism? Motor-driven rollers gripping the tether?",
              "How is new cable integrated into the spinning rotor? Spliced in-orbit?",
              "What's the payload attachment/detachment procedure at the ring platform?",
            ]}
          />

          <BuildStep
            step={8}
            title="Multiply Platforms"
            location="100 km Altitude — Multiple Points on Ring"
            description="As ring mass grows, additional stator platforms are levitated at intervals around the circumference. Each new platform gets its own tether pair (upper and lower), its own balloon station, and its own ground connection. Throughput scales linearly with station count."
            specs={[
              { label: "Stations at 20T rotor", value: "Up to 9" },
              { label: "Throughput per station", value: "~100 kg/day" },
              { label: "Total throughput at 9 stations", value: "~900 kg/day" },
              { label: "Annual throughput", value: "~330 tonnes" },
            ]}
            openQuestions={[
              "What's the minimum ring mass increment before a new station can be safely added?",
              "How are platforms distributed around the ring? Evenly spaced, or clustered near ground stations?",
              "What's the coordination protocol between multiple stations lifting simultaneously?",
            ]}
          />

          <BuildStep
            step={9}
            title="Exponential Growth"
            location="Ring-Wide"
            description="Each doubling of ring mass accelerates the next doubling. More mass means more platforms, more throughput, faster reinforcement. The ring enters an exponential growth phase. First doubling (~120 days), second (~60 days), third (~30 days)."
            specs={[
              { label: "First doubling", value: "~120 days (20T → 40T)" },
              { label: "Second doubling", value: "~60 days (40T → 80T)" },
              { label: "Third doubling", value: "~30 days (80T → 160T)" },
              { label: "Growth model", value: "Each doubling halves the next doubling time" },
            ]}
            openQuestions={[
              "What's the practical ceiling before single-cable architecture becomes insufficient?",
              "At what mass does atmospheric drag power consumption become a binding constraint?",
              "When does the transition to mass-stream rotor architecture become necessary?",
            ]}
          />

          <BuildStep
            step={10}
            title="Upgrade to Resilient Topology"
            location="Ring-Wide"
            description="The single cable evolves into a six-cable ladder topology with cross-links every 500-1000m. This is the transition from 'minimum viable' to 'operational infrastructure.' The ladder topology survives 1-2 cable severings with load redistribution and enables self-repair via tether payload delivery."
            specs={[
              { label: "Configuration", value: "6 × 0.5mm Zylon cables, ladder topology" },
              { label: "Cross-links", value: "Every 500-1000 m" },
              { label: "Total rotor mass", value: "~75 tonnes" },
              { label: "Stator capacity", value: "3,000 kg (34 stations)" },
              { label: "Annual throughput", value: "1,200+ tonnes" },
              { label: "Fault tolerance", value: "Survives 1-2 cable breaks" },
            ]}
            openQuestions={[
              "How are parallel cables deployed alongside the existing rotor? Sequential spooling?",
              "What's the cross-link attachment mechanism at 8 km/s relative to ground?",
              "What triggers the transition? Mass threshold? Failure event? Planned milestone?",
            ]}
          />
        </div>

        {/* What comes after */}
        <div className="mt-8 bg-surface border border-border rounded-xl p-8">
          <div className="text-sm font-mono text-solar mb-3 uppercase tracking-wider">
            After Step 10
          </div>
          <h2 className="text-xl font-bold mb-3">The ring is operational</h2>
          <p className="text-muted text-sm leading-relaxed mb-4">
            A resilient orbital ring with 34+ tether stations, delivering 1,200+
            tonnes per year to orbit at ~$1.40/kg. From here, the roadmap
            extends to lunar material integration, solar power satellite
            manufacturing, and eventually a Dyson swarm. But the hard part is
            done — getting to orbit is no longer the bottleneck.
          </p>
          <div className="flex gap-3">
            <Link
              href="/roadmap"
              className="text-solar hover:text-solar-bright text-sm font-medium transition-colors"
            >
              View the full roadmap →
            </Link>
            <Link
              href="/research/incremental-bootstrap-architecture"
              className="text-solar hover:text-solar-bright text-sm font-medium transition-colors"
            >
              Read the white paper →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
