import React from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link'; // Import Link

export default function CustomerSuccessPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 text-white p-6 flex flex-col items-center justify-center text-center">
      <CheckCircle size={96} className="text-green-400 mb-8 animate-bounce" />
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-400 to-orange-400 mb-4">
        Welcome Aboard, Shopper!
      </h1>
      <p className="text-xl text-white/80 max-w-xl mx-auto mb-8">
        Your interest has been successfully recorded.
      </p>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 max-w-2xl mx-auto shadow-xl space-y-6">
        <h2 className="text-3xl font-semibold text-white mb-4">What Happens Next?</h2>
        <ul className="list-disc list-inside text-lg text-white/70 text-left space-y-3">
          <li>
            Email Verification: Please check your inbox for a verification email. Click the link to confirm your address.
          </li>
          <li>
            Early Access & Alerts: Once verified, you&apos;ll be on our VIP list to get notified the moment our site launches.
          </li> 
          <li>
            Get Ready to Save: Prepare to discover amazing discounts from your favorite brands.
          </li>
        </ul>
        <Link href="/" passHref>
          <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}