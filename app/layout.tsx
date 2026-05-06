import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOSSIN Laundry City - Premium Laundry & Dry Cleaning Services",
  description: "Experience luxury laundry services with MOSSIN Laundry City. Premium dry cleaning, wash & fold, and express services.",
  keywords: "laundry, dry cleaning, wash and fold, premium laundry services",
  openGraph: {
    title: "MOSSIN Laundry City",
    description: "A Higher Standard of Living",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark-bg text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
