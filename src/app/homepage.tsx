"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Clock, Store } from "lucide-react";
import { useRouter } from 'next/navigation'; // Import useRouter

export default function PrelaunchLandingPage() {
  const [userType, setUserType] = useState("shopper");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get email and userType from formData
    const type = formData.get('userType');

    // Asynchronously send data to Formspree
    try {
      await fetch("https://formspree.io/f/mpwdejbg", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      console.log('Formspree submission successful');
    } catch (error) {
      console.error('Formspree submission error:', error);
      // You might want to show an error message to the user or log it
    }

    // Redirect based on userType
    if (type === "vendor") {
      router.push('/vendor-interest');
    } else {
      router.push('/success');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400"
        >
          See Every Sale. One Dashboard.
        </motion.h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto">
          Track live deals and countdowns from your favorite brands. Vendors list your sales, shoppers never miss a drop.
        </p>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit} // Use onSubmit to intercept
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
        >
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="backdrop-blur-md bg-white/10 border border-white/20 placeholder-white/60 text-white"
            required
          />
          <select
            name="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-4 py-2 rounded-md"
          >
            <option value="shopper">I&apos;m a Shopper</option>
            <option value="vendor">I&apos;m a Vendor</option>
          </select>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            {userType === "vendor" ? "Partner with Us" : "Notify Me"}
          </Button>
        </form>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard icon={<Sparkles size={32} />} title="Live Countdowns" desc="See when sales start and end in real-time." />
        <FeatureCard icon={<Store size={32} />} title="Vendor Listings" desc="Brands list their own deals to reach more buyers." />
        <FeatureCard icon={<Clock size={32} />} title="Never Miss Out" desc="Join the waitlist to get early alerts on new drops." />
      </section>

      {/* Footer is now in layout.tsx */}
    </div>
  );
}

// Ensure FeatureCardProps interface is defined as before
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <CardContent className="p-6 space-y-4 text-center">
        <div className="flex justify-center text-purple-400">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70">{desc}</p>
      </CardContent>
    </Card>
  );
}
