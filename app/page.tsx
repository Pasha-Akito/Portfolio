import Image from "next/image";
import Link from "next/link";
import profilePicture from "@/profilePicture.jpeg";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Forward Deployed AI Engineer at BCG
          </p>
          <h1>
            I turn complex systems into <em>clear outcomes.</em>
          </h1>
          <p className="hero-lede">
            I’m Pasha Antonov—a former Lead at Mastercard, an AI engineer, and a
            hands-on builder who enjoys bringing order to chaos.
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
              <dt>Under 4 years</dt>
              <dd>to Tech Lead</dd>
            </div>
            <div>
              <dt>99.999%</dt>
              <dd>release success rate</dd>
            </div>
            <div>
              <dt>30h → 90m</dt>
              <dd>batch runtime</dd>
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
        <p className="eyebrow">How I work</p>
        <p className="manifesto-copy">
          Find the signal. Challenge the constraints. Build the thing that makes
          the difficult feel <em>inevitable.</em>
        </p>
      </section>
    </div>
  );
}
