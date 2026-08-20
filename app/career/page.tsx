import { PageIntro } from "@/components/page-intro";

export const metadata = { title: "Career" };

const achievements = [
  [
    "30+ hours",
    "90 minutes",
    "Reworked inefficient data and loop handling in a critical batch process.",
  ],
  [
    "5 minutes",
    "200 ms",
    "Resolved a queue bottleneck that had affected an internal team for five years.",
  ],
  [
    "3 minutes",
    "5 seconds",
    "Transformed the performance of very large legacy SQL queries.",
  ],
] as const;

export default function CareerPage() {
  return (
    <div className="section-wrap page-stack">
      <PageIntro
        eyebrow="Career"
        title="Experience measured in scope, not just time."
      >
        <p>
          From Graduate, I progressed to a Lead Engineer (Staff equivalent) role
          in under four years, leading complex systems, broad initiatives, and
          challenges to the status quo.
        </p>
      </PageIntro>
      <section className="career-feature">
        <div>
          <p className="eyebrow career-kicker">Now</p>
          <h2>Forward Deployed AI Engineer</h2>
          <p className="company company-prominent">Boston Consultancy Group</p>
        </div>
        <p>
          Combining deep knowledge of large distributed systems, focused and
          up-to-date AI work, and client-facing collaboration. Helping clients
          across the Gulf region realise value from AI.
        </p>
      </section>
      <section className="career-feature muted-feature">
        <div>
          <p className="eyebrow career-kicker">4.5 years</p>
          <h2>Lead Engineer (Staff equivalent)</h2>
          <p className="company company-prominent">Mastercard</p>
        </div>
        <p>
          Starting as a Graduate, I earned three promotions and progressed to
          Lead Engineer in under four years. I worked on Mastercom, a critical
          legacy system supporting banks around the world, owned several
          microservices and batch processes, led the team technically, and
          coordinated decisions across teams.
        </p>
      </section>
      <section aria-labelledby="impact-title">
        <div className="section-heading">
          <p className="eyebrow impact-kicker">Selected impact</p>
          <h2 id="impact-title">Making slow systems move.</h2>
          <p className="section-summary">
            Drastic performance improvements to long-standing legacy code.
          </p>
        </div>
        <div className="impact-grid">
          {achievements.map(([before, after, detail]) => (
            <article className="impact-card" key={after}>
              <p>
                <s>{before}</s>
                <span aria-hidden="true">→</span>
                <strong>{after}</strong>
              </p>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <aside className="reliability-callout">
        <span>99.999%</span>
        <div>
          <h2>Critical fund-movement service release</h2>
          <p>
            Money was not moving between parties after disputes were resolved
            because of an incorrect implementation by another team. With trust
            from banks and the CTO low, I was given the problem statement and
            designed an architecture that prioritised reliability, safety, and
            time to production. I coordinated the team around the design and
            supported them through concerns. We released ahead of schedule with
            a 99.999% success rate for moving funds, rebuilding trust with the
            CTO and banks and enabling more card volume.
          </p>
        </div>
      </aside>
    </div>
  );
}
