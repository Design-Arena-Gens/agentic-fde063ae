import { timeline } from "@/data/roadmap";

export function TimelineSection() {
  return (
    <section id="roadmap" className="section">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Execution Roadmap</span>
          <h2 className="section-title">10-month scaling timeline</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            Each phase compacts the best-in-class tactics into a focused sprint. Stack them sequentially to maintain
            compounding algorithm signals while progressing offers and operations.
          </p>
        </div>
        <div className="relative flex flex-col gap-8">
          {timeline.map((phase, index) => (
            <div key={phase.phase} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <span className="timeline-dot" />
                {index !== timeline.length - 1 && <span className="timeline-line" />}
              </div>
              <article className="grid-card flex-1">
                <header className="flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-glacier/70">{phase.monthRange}</p>
                  <h3 className="font-heading text-xl text-white">{phase.phase}</h3>
                  <p className="text-sm text-mist/80">{phase.objective}</p>
                </header>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <p className="table-header">Key Moves</p>
                    <ul className="mt-2 space-y-1 text-sm text-mist/80">
                      {phase.keyMoves.map((move) => (
                        <li key={move}>{move}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="table-header">Metrics</p>
                    <ul className="mt-2 space-y-1 text-xs text-mist/70">
                      {phase.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-mist/70">
                  <span className="font-semibold text-white/80">Proof of progress:</span> {phase.proofOfProgress}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
