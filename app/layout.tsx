import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Lohith Krishna Bhagavan - Systems made clear", description: "Portfolio of Lohith Krishna Bhagavan - AI/ML engineer, UAV autonomy developer and product designer.", openGraph: { title: "Lohith Krishna Bhagavan", description: "AI / ML · UAV Autonomy · Product Design", images: ["/og.png"] }, twitter: { card: "summary_large_image" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
