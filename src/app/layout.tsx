"use client"  //transform the component to client component

import "./globals.css";
//get session 
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body>

        <SessionProvider>
         {children}
        </SessionProvider>

      </body>
    </html>
  );
}
