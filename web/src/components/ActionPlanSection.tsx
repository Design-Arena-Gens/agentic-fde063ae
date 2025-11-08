export function ActionPlanSection() {
  return (
    <section className="section" id="action-plan">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Immediate Actions</span>
          <h2 className="section-title">Next 14-day sprint</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            Operationalize the insights fast. Ship a high-impact sprint that primes the algorithm, captures leads, and
            sets the tone for the 10-month journey.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="grid-card">
            <p className="table-header">Day 1-3</p>
            <h3 className="mt-1 font-heading text-lg text-white">Build the command center</h3>
            <ul className="mt-3 space-y-1 text-sm text-mist/80">
              <li>Spin up Notion hook lab + Airtable analytics dashboard.</li>
              <li>Batch 10 hooks across Identity Flip &amp; System Snapshot frameworks.</li>
              <li>Storyboard 5 hero reels mixing Ava scripting + Sam visuals.</li>
            </ul>
          </article>
          <article className="grid-card">
            <p className="table-header">Day 4-8</p>
            <h3 className="mt-1 font-heading text-lg text-white">Produce &amp; publish momentum</h3>
            <ul className="mt-3 space-y-1 text-sm text-mist/80">
              <li>Shoot lifestyle glue micro-vlogs and systems breakdown reels.</li>
              <li>Deploy DM automation on Story reactions with Manychat.</li>
              <li>Launch micro-challenge teaser to seed upcoming community activation.</li>
            </ul>
          </article>
          <article className="grid-card">
            <p className="table-header">Day 9-14</p>
            <h3 className="mt-1 font-heading text-lg text-white">Analyze, iterate, amplify</h3>
            <ul className="mt-3 space-y-1 text-sm text-mist/80">
              <li>Audit retention drop-offs and adjust pacing + motion graphics.</li>
              <li>Boost highest-performing reel with $40 ad spend to trigger share ripple.</li>
              <li>Collect testimonials + UGC from challenge participants for proof stack.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
