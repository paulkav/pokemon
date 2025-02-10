'use client';

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Pokemon Lookup</title>
        <meta name="description" content="Search and view Pokemon information" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
