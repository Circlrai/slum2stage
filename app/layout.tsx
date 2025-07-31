import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import './globals.css'
import { Header, Providers, Footer } from '@/components/shared';
import DynamicSeo from '@/utils/Dynamice_Seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-libre-baskerville',
  display: "swap",
});


const appColor = "#44B5D0";

export const viewport: Viewport = {
  themeColor: appColor,
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};

export const metadata: Metadata = DynamicSeo(0);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
        <Providers>
          <main className="w-full">
            <div className="relative">
              <Header />
            </div>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
