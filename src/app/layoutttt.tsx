import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { ReactNode } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { PopupProvider } from '@/context/PopupContext';

export const metadata: Metadata = {
  title: 'Hesta',
  description: 'Family',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="min-w-[1400px] bg-[#E9ECF4]">
        <NextIntlClientProvider messages={messages}>
          <PopupProvider>{children}</PopupProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
