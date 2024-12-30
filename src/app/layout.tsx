import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeftFloatingActionButtons from "./components/LeftFloatingActionButtons";
import RightFloatingActionButtons from "./components/RightFloatingActionButtons";

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

interface SocialProfile {
  name: string;
  url: string;
}

export const metadata: Metadata & { socialProfiles: SocialProfile[] } = {
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
  openGraph: {
    title: "LinkW Innovation | Smart Solutions for Smarter Farming",
    description:
      "Explore LinkW Innovation's Kisan Mithraa Mobile Starter for precision farming.",
    url: "https://www.linkwinnovation.com/",
    type: "website",
    siteName: "LinkW Innovation",
    locale: "en_US",
    images: [
      {
        url: "/ourlogo.png", // Image for OG tags
        width: 1200,
        height: 630,
        alt: "Kisan Mithraa Mobile Starter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // For a large image summary
    site: "@YourTwitterHandle", // Replace with your Twitter handle
    title: "LinkW Innovation | Smart Solutions for Smarter Farming",
    description:
      "Explore LinkW Innovation's Kisan Mithraa Mobile Starter for precision farming.",
    images: [
      {
        url: "/ourlogo.png", // Twitter card image
        width: 1200,
        height: 630,
        alt: "Kisan Mithraa Mobile Starter",
      },
    ],
  },
  socialProfiles: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/ams-technotronics/?originalSubdomain=in", // Add your LinkedIn profile
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/kisan_mithraa/", // Add your Instagram profile
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Kisan_Mithraa", // Add your YouTube channel
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/Linkw-Innovations/61563942219794/", // Add your Facebook page
    },
    {
      name: "x",
      url: "https://x.com/Linkwinnovation?t=j6Tq6aCHtk_ggIfRBK8w-Q&s=09", // Add your X (formerly Twitter) page
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="A995B2A976792E9856802B72220000A5" />
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
          content={Array.isArray(metadata.authors) && metadata.authors[0]?.name ? metadata.authors[0].name : "Default Author"}
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

        {/* Twitter card and additional metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="LinkW Innovation | Smart Solutions for Smarter Farming" />
        <meta name="twitter:description" content="Explore LinkW Innovation's Kisan Mithraa Mobile Starter." />
        <meta name="twitter:image" content="/ourlogo.png" />
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
