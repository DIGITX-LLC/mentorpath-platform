import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali', 'latin'],
  variable: '--font-noto-sans-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MentorPath.ai - AI Education for Bangladesh",
  description: "Empowering Bangladesh with AI knowledge and skills to unlock opportunities in the digital era.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansBengali.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

