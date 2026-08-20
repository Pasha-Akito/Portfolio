import Image from "next/image";
import Link from "next/link";
import profilePicture from "@/profilePicture.jpeg";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Forward Deployed AI Engineer at
            Boston Consultancy Group in Dubai
            <span className="previous-role">
              Previously Lead Engineer (Staff equivalent) at Mastercard
            </span>
          </p>
          <h1>
            I turn ambiguous problems into <em>clear outcomes.</em>
          </h1>
          <p className="hero-lede">
            I’m Pasha Antonov, a former Lead Engineer at Mastercard, an AI
            engineer, and a hands-on builder who thrives in uncertainty and
            helps people find a clear way forward.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">
              Explore my work <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="/career">
              Follow my journey
            </Link>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>
                Under <strong>four years</strong>
              </dt>
              <dd>Graduate to Lead Software Engineer (Staff equivalent)</dd>
            </div>
            <div>
              <dt>99.999% release success</dt>
              <dd>
                Designed a sensitive fund-movement service and guided the team
                building it for at-risk clients with CTO visibility
              </dd>
            </div>
            <div>
              <dt>Master’s in AI</dt>
              <dd>Studied while progressing through Senior and Lead roles</dd>
            </div>
          </dl>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image
              src={profilePicture}
              alt="Pasha Antonov"
              priority
              sizes="(max-width: 800px) 78vw, 38vw"
            />
          </div>
          <div className="portrait-caption">
            <span>Currently</span>
            <strong>Building applied AI systems</strong>
          </div>
        </div>
      </section>
      <section className="manifesto section-wrap">
        <p className="eyebrow">What makes work rewarding</p>
        <p className="manifesto-copy">
          I enjoy building straightforward solutions suited to the task at hand.
          The best part is <em>collaborating with people</em> and helping them
          solve their problems.
        </p>
      </section>
    </div>
  );
}
