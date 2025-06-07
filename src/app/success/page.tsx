"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6 flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 mb-4"
      >
        Thank You! Your Submission Is Confirmed.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-white/80 max-w-xl mx-auto mb-8"
      >
        Please check your inbox for a confirmation email. Click the link inside to verify your email address. Once confirmed, you&apos;ll be among the first to know when SouloSales officially launches!
      </motion.p>
      <Link href="/" className="text-purple-400 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}