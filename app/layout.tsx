import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";

const font = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "compositr.dev",
  description: "Hey, I'm Compositr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
