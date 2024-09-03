import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import connectMongoDB from '@/libs/mongodb';

const inter = Inter({ subsets: ['latin'] });
connectMongoDB();

export const metadata = {
  title: 'NextJS with MongoDB',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container flex flex-col gap-4 max-w-3xl p-4 mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
