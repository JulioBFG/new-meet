import type { Metadata } from "next";

import AppProvider from "../contexts/AppProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moogle Meet",
  description:
    "Real-time meetings by Moogle. Using your browser, share your video, desktop, and presentations with teammates and customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AppProvider>
  );
}
