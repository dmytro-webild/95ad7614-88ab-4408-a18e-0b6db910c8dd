import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Raleway } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'CLIP AGENCY — Short-form clipping for Creators',
  description: 'We turn long-form content into 30+ short-form clips a week. Built for creators who want to grow on TikTok, Reels, and Shorts without lifting a finger.',
};







const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
