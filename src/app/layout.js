import { Tajawal } from 'next/font/google';
import { AuthContextProvider } from '@/components/AuthProvider'; // The correct named import
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700', '900']
});

export const metadata = {
  title: "Bravocode | رؤيتك، مهندسة بإتقان",
  description: "نبني تطبيقات ويب حديثة وعالية الأداء.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="google-site-verification" content="LCat78B07RTRgLFr7Bsqvc148IowehQrh58Aeo-qZtU" />
      </head>
      <body className={`${tajawal.className} bg-gray-900 text-white`}>
        {/* The provider must be here to wrap EVERYTHING */}
        <AuthContextProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}