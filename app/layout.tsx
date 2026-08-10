import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Presencio | Turn Happy Customers Into 5-Star Reviews",
  description: "Presencio helps local businesses automate review requests, follow-ups and reputation workflows without adding more work for the owner.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}