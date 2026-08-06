import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "../src/styles.css";

const dmSans = localFont({
  src: "./fonts/dm-sans-variable.woff2",
  display: "swap",
  variable: "--font-dm-sans",
});

const archivoBlack = localFont({
  src: "./fonts/archivo-black.woff2",
  display: "swap",
  variable: "--font-archivo-black",
  weight: "400",
});

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const metadataBase = new URL(
  productionHost ? `https://${productionHost}` : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: "Saulo Faria — Senior Software Engineer & Product Builder",
  description:
    "Saulo Faria is a senior software engineer, product builder, and former founder who builds reliable systems and useful products.",
  openGraph: {
    title: "Saulo Faria — Engineer & Product Builder",
    description:
      "Engineering experience, product thinking, and the perspective of a former founder.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saulo Faria — Engineer & Product Builder",
    description:
      "Engineering experience, product thinking, and the perspective of a former founder.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f4ed",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${archivoBlack.variable}`}>
      <body>{children}</body>
    </html>
  );
}
