import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spleen AFX",
  description: "Musicas online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body>
        {children}
      </body>
    </html>
  );
}
