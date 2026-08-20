import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import bellaRabbit from "@/Bella_rabbit.png";
import chaseRabbit from "@/Chase_rabbit.jpeg";
import engagement from "@/Engagement.jpeg";

export const metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <div className="section-wrap page-stack">
      <PageIntro
        eyebrow="About me"
        title="I’m happiest when discussing problems with others before the path is clear."
      >
        <p>
          I thrive in uncertainty, especially when I can work with people to
          understand the real problem and find a clear way forward together.
        </p>
      </PageIntro>
      <div className="about-grid">
        <section className="about-card about-card-wide">
          <p className="eyebrow about-kicker">The constant</p>
          <h2>Solving is the fun part.</h2>
          <p>
            Whether it is a legacy system, a new AI workflow, or an idea that
            only exists on a blank page, I like tracing the real constraint and
            building my way through it.
          </p>
          <div className="code-line" aria-hidden="true">
            <span>while</span> (problem.isInteresting || person.isPresent()){" "}
            {"{"}
            keepGoing(); {"}"}
          </div>
        </section>
        <section className="about-card cooking-card">
          <div className="steam" aria-hidden="true">
            ≈ ≈ ≈
          </div>
          <p className="eyebrow">Away from the keyboard</p>
          <h2>Making something delicious.</h2>
          <p>
            I love to cook and make food as tasty as possible, refining each
            recipe over time.
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
      <section className="personal-gallery" aria-labelledby="personal-title">
        <div className="section-heading">
          <p className="eyebrow">The people and pets I love</p>
          <h2 id="personal-title">Life beyond the work.</h2>
        </div>
        <div className="photo-grid">
          <figure className="photo-card photo-card-wide">
            <Image
              src={engagement}
              alt="Pasha with his fiancée at their engagement"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
            <figcaption>Celebrating our engagement</figcaption>
          </figure>
          <figure className="photo-card">
            <Image
              src={chaseRabbit}
              alt="Chase, Pasha’s white male rabbit"
              sizes="(max-width: 800px) 100vw, 28vw"
            />
            <figcaption>Chase</figcaption>
          </figure>
          <figure className="photo-card">
            <Image
              src={bellaRabbit}
              alt="Bella, Pasha’s black female rabbit"
              sizes="(max-width: 800px) 100vw, 28vw"
            />
            <figcaption>Bella</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
