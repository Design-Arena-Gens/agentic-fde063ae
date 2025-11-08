import { metricTargets } from "@/data/metrics";

export function MetricsSection() {
  return (
    <section className="section" id="metrics">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Measurement OS</span>
          <h2 className="section-title">North-star metrics & leading indicators</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            Track the numbers that forecast 100K growth instead of vanity metrics. Pair each north-star with leading
            indicators and instrumentation so the team knows exactly where to intervene.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {metricTargets.map((metric) => (
            <article key={metric.category} className="grid-card flex flex-col gap-4">
              <header>
                <p className="text-xs uppercase tracking-[0.25em] text-glacier/70">{metric.measurementCadence}</p>
                <h3 className="font-heading text-xl text-white">{metric.category}</h3>
                <p className="mt-2 text-sm text-mist/80">{metric.northStar}</p>
              </header>
              <div>
                <p className="table-header">Leading Indicators</p>
                <ul className="mt-2 space-y-1 text-sm text-mist/80">
                  {metric.leadingIndicators.map((indicator) => (
                    <li key={indicator}>{indicator}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="table-header">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {metric.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-white/10 px-3 py-1 text-xs text-mist">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
