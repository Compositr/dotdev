import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";

const font = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "compositr.dev",
  description: "Hey, I'm Compositr",
  colorScheme: "dark",
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://compositr.dev",
  },
  themeColor: "#F24FFF",
  keywords: ["compositr", "compositr.dev"],
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
