import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parishi Jain — Portfolio",
  description:
    "Parishi Jain is a CMU Information Systems student (Software Engineering minor) building thoughtful, reliable systems at the intersection of AI, product, and data.",
  openGraph: {
    title: "Parishi Jain — Portfolio",
    description:
      "Building thoughtful systems at the intersection of AI, product, and data.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parishi Jain — Portfolio",
    description:
      "Building thoughtful systems at the intersection of AI, product, and data.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-bg text-fg">
            <div className="pointer-events-none fixed inset-0 -z-10">
              <div className="absolute left-1/2 top-[-260px] h-[620px] w-[1040px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute bottom-[-240px] left-[-180px] h-[520px] w-[520px] rounded-full bg-border/45 blur-3xl" />
              <div className="absolute bottom-[-220px] right-[-220px] h-[560px] w-[560px] rounded-full bg-accent/8 blur-3xl" />
            </div>
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
