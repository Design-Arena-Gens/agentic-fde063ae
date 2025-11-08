import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Hybrid Fitness Growth Playbook | 100K in 10 Months",
  description:
    "Comprehensive growth intelligence for hybrid fitness/lifestyle/entrepreneur creators: viral scripting systems, editing frameworks, and 10-month scaling roadmap to 100K followers.",
  metadataBase: new URL("https://agentic-fde063ae.vercel.app"),
  openGraph: {
    title: "Hybrid Fitness Growth Playbook",
    description:
      "Senior growth analyst intelligence report synthesizing viral frameworks, algorithm levers, and operations to reach 100K+ followers in 10 months.",
    url: "https://agentic-fde063ae.vercel.app",
    siteName: "Hybrid Fitness Growth",
    images: [
      {
        url: "https://agentic-fde063ae.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hybrid Fitness Growth Playbook"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@personalbrandlaunch",
    title: "Hybrid Fitness Growth Playbook",
    description: "High-signal intelligence playbook engineered to unlock 100K+ followers in 10 months."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} dark-gradient min-h-screen`}>{children}</body>
    </html>
  );
}
