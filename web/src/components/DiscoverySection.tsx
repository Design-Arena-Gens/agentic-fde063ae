import { discoveryAccounts } from "@/data/additionalAccounts";

export function DiscoverySection() {
  return (
    <section className="section" id="discovery">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Discovery Radar</span>
          <h2 className="section-title">Additional hybrid creators to benchmark</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            These creators operate in the same hybrid territory and supply fresh inspiration on positioning, format
            innovation, and monetization structure. Plug their standout mechanics into experimentation sprints.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {discoveryAccounts.map((account) => (
            <article key={account.handle} className="grid-card">
              <header className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-[0.25em] text-glacier/70">{account.followerSignals}</p>
                <h3 className="font-heading text-lg text-white">{account.handle}</h3>
                <p className="text-sm text-mist/80">{account.nichePositioning}</p>
              </header>
              <dl className="mt-4 space-y-2 text-sm text-mist/80">
                <div>
                  <dt className="table-header">Standout Mechanism</dt>
                  <dd>{account.standoutMechanism}</dd>
                </div>
                <div>
                  <dt className="table-header">Why it matters</dt>
                  <dd>{account.whyItMatters}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
