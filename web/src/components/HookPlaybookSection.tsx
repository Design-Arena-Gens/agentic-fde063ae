import { hookPlaybook } from "@/data/hooks";

export function HookPlaybookSection() {
  return (
    <section id="hook-playbook" className="section">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Hook Warfare</span>
          <h2 className="section-title">Viral hook execution templates</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            Centralize tested hook archetypes so we never run out of high-retention intros. Deploy them in batches, track
            win rates, and remix successful versions across platforms.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {hookPlaybook.map((hook) => (
            <article key={hook.name} className="grid-card">
              <p className="text-xs uppercase tracking-[0.3em] text-glacier/70">{hook.usage}</p>
              <h3 className="mt-2 font-heading text-xl text-white">{hook.name}</h3>
              <p className="mt-4 text-sm text-mist/80">
                <span className="font-semibold text-white/90">Script skeleton:</span> {hook.scriptSkeleton}
              </p>
              <ul className="mt-4 space-y-2 text-xs text-mist/70">
                {hook.deploymentTips.map((tip) => (
                  <li key={tip} className="rounded-lg bg-white/5 px-3 py-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
