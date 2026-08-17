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
        title="Progress measured in ownership, not just time."
      >
        <p>
          I moved into technical leadership within four years of starting my
          career, taking on complex financial systems where reliability and
          judgment matter.
        </p>
      </PageIntro>
      <section className="career-feature">
        <div>
          <p className="eyebrow">Now</p>
          <h2>Forward Deployed AI Engineer</h2>
          <p className="company">BCG</p>
        </div>
        <p>
          Applying engineering rigor and an instinct for problem-solving to
          ambitious AI work.
        </p>
      </section>
      <section className="career-feature muted-feature">
        <div>
          <p className="eyebrow">Previously</p>
          <h2>Lead</h2>
          <p className="company">Mastercard</p>
        </div>
        <p>
          Progressed to Tech Lead in under four years, modernising high-value
          legacy software and leading the architecture of reliable settlement
          and fund-movement systems.
        </p>
      </section>
      <section aria-labelledby="impact-title">
        <div className="section-heading">
          <p className="eyebrow">Selected impact</p>
          <h2 id="impact-title">Making slow systems move.</h2>
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
        <p>
          success rate at release for settlement and fund-movement software
          designed from scratch, with Pasha coordinating the team behind its
          implementation.
        </p>
      </aside>
    </div>
  );
}
