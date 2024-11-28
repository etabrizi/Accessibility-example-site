import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Demo site",
  description: "A site to show steps for better accessibility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
