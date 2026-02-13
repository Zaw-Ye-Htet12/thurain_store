import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import SmoothScroller from "@/components/SmoothScroller";
import StructuredData from "@/components/seo/StructuredData";
import ChatbaseWidget from '@/components/ChatbaseWidget';
import type { Metadata } from 'next';
import { BASE_URL } from '@/lib/constant';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });


const OGImage = "/og_image.jpg";
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'my-MM': '/mm',
    },
  },
  title: {
    default: "ThuRain Store | Premium Hardware & Home Accessories",
    template: "%s | ThuRain Store"
  },
  description: "Your trusted partner for high-quality hardware, construction materials, home accessories, and industrial tools in Myanmar. Excellence in every product.",
  keywords: ["Hardware Store", "Construction Materials", "Home Accessories", "Tools", "Myanmar", "Yangon", "ThuRain Store", "Plumbing", "Electrical", "Safety Equipment"],
  authors: [{ name: "ThuRain Store" }],
  creator: "ThuRain Store",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "ThuRain Store | Premium Hardware & Home Accessories",
    description: "Discover top-tier hardware, tools, and home improvement solutions at ThuRain Store. Quality you can trust.",
    siteName: "ThuRain Store",
    images: [
      {
        url: OGImage,
        width: 1200,
        height: 630,
        alt: "ThuRain Store - Premium Hardware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThuRain Store | Premium Hardware & Home Accessories",
    description: "Your trusted source for premium hardware and home accessories in Myanmar.",
    images: [OGImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "Zt7PAgXrtIAcen0OkMAq83E9jOGpxcsTnIPFuxwGp7U" // Replace with your code from Google Search Console
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ChatbaseWidget />
          <StructuredData />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SmoothScroller>
              <div className="flex min-h-screen flex-col">
                <CustomCursor />
                <Navbar />
                <main className="flex-1 w-full">{children}</main>
                <Footer />
              </div>
            </SmoothScroller>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
