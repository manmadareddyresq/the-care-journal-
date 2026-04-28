import './globals.css';
import Navbar from './Navbar';
import Footer from './Footer';
import SplashScreen from './SplashScreen';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <SplashScreen />
          <Navbar />
          <main className="pt-32 pb-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
