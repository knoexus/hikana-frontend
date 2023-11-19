import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import ReduxProvider from '@/state/redux/ReduxProvider';
import FullDimContainer from '@/components/common/FullDimContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hikana',
  description: 'Learn hiragana & katakana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-full h-full" lang="en">
      <body className={`${inter.className} w-full h-full`}>
        <ReduxProvider>
          <Navbar />
          <FullDimContainer>{children}</FullDimContainer>
        </ReduxProvider>
      </body>
    </html>
  );
}
