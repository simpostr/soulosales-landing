// src/components/SharedFooter.tsx
import React from 'react';
import Link from 'next/link';

export default function SharedFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center mt-32 pb-6 text-white/50 text-sm">
      &copy; {currentYear} SouloSales. All rights reserved.
      <div className="mt-2 space-x-4">
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>
        <Link href="/faq" className="hover:underline">
          FAQ
        </Link>
        <Link href="/about" className="hover:underline">
          About Us
        </Link>
      </div>
    </footer>
  );
}