import type { PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';

import { Root } from '@/components/Root/Root';
import { Roboto } from 'next/font/google'

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';
import clsx from 'clsx';

//👇 Configure our font object
const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
})


export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export const viewport: Viewport = {
  themeColor: [
    { color: '#014745' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body className={clsx(roboto.className, 'text-white')}>
        <Root>
          {children}
        </Root>
      </body>
    </html>
  );
}
