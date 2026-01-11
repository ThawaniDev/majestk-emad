import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import StoreProvider from './store-provider';

const cairo = localFont({
  src: [
    {
      path: '../../fonts/cairo/Cairo-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../fonts/cairo/Cairo-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/cairo/Cairo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/cairo/Cairo-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/cairo/Cairo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/cairo/Cairo-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'New Majestic - Trade & Marketing Solutions | نيو ماجستيك - حلول التجارة والتسويق',
  description: 'Leading solutions for trade and marketing | حلول رائدة للتجارة والتسويق',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} ${cairo.variable}`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
