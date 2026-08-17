import { PageIntro } from "@/components/page-intro";

export const metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <div className="section-wrap page-stack">
      <PageIntro
        eyebrow="About me"
        title="I’m happiest when the path isn’t obvious yet."
      >
        <p>
          I enjoy being dropped into difficult situations, finding the shape of
          the problem, and turning chaos into something people can rely on.
        </p>
      </PageIntro>
      <div className="about-grid">
        <section className="about-card about-card-wide">
          <p className="eyebrow">The constant</p>
          <h2>Solving is the fun part.</h2>
          <p>
            Whether it is a legacy system, a new AI workflow, or an idea that
            only exists on a blank page, I like tracing the real constraint and
            building my way through it.
          </p>
          <div className="code-line" aria-hidden="true">
            <span>while</span> (problem.isInteresting) {"{"} keepGoing(); {"}"}
          </div>
        </section>
        <section className="about-card cooking-card">
          <div className="steam" aria-hidden="true">
            ≈ ≈ ≈
          </div>
          <p className="eyebrow">Away from the keyboard</p>
          <h2>Making something delicious.</h2>
          <p>
            I love to cook—and I take real pride in making food people remember.
          </p>
        </section>
        <section className="about-card">
          <p className="eyebrow">What matters</p>
          <h2>Time well spent.</h2>
          <p>
            The best time is the time I spend with my fiancée and soon-to-be
            wife.
          </p>
        </section>
      </div>
    </div>
  );
}
