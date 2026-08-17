import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const bodyFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const displayFont = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: { default: "Pasha Antonov", template: "%s | Pasha Antonov" },
  description: "Forward Deployed AI Engineer, technical leader, and builder.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
