// src/app/faq/page.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is SouloSales?",
      answer: "SouloSales is your go-to destination to discover and track the best sales and discounts from your favorite brands across the internet. We help shoppers never miss a deal and vendors reach a wider audience."
    },
    {
      question: "How do I get notified about sales?",
      answer: "Simply enter your email on our homepage and select 'I&apos;m a Shopper'. We&apos;ll send you updates and exclusive access once the full platform launches!"
    },
    {
      question: "I'm a business. How can I list my sales?",
      answer: "Select &apos;I&apos;m a Vendor&apos; on our homepage and submit your email. We&apos;ll send you details on how to join our vendor network and start showcasing your deals to our community."
    },
    {
      question: "When will SouloSales fully launch?",
      answer: "We&apos;re currently in pre-launch mode, optimizing the platform for the best experience. Sign up for our waitlist, and you&apos;ll be the first to know the official launch date!"
    },
    {
      question: "Is SouloSales free to use?",
      answer: "For shoppers, SouloSales will always be free. For vendors, we&apos;ll have competitive pricing models to ensure maximum value for your listings, details of which will be shared with our registered vendors."
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 text-center mb-12 pt-24"
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{faq.question}</h2>
            <p className="text-white/70">{faq.answer}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/" className="text-purple-400 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}