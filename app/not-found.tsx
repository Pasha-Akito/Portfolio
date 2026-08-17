import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-wrap not-found">
      <p className="eyebrow">404</p>
      <h1>This route went off-script.</h1>
      <Link className="button button-primary" href="/">
        Return home
      </Link>
    </div>
  );
}
