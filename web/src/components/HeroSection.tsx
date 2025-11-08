import Link from "next/link";

export function HeroSection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute -top-20 -right-28 h-64 w-64 rounded-full bg-aurora/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-sunrise/10 blur-3xl" />
      <div className="relative flex flex-col gap-6">
        <span className="badge self-start">100K Hybrid Creator Playbook</span>
        <h1 className="font-heading text-4xl text-white md:text-5xl">
          Engineering explosive follower growth for hybrid fitness, lifestyle, and entrepreneur creators.
        </h1>
        <p className="max-w-2xl text-lg text-mist/90">
          Synthesized intelligence from the highest-performing operators to architect a repeatable system that
          hits 100K+ followers in 10 months. Built for creators who lift, build, and lead—simultaneously.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#roadmap" className="action-button">
            View 10-Month Roadmap
          </Link>
          <Link
            href="#hook-playbook"
            className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-glacier/60"
          >
            Explore Hook Playbook
          </Link>
        </div>
        <div className="grid gap-6 pt-4 md:grid-cols-3">
          {[
            {
              title: "Algorithm-Proven Systems",
              description: "Retention architecture + hook testing loops drawn from Ava, Sam, and Peter."
            },
            {
              title: "Cinematic Retention",
              description: "Attention choreography playbook to keep completion rates above 68%."
            },
            {
              title: "Community Flywheels",
              description: "Monthly activation cadence turning content into monetized superfans."
            }
          ].map((item) => (
            <div key={item.title} className="grid-card">
              <h3 className="font-heading text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-mist/80">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
