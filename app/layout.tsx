import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

export const metadata: Metadata = {
  title: "Poodit's Portfolio",
  description: "A dark-themed portfolio showcasing web, UI, and creative work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
