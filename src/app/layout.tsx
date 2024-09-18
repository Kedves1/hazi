import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mamma Mia!",
  description: "Site for the Mamma Mia pizzeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className="antialiased">{children}</body>
    </html>
  );
}
