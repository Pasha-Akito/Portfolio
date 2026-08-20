import { PageIntro } from "@/components/page-intro";

export const metadata = { title: "Contact" };

const contacts = [
  ["Email", "1masterpasha@gmail.com", "mailto:1masterpasha@gmail.com"],
  [
    "LinkedIn",
    "Pasha Antonov",
    "https://www.linkedin.com/in/pavelantonovsoftwaredeveloper/",
  ],
  ["GitHub", "Pasha-Akito", "https://github.com/Pasha-Akito"],
] as const;

export default function ContactPage() {
  return (
    <div className="section-wrap page-stack contact-page">
      <PageIntro
        eyebrow="Contact"
        title="Have an interesting problem, or just want to chat about technology? Let’s talk."
      >
        <p>
          I’m always interested in ambitious engineering, applied AI, and the
          conversations that really get to the root of technology and processes.
        </p>
      </PageIntro>
      <div className="contact-list">
        {contacts.map(([label, value, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span>{label}</span>
            <strong>{value}</strong>
            <span className="contact-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
