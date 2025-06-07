"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component from shadcn/ui

export default function VendorInterestPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6 flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 mb-4"
      >
        Unlock New Sales Opportunities with SouloSales!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-white/80 max-w-xl mx-auto mb-8"
      >
        Thank you for your interest in partnering with us. SouloSales is building the ultimate platform to connect your best deals directly with an audience of eager shoppers.
      </motion.p>

      <div className="space-y-4 mb-10 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-purple-300">What's Next?</h2>
        <p className="text-white/70">
          We've received your inquiry. Keep an eye on your inbox! We'll send you a detailed email shortly explaining how to:
        </p>
        <ul className="list-disc list-inside text-left mx-auto text-white/70">
          <li>List your products and sales events seamlessly.</li>
          <li>Access our intuitive vendor dashboard.</li>
          <li>Reach a massive, engaged community of shoppers.</li>
          <li>Amplify your sales and brand visibility.</li>
        </ul>
        <p className="text-white/70 mt-4">
          Prepare to transform how shoppers discover your incredible offers.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <Badge variant="secondary" className="bg-white/10 text-white border border-purple-400">Increased Visibility</Badge>
        <Badge variant="secondary" className="bg-white/10 text-white border border-purple-400">Targeted Shoppers</Badge>
        <Badge variant="secondary" className="bg-white/10 text-white border border-purple-400">Effortless Listings</Badge>
      </div>

      <Link href="/" className="text-purple-400 hover:underline mt-10">
        Back to Home
      </Link>
    </div>
  );
}