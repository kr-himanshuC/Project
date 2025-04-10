import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  style:["italic","normal"],
  weight: ['300', '400', '500', '600', '700', '800'], // Or choose specific weights
  variable: '--font-montserrat' // Optional: Define a CSS variable
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <body suppressHydrationWarning
        className={`${montserrat.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
