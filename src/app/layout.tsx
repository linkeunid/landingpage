import "@/assets/css/globals.css";
import { nunitoMono, nunitoSans } from "@/config/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All you need. Linkeun Mono",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${nunitoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
