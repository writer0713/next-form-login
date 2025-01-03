import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
