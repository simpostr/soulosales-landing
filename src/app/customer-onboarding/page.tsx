'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link'; // Import Link for back button

export default function CustomerOnboardingPage() {
  // IMPORTANT: Replace this with your specific Formspree form ID for Customer emails
  const CUSTOMER_FORMSPREE_ID = "mpwdejbg"; // <<< CHANGE THIS
  // IMPORTANT: Replace with your actual live domain or Vercel URL
  const BASE_URL = "https://soulosales-landing.vercel.app/"; // <<< CHANGE THIS

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 text-white p-6 flex flex-col items-center justify-center">
      <Link href="/" passHref className="absolute top-6 left-6 text-white hover:text-white/80 transition-colors">
        <ArrowLeft size={24} /> Back to Home
      </Link>

      <Card className="w-full max-w-lg bg-white/10 border-white/20 text-white shadow-lg p-8">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-4xl font-bold text-pink-400 mb-4">Shopper Onboarding</CardTitle>
          <CardDescription className="text-white/70 text-lg">
            Ready to find amazing deals? Here&apos;s how to get started:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4 text-white/80 text-lg">
            <h3 className="text-2xl font-semibold text-white">Our Simple Process:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Enter Your Email Below: Provide your primary email address.
              </li>
              <li>
                Verify Your Email: We&apos;ll send a quick verification link to confirm your email.
              </li>
              <li>
                Get Early Access: Once verified, you&apos;ll be on our VIP list for early access and exclusive deal alerts!
              </li>
              <li>
                Start Saving: Discover incredible discounts as soon as we launch.
              </li>
            </ol>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Ready to Proceed?</h3>
            <form action={`https://formspree.io/f/${CUSTOMER_FORMSPREE_ID}`} method="POST" className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-pink-500"
                required
              />
              <input type="hidden" name="_redirect" value={`${BASE_URL}/customer-success`} />
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 text-lg">
                Proceed
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}