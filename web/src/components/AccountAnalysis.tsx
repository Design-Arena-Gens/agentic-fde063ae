import { primaryAccounts } from "@/data/accounts";

export function AccountAnalysisSection() {
  return (
    <section id="account-analysis" className="section">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Signal Extraction</span>
          <h2 className="section-title">Source account dissection</h2>
          <p className="max-w-2xl text-sm text-mist/80">
            Reverse-engineered operating systems from the three benchmark creators. Blend their strengths to
            architect our hybrid growth engine: Ava&apos;s script rigor, Sam&apos;s visual storytelling, and Peter&apos;s
            cinematic authority.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {primaryAccounts.map((account) => (
            <article key={account.handle} className="grid-card flex flex-col gap-4">
              <header>
                <p className="text-xs uppercase tracking-[0.3em] text-glacier/80">{account.platform}</p>
                <h3 className="mt-1 font-heading text-xl text-white">{account.handle}</h3>
                <p className="mt-2 text-sm text-mist/80">{account.summary}</p>
              </header>
              <dl className="grid grid-cols-2 gap-3 text-xs text-mist/70">
                <div>
                  <dt className="stat-title">Followers</dt>
                  <dd className="font-semibold text-white/90">{account.followerCount}</dd>
                </div>
                <div>
                  <dt className="stat-title">Avg Views</dt>
                  <dd className="font-semibold text-white/90">{account.avgViews}</dd>
                </div>
                <div>
                  <dt className="stat-title">Cadence</dt>
                  <dd className="font-semibold text-white/90">{account.contentCadence}</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-2">
                {account.focus.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs text-mist">
                    {item}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                <p className="table-header">Growth Drivers</p>
                <ul className="space-y-2 text-sm text-mist/90">
                  {account.growthDrivers.map((driver) => (
                    <li key={driver.title}>
                      <p className="font-semibold text-white/90">{driver.title}</p>
                      <p className="text-xs text-mist/70">{driver.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="table-header">Execution Framework</p>
                <div className="space-y-3">
                  {account.executionFramework.map((framework) => (
                    <div key={framework.label} className="rounded-xl border border-white/5 bg-white/5 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-glacier/80">{framework.label}</p>
                      <ul className="mt-2 space-y-1 text-xs text-mist/70">
                        {framework.insights.map((insight) => (
                          <li key={insight}>{insight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="table-header">Monetization Signals</p>
                <ul className="space-y-1 text-xs text-mist/70">
                  {account.monetizationSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-aurora/30 bg-aurora/10 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-aurora/80">Critical Moves</p>
                <ul className="mt-2 space-y-1 text-xs text-mist/80">
                  {account.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
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
