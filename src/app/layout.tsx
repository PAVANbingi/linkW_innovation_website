import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeftFloatingActionButtons from "./components/LeftFloatingActionButtons";
import RightFloatingActionButtons from "./components/RightFloatingActionButtons";
// import CustomCursor from "./components/CustomCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LinkW Innovation | Smart Solutions for Smarter Farming",
  description:
    "Explore LinkW Innovation's Kisan Mithraa Mobile Starter – a revolutionary device for precision farming. Remote motor control, voltage safeguards, and advanced features for sustainable farming. Empower your farm today!",
  keywords: [
    "Kisan Mithraa Mobile Starter",
    "Smart Farming",
    "Precision Farming",
    "Remote Motor Control",
    "Voltage Safeguards",
    "Sustainable Agriculture",
    "LinkW Innovation",
    "Farm Automation",
  ],
  authors: [{ name: "LinkW Innovation Pvt. Ltd." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={metadata.description || "Default description"}
        />
        <meta
          name="keywords"
          content={
            Array.isArray(metadata.keywords)
              ? metadata.keywords.join(", ")
              : metadata.keywords || "Default keywords"
          }
        />
        <meta
  name="author"
  content={Array.isArray(metadata.authors) && metadata.authors[0]?.name ? metadata.authors[0].name : "Default Author" }
/>
<meta property="og:title" content={String(metadata.title) || "Default Title"} />


        <meta
          property="og:description"
          content={metadata.description || "Default description"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linkwinnovation.com/" />
        <meta property="og:image" content="/images/kisan-mithraa.jpg" />
        <link rel="canonical" href="https://www.linkwinnovation.com/" />
      </head>
      <body
        className={`bg-slate-950 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <LeftFloatingActionButtons />
        <RightFloatingActionButtons />
        <Footer />
      </body>
    </html>
  );
}
