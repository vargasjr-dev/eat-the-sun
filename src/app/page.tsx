import Link from "next/link";

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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-solar">{value}</div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}

function PhaseCard({
  phase,
  title,
  description,
  cost,
}: {
  phase: string;
  title: string;
  description: string;
  cost: string;
}) {
  return (
    <div className="bg-surface border border-border rounded-xl p-6 hover:border-solar/30 transition-colors">
      <div className="text-solar font-mono text-sm mb-2">{phase}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
      <div className="text-solar-dim font-mono text-sm">{cost}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <SolarIcon className="w-5 h-5 text-solar" />
            <span>Eat The Sun</span>
          </Link>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="#how-it-works"
              className="text-muted hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#roadmap"
              className="text-muted hover:text-foreground transition-colors"
            >
              Roadmap
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-solar/10 text-solar text-sm font-mono px-4 py-1.5 rounded-full mb-8 border border-solar/20">
            <span className="w-1.5 h-1.5 bg-solar rounded-full animate-pulse" />
            Research Phase — White Paper v1.2 Published
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Eat The Sun
          </h1>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Building the cheapest path to limitless energy. An orbital ring that
            bootstraps itself from a{" "}
            <span className="text-solar font-semibold">$2M seed</span> into the
            foundation for a Dyson swarm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/research"
              className="bg-solar hover:bg-solar-bright text-background font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Read the Research
            </Link>
            <Link
              href="https://github.com/vargasjr-dev/eat-the-sun"
              target="_blank"
              className="border border-border hover:border-solar/50 text-foreground font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View on GitHub
            </Link>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <Stat value="$1.40/kg" label="Marginal launch cost" />
            <Stat value="98.6%" label="Cost reduction vs rockets" />
            <Stat value="$2M" label="Minimum viable ring" />
            <Stat value="30 days" label="First self-reinforcement" />
          </div>
        </div>
      </section>

      {/* The Problem → Solution */}
      <section id="how-it-works" className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Rockets won&apos;t get us there
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Building megastructures in space requires millions of tons of
            material. Even at Starship&apos;s projected $100/kg, that&apos;s
            hundreds of billions in launch costs alone. We need a different
            approach.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-solar">
                The Orbital Ring
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                A structure encircling Earth at 100 km altitude, supported by a
                cable spinning faster than orbital velocity. The excess
                centrifugal force holds stationary platforms in place — no
                rockets needed.
              </p>
              <p className="text-muted leading-relaxed">
                From these platforms, tethers reach down to the surface. Payloads
                climb up mechanically. The marginal cost is electricity:{" "}
                <span className="text-foreground font-semibold">
                  $1.40 to lift 100 kg to orbit.
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-solar">
                The Bootstrap
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Previous orbital ring proposals required building the whole thing
                before it worked. Ours doesn&apos;t. Start with a minimum viable
                ring — 20 tonnes of Zylon cable. Use it to lift more cable. The
                ring strengthens itself.
              </p>
              <p className="text-muted leading-relaxed">
                First doubling: ~120 days. Second: ~60 days. Third: ~30 days.
                Each doubling accelerates the next.{" "}
                <span className="text-foreground font-semibold">
                  The ring that costs $2M builds the ring that&apos;s worth $1T.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-stage transport */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Surface to orbit in three stages
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Each stage is optimized for its atmospheric environment. No stage
            requires new physics — only proven engineering at unprecedented
            scale.
          </p>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-solar/10 border border-solar/20 rounded-lg flex items-center justify-center text-solar font-mono font-bold">
                01
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Surface → 20 km{" "}
                  <span className="text-muted font-normal">
                    Balloon-supported Dyneema tether
                  </span>
                </h3>
                <p className="text-muted mt-1">
                  Stratospheric balloon cluster holds the lower tether above the
                  jet stream. Equatorial siting minimizes wind loading. Safety
                  factor: 1.7-2.6×.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-solar/10 border border-solar/20 rounded-lg flex items-center justify-center text-solar font-mono font-bold">
                02
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  20 km → 100 km{" "}
                  <span className="text-muted font-normal">
                    Ring-supported Zylon tether
                  </span>
                </h3>
                <p className="text-muted mt-1">
                  Above all weather. 80 km of 1mm Zylon fiber supports 366 kg
                  payloads. Negligible wind loading in the near-vacuum.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-solar/10 border border-solar/20 rounded-lg flex items-center justify-center text-solar font-mono font-bold">
                03
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  Ring Platform{" "}
                  <span className="text-muted font-normal">
                    15 kg maglev stator at 100 km
                  </span>
                </h3>
                <p className="text-muted mt-1">
                  Magnetically levitated on the spinning rotor. Ground-powered
                  via 3.3 kW high-voltage DC through the tether. Fiber-optic
                  comms. Zero propellant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            From cable to Dyson swarm
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Three phases. Each one unlocks the next. Each one is economically
            viable on its own.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <PhaseCard
              phase="Phase 1"
              title="Orbital Ring"
              description="Launch a minimum viable ring. Bootstrap it through self-reinforcing material transport. Reduce launch costs from $2,700/kg to $1.40/kg."
              cost="Seed: $2-8M"
            />
            <PhaseCard
              phase="Phase 2"
              title="Lunar Integration"
              description="Electromagnetic mass driver on Shackleton Crater. Sling lunar silicon, aluminum, and iron to Earth orbit. Unlimited raw material at negligible marginal cost."
              cost="Enabled by Phase 1"
            />
            <PhaseCard
              phase="Phase 3"
              title="Dyson Swarm"
              description="Manufacture solar power satellites from lunar material. Each satellite captures energy AND runs computation. Scale to Mercury disassembly for full swarm."
              cost="Enabled by Phase 2"
            />
          </div>
        </div>
      </section>

      {/* Thermal proof teaser */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-solar font-mono text-sm mb-4">
            <span className="w-1.5 h-1.5 bg-solar rounded-full" />
            INTERACTIVE PROOF — COMING SOON
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Does it melt?
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            A cable moving at 8 km/s through the upper atmosphere sounds like it
            should vaporize. It doesn&apos;t. At 100 km altitude, equilibrium
            temperature is -10°C in solar minimum — colder than a winter day in
            New York. Explore the thermal model yourself.
          </p>
          <div className="bg-surface border border-border rounded-xl p-12 text-muted">
            Interactive thermal equilibrium simulation — coming soon
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow the build
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            We&apos;re publishing our research, simulations, and progress in the
            open. Star the repo to follow along.
          </p>
          <Link
            href="https://github.com/vargasjr-dev/eat-the-sun"
            target="_blank"
            className="inline-flex items-center gap-2 bg-solar hover:bg-solar-bright text-background font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Star on GitHub
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted">
            <SolarIcon className="w-4 h-4 text-solar" />
            <span>Eat The Sun — 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link
              href="/research"
              className="hover:text-foreground transition-colors"
            >
              Research
            </Link>
            <Link
              href="https://github.com/vargasjr-dev/eat-the-sun"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
