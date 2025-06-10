'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from 'next/link'; // Import Link for back button

export default function VendorOnboardingPage() {
  // IMPORTANT: Replace this with your specific Formspree form ID for Vendor emails
  const VENDOR_FORMSPREE_ID = "xovwezll"; // <<< CHANGE THIS
  // IMPORTANT: Replace with your actual live domain or Vercel URL
  const BASE_URL = "https://www.soulosales.com"; // <<< CHANGE THIS

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 text-white p-6 flex flex-col items-center justify-center">
      <Link href="/" passHref className="absolute top-6 left-6 text-white hover:text-white/80 transition-colors">
        <ArrowLeft size={24} /> Back to Home
      </Link>

      <Card className="w-full max-w-lg bg-white/10 border-white/20 text-white shadow-lg p-8">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-4xl font-bold text-orange-400 mb-4">Vendor Onboarding</CardTitle>
          <CardDescription className="text-white/70 text-lg">
            Ready to showcase your deals? Here&apos;s how to get started:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4 text-white/80 text-lg">
            <h3 className="text-2xl font-semibold text-white">Our Simple Process:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Enter Your Email Below: Provide your primary contact email.
              </li>
              <li>
                Verify Your Email: We&apos;ll send a quick verification link to ensure your email is valid.
              </li>
              <li>
                Receive Next Steps: Once verified, we&apos;ll contact you with more information about how SouloSales for Enterprise works, the benefits of joining SouloSales as a business, and the additional benefits of signing up before we launch </li>
              <li>
                Start Selling: Connect with eager shoppers looking for amazing deals.
              </li>
            </ol>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <h3 className="text-2xl font-semibold text-white text-center mb-4">Ready to Proceed?</h3>
            <form action={`https://formspree.io/f/${VENDOR_FORMSPREE_ID}`} method="POST" className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your business email"
                className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-orange-500"
                required
              />
              <input type="hidden" name="_redirect" value={`${BASE_URL}/vendor-success`} />
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 text-lg">
                Proceed
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}