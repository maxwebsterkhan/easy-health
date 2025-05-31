import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "ElevateHealth",
  description:
    "ElevateHealth is a platform for managing your health and wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nunitoSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
