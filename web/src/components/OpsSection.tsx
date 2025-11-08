import { automations, opsStack, teamRoadmap } from "@/data/ops";

export function OpsSection() {
  return (
    <section className="section" id="operations">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="badge">Operational Backbone</span>
          <h2 className="section-title">Team, tools, and automations</h2>
          <p className="max-w-3xl text-sm text-mist/80">
            Scale requires infrastructure. Hire intentionally, equip the team with a shared stack, and weaponize
            automations that convert attention into revenue while preserving creative energy.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="md:col-span-1">
            <div className="grid-card h-full">
              <p className="table-header">Team Roadmap</p>
              <div className="mt-3 space-y-4">
                {teamRoadmap.map((role) => (
                  <div key={role.role} className="rounded-xl border border-white/5 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-glacier/70">Activate {role.activationMonth}</p>
                    <h3 className="mt-1 font-heading text-lg text-white">{role.role}</h3>
                    <p className="text-xs text-mist/70">Investment: {role.cost}</p>
                    <ul className="mt-3 space-y-1 text-xs text-mist/70">
                      {role.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article className="md:col-span-1">
            <div className="grid-card h-full">
              <p className="table-header">Core Stack</p>
              <div className="mt-3 space-y-3">
                {opsStack.map((item) => (
                  <div key={item.tool} className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-glacier/70">{item.category}</p>
                    <h3 className="mt-1 font-heading text-base text-white">{item.tool}</h3>
                    <p className="text-xs text-mist/70">{item.purpose}</p>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-mist/60">
                      Cadence: {item.cadence}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
          <article className="md:col-span-1">
            <div className="grid-card h-full">
              <p className="table-header">Automation Plays</p>
              <div className="mt-3 space-y-4">
                {automations.map((automation) => (
                  <div key={automation.name} className="rounded-xl border border-white/5 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-glacier/70">{automation.trigger}</p>
                    <h3 className="mt-1 font-heading text-base text-white">{automation.name}</h3>
                    <ul className="mt-2 space-y-1 text-xs text-mist/70">
                      {automation.actionItems.map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-mist/60">
                      KPI: {automation.kpi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
