// src/app/privacy-policy/page.tsx
import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6 pt-24 text-center">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 mb-8">
        Privacy Policy
      </h1>
      <p className="text-lg text-white/70 max-w-2xl mx-auto">
        Our Privacy Policy is currently under construction. Please check back soon for detailed information on how we collect, use, and protect your data.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-purple-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}