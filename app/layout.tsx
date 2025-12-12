import { Providers } from '@/features/shared/components/providers';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Foody',
  description: 'Restaurant reservation app',
};

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(nunito.variable, 'antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}