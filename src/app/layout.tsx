import type { Metadata } from "next";
import { geistSans, geistMono } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan Do Reflect",
  description: "Application for Planning and Reflecting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
