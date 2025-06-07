// src/app/terms-of-service/page.tsx
import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6 pt-24 text-center">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 mb-8">
        Terms of Service
      </h1>
      <p className="text-lg text-white/70 max-w-2xl mx-auto">
        Our Terms of Service are currently being drafted. Please check back soon for the full terms governing the use of SouloSales.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-purple-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}