import type { Metadata } from "next";
// Assuming you're using Geist fonts and imported them correctly
// If not, you should use `Inter` or remove font imports and className from body
import { GeistSans } from 'geist/font/sans'; // Correct import for GeistSans
import { GeistMono } from 'geist/font/mono'; // Correct import for GeistMono

import "./globals.css";
import SharedFooter from '@/components/SharedFooter'; // Make sure this path is correct

// 1. Metadata must be at the top-level
export const metadata: Metadata = {
  title: 'SouloSales - See Every Sale. One Dashboard.',
  description: 'Track live deals and countdowns from your favorite brands. Vendors list your sales, shoppers never miss a drop.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

// 2. ONLY ONE RootLayout default export
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${GeistSans.variable}
          ${GeistMono.variable}
          antialiased
    bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 
    min-h-screen                                          // <--- ADD THIS CLASS to ensure body stretches
        `}
      >
        {children}
        <SharedFooter />
      </body>
    </html>
  );
}
