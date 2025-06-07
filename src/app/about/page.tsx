// src/app/about/page.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 text-center mb-12 pt-24"
      >
        About SouloSales
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6 text-lg text-white/80">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At SouloSales, we believe finding the best deals should be effortless, and showcasing amazing products should be impactful. Our mission is to create a dynamic marketplace where every sale finds its perfect match.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          For **shoppers**, SouloSales is the ultimate destination to track live deals, countdowns, and exclusive offers from a diverse range of brands. No more endless searching or missing out on flash sales – everything you need, in one powerful dashboard.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          For **vendors**, we provide an unparalleled opportunity to connect with a highly engaged audience eager for great value. List your sales, reach new customers, and drive more traffic directly to your e-commerce channels. We simplify the process so you can focus on what you do best – selling amazing products.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Join us as we build the future of online sales discovery, where every sale truly finds its soul.
        </motion.p>
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="text-purple-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}