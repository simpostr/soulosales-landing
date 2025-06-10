'use client'; // Essential for using React hooks and client-side interactions

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Clock, Store, User, Briefcase, ChevronDown } from "lucide-react"; // Added User, Briefcase, ChevronDown
import Link from 'next/link'; // Import Link for internal navigation

export default function HomePage() { // Renamed from PrelaunchLandingPage for clarity
  // Define your feature cards data here
  const featureCards = [
    { icon: <Sparkles size={32} />, title: "Live Countdowns", desc: "See when sales start and end in real-time." },
    { icon: <Store size={32} />, title: "Vendor Listings", desc: "Brands list their own deals to reach more buyers." },
    { icon: <Clock size={32} />, title: "Never Miss Out", desc: "Join the waitlist to get early alerts on new drops." },
  ];

  return (
    <div className="min-h-screen w-full text-white p-6 flex flex-col"> {/* Use flex-col for stacking sections */}
      {/* Scroll Down Indicator */}
      <div className="absolute inset-x-0 bottom-4 text-center z-10">
        <ChevronDown size={48} className="animate-bounce text-white/50 mx-auto" />
      </div>

      {/* Hero / About Us Section - First thing prospects see */}
      <section className="relative flex-grow flex items-center justify-center min-h-[calc(100vh-100px)] max-w-4xl mx-auto text-center space-y-8 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-orange-400 to-purple-400 leading-tight">
            SouloSales: Your Ultimate Deal Tracker
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto">
            We help you discover and track the best sales and discounts from your favorite brands across the internet. Never miss a deal again!
          </p>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Whether you&apos;re a savvy shopper looking for a bargain or a brand eager to reach a wider audience, SouloSales is building the perfect platform for you.
          </p>
        </motion.div>
      </section>

      {/* Vendor & Customer Onboarding Graphics - Scroll down to these */}
      <section className="py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vendor Card */}
        <Link href="/vendor-onboarding" passHref>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full flex flex-col justify-between items-center text-center"
          >
            <Briefcase size={64} className="text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-4xl font-bold text-white mb-4">I&apos;m a Vendor</h2>
            <p className="text-lg text-white/70 mb-6">
              Showcase your deals to a targeted audience of eager shoppers. Learn how to list your sales and grow your brand.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Partner With Us
            </Button>
          </motion.div>
        </Link>

        {/* Customer Card */}
        <Link href="/customer-onboarding" passHref>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full flex flex-col justify-between items-center text-center"
          >
            <User size={64} className="text-pink-400 mb-6 group-hover:scale-110 transition-transform" />
            <h2 className="text-4xl font-bold text-white mb-4">I&apos;m a Shopper</h2>
            <p className="text-lg text-white/70 mb-6">
              Discover incredible deals, track sales, and never miss out on discounts from your favorite brands.
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Find My Deals
            </Button>
          </motion.div>
        </Link>
      </section>

      {/* Prominent FAQ Link */}
      <section className="text-center py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Got Questions?</h2>
        <p className="text-lg text-white/70 mb-8">
          Check out our frequently asked questions for more information about SouloSales.
        </p>
        <Link href="/faq" passHref>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg animate-pulse">
            Visit Our FAQ
          </Button>
        </Link>
      </section>


      {/* Original Features Section - Still present */}
      <section className="max-w-5xl mx-auto py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} icon={card.icon} title={card.title} desc={card.desc} />
        ))}
      </section>

    </div>
  );
}

// Re-using the FeatureCard component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <CardContent className="p-6 space-y-4 text-center">
        <div className="flex justify-center text-purple-400">{icon}</div> {/* Icons use existing purple */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70">{desc}</p>
      </CardContent>
    </Card>
  );
}