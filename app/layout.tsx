import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anonymous Feedback',
  icons:{
    icon: '/favicon.ico'
  }
};


type Layout = {
  children: React.ReactNode
}

// Typescript will throw an error if you try to modify `children`, enforcing immutability.
// ? Therefore `ReadOnly<Layout>` is used to ensure the properties of the `Layout` types are immutable promoting safer and more predictable code.


export default function RootLayout({
  children,
}: Readonly<Layout>) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
