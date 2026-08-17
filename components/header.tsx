import Link from "next/link";

const links = [
  ["/", "Welcome!"],
  ["/projects", "Projects"],
  ["/career", "Career"],
  ["/about", "About Me"],
  ["/contact", "Contact"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Pasha Antonov, home">
        <span className="brand-mark" aria-hidden="true">
          PA
        </span>
        <span>Pasha Antonov</span>
      </Link>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
