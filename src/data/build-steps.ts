export interface SubStep {
  title: string;
  description: string;
  specs?: { label: string; value: string }[];
  status: "open" | "in-progress" | "resolved";
  answersQuestion?: string;
}

export interface BuildStep {
  step: number;
  slug: string;
  title: string;
  location: string;
  description: string;
  specs: { label: string; value: string }[];
  openQuestions: string[];
  subSteps?: SubStep[];
}

export const buildSteps: BuildStep[] = [
  {
    step: 1,
    slug: "manufacture-rotor-cable",
    title: "Manufacture the Rotor Cable",
    location: "Ground — Manufacturing Facility",
    description:
      "Produce a continuous loop of Zylon (PBO fiber) cable, roughly 40,000 km in circumference — enough to circle the Earth at 100 km altitude. The cable is wound onto a deployment spool sized for a single launch vehicle payload fairing. Zylon is an existing industrial material manufactured by Toyobo (Japan), used in body armor, motorsport tethers, and aerospace applications.",
    specs: [
      { label: "Material", value: "Zylon (PBO fiber)" },
      { label: "Total mass", value: "~20 tonnes" },
      { label: "Length", value: "~40,000 km" },
      { label: "Tensile strength", value: "5.8 GPa" },
      { label: "Density", value: "1.56 g/cm³" },
      {
        label: "Hoop stress at 2% overspeed",
        value: "3.88 GPa (1.5× safety factor)",
      },
    ],
    openQuestions: [
      "Can Toyobo produce a single continuous 40,000 km fiber, or does it need to be spliced? What's the splice strength penalty?",
      "What's the actual per-kg cost at 20-tonne volume? Published figures suggest ~$100/kg but bulk pricing is unknown.",
      "What spool geometry fits inside a Starship payload fairing (9m diameter × 22m height)?",
      "What coating or sheathing protects Zylon from atomic oxygen degradation at 100 km?",
    ],
    subSteps: [
      {
        title: "Fiber Production Feasibility",
        description:
          "Zylon (poly(p-phenylene-2,6-benzobisoxazole), or PBO) is manufactured exclusively by Toyobo Co., Ltd. in Otsu, Japan. Current global production is estimated at 300-500 tonnes per year, primarily for cut-resistant gloves, body armor, and high-performance ropes. The orbital ring requires 20 tonnes — roughly 4-7% of annual output. The critical question is not volume but continuity: can a single unbroken fiber be produced at 40,000 km length, or must it be spliced from shorter segments?",
        specs: [
          { label: "Manufacturer", value: "Toyobo Co., Ltd. (Japan)" },
          { label: "Current global output", value: "~300-500 tonnes/year" },
          { label: "Required volume", value: "20 tonnes (~4-7% of output)" },
          { label: "Max continuous spool (est.)", value: "~50-200 km per bobbin" },
          { label: "Splices needed (est.)", value: "200-800 splices" },
        ],
        status: "open",
        answersQuestion:
          "Can Toyobo produce a single continuous 40,000 km fiber, or does it need to be spliced? What's the splice strength penalty?",
      },
      {
        title: "Splice Engineering",
        description:
          "If the cable cannot be produced as a single continuous fiber (almost certainly the case — no industrial process produces 40,000 km continuous filament), every splice becomes a potential failure point. The splice must carry the full hoop stress of 3.88 GPa without being the weak link. Options include fusion splicing (thermal bonding of PBO ends), mechanical splicing (overlapping fibers with adhesive sheathing), and braided integration (interleaving fiber ends over a long overlap zone). The overlap length determines splice efficiency — longer overlaps approach 100% of virgin fiber strength but add mass.",
        specs: [
          { label: "Target splice efficiency", value: "≥95% of virgin fiber strength" },
          { label: "Fusion splice (PBO)", value: "~70-80% efficiency (research stage)" },
          { label: "Braided overlap splice", value: "~90-98% efficiency at 50-100× diameter overlap" },
          { label: "Mass penalty per splice", value: "~10-50g (at braided overlap)" },
          { label: "Total splice mass (800 splices)", value: "~8-40 kg (<0.2% of total)" },
        ],
        status: "open",
        answersQuestion:
          "Can Toyobo produce a single continuous 40,000 km fiber, or does it need to be spliced? What's the splice strength penalty?",
      },
      {
        title: "Bulk Procurement & Cost",
        description:
          "Published Zylon pricing ranges from $100-200/kg at small commercial quantities. At 20-tonne volume (a significant fraction of global output), bulk pricing is negotiable but unknown. The procurement itself may require a dedicated production run at Toyobo's facility, with lead times of 6-12 months. Alternative PBO sources do not exist — Toyobo holds the manufacturing monopoly.",
        specs: [
          { label: "Published retail price", value: "$100-200/kg" },
          { label: "Estimated bulk (20T)", value: "$50-150/kg (negotiable)" },
          { label: "Total cable cost range", value: "$1M - $3M" },
          { label: "Lead time (est.)", value: "6-12 months" },
          { label: "Supplier", value: "Toyobo (sole source)" },
          { label: "Supply risk", value: "High — single manufacturer, no alternatives" },
        ],
        status: "open",
        answersQuestion:
          "What's the actual per-kg cost at 20-tonne volume? Published figures suggest ~$100/kg but bulk pricing is unknown.",
      },
      {
        title: "Spool Design for Starship Fairing",
        description:
          "The entire 20-tonne, 40,000 km cable must be wound onto a spool that fits inside a Starship payload fairing (9m internal diameter × ~22m usable height). The spool design determines deployment dynamics — a poorly designed spool can tangle, jam, or create uneven tension during unspooling. The cable diameter drives spool geometry: a 1mm diameter Zylon cable wound at maximum packing density requires calculating the spool drum diameter, flange height, and winding pattern.",
        specs: [
          { label: "Fairing diameter (internal)", value: "9 m" },
          { label: "Fairing height (usable)", value: "~22 m" },
          { label: "Cable diameter", value: "~1 mm (single strand)" },
          { label: "Winding layers (est.)", value: "~4,000 layers" },
          { label: "Spool mass budget", value: "~500-1,000 kg (aluminum frame)" },
          { label: "Deployment mechanism", value: "TBD — motorized or spin-release" },
        ],
        status: "open",
        answersQuestion:
          "What spool geometry fits inside a Starship payload fairing (9m diameter × 22m height)?",
      },
      {
        title: "Atomic Oxygen Protection",
        description:
          "At 100 km altitude, atomic oxygen (AO) density is approximately 10⁹ atoms/cm³. AO is the primary degradation mechanism for organic polymers in low Earth orbit — it erodes exposed surfaces through oxidation. Zylon (PBO) is an organic polymer and is vulnerable. The International Space Station uses protective coatings (SiO₂, Al₂O₃) on exposed polymer surfaces. The rotor cable needs a conformal coating that survives 8 km/s relative wind while protecting the fiber underneath. Options: chemical vapor deposition (CVD) of silicon oxide, atomic layer deposition (ALD) of alumina, or a pre-applied metal foil sheath.",
        specs: [
          { label: "AO density at 100 km", value: "~10⁹ atoms/cm³" },
          { label: "AO erosion rate (unprotected PBO)", value: "~1-10 μm/year (est.)" },
          { label: "SiO₂ coating thickness", value: "100-500 nm" },
          { label: "Al₂O₃ (ALD) coating", value: "50-200 nm" },
          { label: "Metal foil sheath", value: "5-25 μm aluminum" },
          { label: "Mass penalty (Al foil, 40,000 km)", value: "~50-250 kg" },
        ],
        status: "open",
        answersQuestion:
          "What coating or sheathing protects Zylon from atomic oxygen degradation at 100 km?",
      },
    ],
  },
  {
    step: 2,
    slug: "launch-to-orbit",
    title: "Launch to 100 km",
    location: "Launch Site → Low Earth Orbit",
    description:
      "A single launch vehicle (e.g. Starship) delivers the spooled cable to a 100 km altitude circular orbit. The payload is the cable spool plus a deployment mechanism. At current projected pricing, this is the single largest cost in the entire bootstrap sequence.",
    specs: [
      { label: "Payload mass", value: "~20 tonnes" },
      { label: "Target altitude", value: "100 km" },
      { label: "Launch vehicle", value: "Starship (or equivalent heavy lift)" },
      { label: "Estimated launch cost", value: "~$2M (at ~$100/kg projected)" },
      { label: "Orbit type", value: "Equatorial circular" },
    ],
    openQuestions: [
      "100 km is below typical orbital altitude — atmospheric drag will deorbit the payload within days if not spun up quickly. What's the timeline constraint?",
      "Does the spool deploy from orbit, or does the launch vehicle unspool during ascent?",
      "What's the deployment mechanism? Spin-stabilized release? Spring-loaded?",
    ],
  },
  {
    step: 3,
    slug: "deploy-and-spin-up",
    title: "Deploy and Spin Up the Rotor",
    location: "100 km Altitude — Equatorial Orbit",
    description:
      "The cable is unspooled from the deployment mechanism into a continuous loop encircling the Earth. Ground-based electromagnetic stations then accelerate the cable from orbital velocity (7,844 m/s) to 102% overspeed (7,999 m/s). The 2% excess velocity generates net outward centrifugal force — this is what will hold the stator platforms up.",
    specs: [
      { label: "Orbital velocity at 100 km", value: "7,844 m/s" },
      { label: "Target velocity (102%)", value: "7,999 m/s" },
      {
        label: "Excess centrifugal acceleration",
        value: "0.384 m/s² per kg of rotor",
      },
      { label: "Spin-up energy (20 tonnes)", value: "~640 GJ (~180 MWh)" },
      { label: "Spin-up electricity cost", value: "~$9,000 at $0.05/kWh" },
    ],
    openQuestions: [
      "How do ground-based EM stations couple to a cable at 100 km altitude? Is this inductive, or does it require embedded conductors in the cable?",
      "How many ground stations are needed, and where should they be positioned?",
      "What's the unspooling procedure? How do you form a 40,000 km loop from a spool in orbit?",
      "What keeps the cable at 100 km during the spin-up window before excess centrifugal force kicks in?",
    ],
  },
  {
    step: 4,
    slug: "first-platform",
    title: "Levitate the First Platform",
    location: "100 km Altitude — On the Rotor",
    description:
      "A 15 kg stator platform is magnetically levitated onto the spinning rotor. The platform uses a Halbach array for passive maglev coupling — the rotor's excess centrifugal force supports the platform's weight against gravity. The platform is the anchor point for everything that follows: tethers, payloads, power, and comms.",
    specs: [
      { label: "Platform mass", value: "15 kg total" },
      { label: "Maglev system", value: "8 kg Halbach array" },
      { label: "Winch", value: "3 kg brushless DC" },
      { label: "Frame", value: "3 kg carbon fiber" },
      { label: "Fittings", value: "1 kg titanium" },
      { label: "Stator support ratio", value: "0.04 kg stator per kg rotor" },
      { label: "Max platforms at 20T rotor", value: "~9 stations" },
      { label: "Deflection angle at 20T", value: "~19° (stable)" },
    ],
    openQuestions: [
      "How is the first platform delivered to the rotor? Separate small launch, or included in the Step 2 payload?",
      "What's the procedure for initial magnetic coupling? Does the platform approach from above, below, or alongside?",
      "How does the Halbach array handle the 155 m/s velocity differential (rotor overspeed)?",
      "What active stabilization is needed beyond passive maglev?",
    ],
  },
  {
    step: 5,
    slug: "first-tether",
    title: "Lower the First Tether",
    location: "100 km → 20 km Altitude",
    description:
      "From the levitated platform, three redundant 0.5mm Zylon threads are lowered 80 km to a stratospheric balloon station at 20 km. This is Stage 2 of the three-stage transport system. Above 20 km, there's negligible wind — the tether hangs nearly vertically. Power flows up via a high-voltage DC conductor woven into the tether. Comms flow via a fiber-optic strand.",
    specs: [
      {
        label: "Tether material",
        value: "Zylon (PBO), 0.5mm × 3 redundant",
      },
      { label: "Length", value: "80 km" },
      { label: "Total tether mass", value: "~72 kg" },
      { label: "Breaking strength", value: "~4,550 N" },
      { label: "Self-weight tension", value: "~960 N" },
      { label: "Remaining payload capacity", value: "~3,590 N (366 kg)" },
      { label: "Power delivery", value: "10 kV / 0.33A / 3.3 kW HVDC" },
    ],
    openQuestions: [
      "What's the tether lowering mechanism? Gravity-fed from the platform winch?",
      "How does the tether connect to the balloon station at 20 km? Autonomous docking?",
      "How is the HVDC conductor integrated into the Zylon tether without compromising tensile strength?",
      "What's the failure mode if one of the three redundant threads breaks?",
    ],
  },
  {
    step: 6,
    slug: "balloon-station",
    title: "Deploy the Balloon Station and Lower Tether",
    location: "Surface → 20 km Altitude",
    description:
      "A cluster of stratospheric balloons is deployed to 20 km, forming the relay station between the surface tether (Stage 1) and the ring tether (Stage 2). A Dyneema (UHMWPE) rope is suspended from the balloon station down to a ground station at an equatorial site. This lower tether must survive the jet stream at 10-12 km — the highest-risk segment.",
    specs: [
      {
        label: "Lower tether material",
        value: "Dyneema (UHMWPE), 4-6 mm diameter",
      },
      { label: "Length", value: "20 km" },
      { label: "Mass", value: "200-500 kg" },
      { label: "Breaking strength", value: "29,400-68,600 N" },
      { label: "Jet stream wind load", value: "~17,000-26,000 N" },
      { label: "Safety factor", value: "1.7-2.6× (before fairings)" },
      {
        label: "Ground station",
        value: "Equatorial — Kiribati, Galápagos, or ocean platform",
      },
    ],
    openQuestions: [
      "What balloon technology works at 20 km for sustained operation? What's the replacement cycle?",
      "Can aerodynamic fairings on the lower tether meaningfully reduce jet stream loading?",
      "What's the ground station infrastructure? Anchoring, winch systems, power supply?",
      "How does the balloon station physically bridge the two tether segments?",
    ],
  },
  {
    step: 7,
    slug: "first-payload",
    title: "First Payload: Self-Reinforcement Begins",
    location: "Surface → Ring (100 km)",
    description:
      "The first payload climbs the full three-stage tether system: ground to balloon station (Stage 1), balloon to ring platform (Stage 2), received at the ring (Stage 3). The payload is more Zylon cable. Every kilogram of cable added to the rotor increases the ring's load-bearing capacity, enabling heavier future payloads. The self-reinforcing loop has begun.",
    specs: [
      { label: "First payload mass", value: "10-100 kg" },
      { label: "Trip time (10 kg at 3.3 kW)", value: "~50 minutes" },
      { label: "Trip time (100 kg at 3.3 kW)", value: "~8 hours" },
      { label: "Energy per 100 kg trip", value: "~26 kWh" },
      { label: "Electricity cost per 100 kg", value: "~$1.40" },
      { label: "Month 1 target", value: "100 kg/day × 30 days = 3 tonnes" },
      { label: "Ring mass increase in month 1", value: "+15% (20T → 23T)" },
    ],
    openQuestions: [
      "What's the climber mechanism? Motor-driven rollers gripping the tether?",
      "How is new cable integrated into the spinning rotor? Spliced in-orbit?",
      "What's the payload attachment/detachment procedure at the ring platform?",
    ],
  },
  {
    step: 8,
    slug: "multiply-platforms",
    title: "Multiply Platforms",
    location: "100 km Altitude — Multiple Points on Ring",
    description:
      "As ring mass grows, additional stator platforms are levitated at intervals around the circumference. Each new platform gets its own tether pair (upper and lower), its own balloon station, and its own ground connection. Throughput scales linearly with station count.",
    specs: [
      { label: "Stations at 20T rotor", value: "Up to 9" },
      { label: "Throughput per station", value: "~100 kg/day" },
      { label: "Total throughput at 9 stations", value: "~900 kg/day" },
      { label: "Annual throughput", value: "~330 tonnes" },
    ],
    openQuestions: [
      "What's the minimum ring mass increment before a new station can be safely added?",
      "How are platforms distributed around the ring? Evenly spaced, or clustered near ground stations?",
      "What's the coordination protocol between multiple stations lifting simultaneously?",
    ],
  },
  {
    step: 9,
    slug: "exponential-growth",
    title: "Exponential Growth",
    location: "Ring-Wide",
    description:
      "Each doubling of ring mass accelerates the next doubling. More mass means more platforms, more throughput, faster reinforcement. The ring enters an exponential growth phase. First doubling (~120 days), second (~60 days), third (~30 days).",
    specs: [
      { label: "First doubling", value: "~120 days (20T → 40T)" },
      { label: "Second doubling", value: "~60 days (40T → 80T)" },
      { label: "Third doubling", value: "~30 days (80T → 160T)" },
      {
        label: "Growth model",
        value: "Each doubling halves the next doubling time",
      },
    ],
    openQuestions: [
      "What's the practical ceiling before single-cable architecture becomes insufficient?",
      "At what mass does atmospheric drag power consumption become a binding constraint?",
      "When does the transition to mass-stream rotor architecture become necessary?",
    ],
  },
  {
    step: 10,
    slug: "resilient-topology",
    title: "Upgrade to Resilient Topology",
    location: "Ring-Wide",
    description:
      "The single cable evolves into a six-cable ladder topology with cross-links every 500-1000m. This is the transition from 'minimum viable' to 'operational infrastructure.' The ladder topology survives 1-2 cable severings with load redistribution and enables self-repair via tether payload delivery.",
    specs: [
      {
        label: "Configuration",
        value: "6 × 0.5mm Zylon cables, ladder topology",
      },
      { label: "Cross-links", value: "Every 500-1000 m" },
      { label: "Total rotor mass", value: "~75 tonnes" },
      { label: "Stator capacity", value: "3,000 kg (34 stations)" },
      { label: "Annual throughput", value: "1,200+ tonnes" },
      { label: "Fault tolerance", value: "Survives 1-2 cable breaks" },
    ],
    openQuestions: [
      "How are parallel cables deployed alongside the existing rotor? Sequential spooling?",
      "What's the cross-link attachment mechanism at 8 km/s relative to ground?",
      "What triggers the transition? Mass threshold? Failure event? Planned milestone?",
    ],
  },
];

export function getStepBySlug(slug: string): BuildStep | undefined {
  return buildSteps.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return buildSteps.map((s) => s.slug);
}
