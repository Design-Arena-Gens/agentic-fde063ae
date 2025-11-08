import { contentPillars } from "@/data/content";

export function ContentMatrix() {
  return (
    <section className="section" id="content-system">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Content Architecture</span>
          <h2 className="section-title">Pillar system & publishing cadence</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            Balance emotional resonance with utility content. Each pillar contains high-performing format pairings and
            reinforcement moves to maintain narrative cohesion while maximizing discoverability.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {contentPillars.map((pillar) => (
            <article key={pillar.pillar} className="grid-card flex flex-col gap-4">
              <header>
                <p className="text-xs uppercase tracking-[0.25em] text-glacier/70">{pillar.cadence}</p>
                <h3 className="font-heading text-xl text-white">{pillar.pillar}</h3>
                <p className="mt-2 text-sm text-mist/80">{pillar.intent}</p>
              </header>
              <div>
                <p className="table-header">Signature Formats</p>
                <ul className="mt-2 space-y-1 text-sm text-mist/80">
                  {pillar.signatureFormats.map((format) => (
                    <li key={format}>{format}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="table-header">Reinforcement Moves</p>
                <ul className="mt-2 space-y-1 text-xs text-mist/70">
                  {pillar.reinforcementMoves.map((move) => (
                    <li key={move}>{move}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
