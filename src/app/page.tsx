'use client'; // Essential for using useState

// Prelaunch Landing Page with Glassmorphism and Dark Purple Gradient Theme
import React, { useState } from "react"; // Import useState
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Added CardHeader, CardTitle, CardDescription
import { motion } from "framer-motion";
import { Sparkles, Clock, Store } from "lucide-react";
import SharedFooter from '@/components/SharedFooter'; // Import SharedFooter

export default function PrelaunchLandingPage() {
  const [selectedUserType, setSelectedUserType] = useState('shopper'); // State to manage selected user type

  // Function to handle changes in the select dropdown
  const handleUserTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserType(event.target.value);
  };

  // Define your feature cards data here
  const featureCards = [
    { icon: <Sparkles size={32} />, title: "Live Countdowns", desc: "See when sales start and end in real-time." },
    { icon: <Store size={32} />, title: "Vendor Listings", desc: "Brands list their own deals to reach more buyers." },
    { icon: <Clock size={32} />, title: "Never Miss Out", desc: "Join the waitlist to get early alerts on new drops." },
  ];

  // Define your base URL for redirects (replace with your actual domain or Vercel URL)
  const BASE_URL = "https://www.soulosales.com"; // <-- IMPORTANT: Update this to your live domain or Vercel URL

  return (
    // The main container. Ensure this has min-h-screen for full height.
    // The background gradient should ideally be on the body in layout.tsx,
    // but if you have it here, it will apply to this div.
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white p-6 flex flex-col justify-between"> {/* Added flex-col justify-between */}
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
        <Card className="w-[380px] mx-auto bg-white/10 border-white/20 text-white shadow-lg"> {/* Added mx-auto for centering */}
          <CardHeader>
            <CardTitle className="text-white text-center">Join Our Waitlist</CardTitle>
            <CardDescription className="text-white/70 text-center">
              Be the first to know when we launch!
            </CardDescription>
          </CardHeader>
          <form
            action="https://formspree.io/f/mpwdejbg" // Replace with your Formspree form ID
            method="POST"
          >
            <CardContent className="space-y-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-purple-500"
                required
              />
              <div className="flex justify-center"> {/* Centering for the select */}
                <select
                  name="userType"
                  value={selectedUserType} // Make select a controlled component
                  onChange={handleUserTypeChange} // Attach the change handler
                  className="
                    backdrop-blur-md bg-white/10 border border-white/20 text-white
                    px-4 py-2 rounded-md appearance-none relative pr-8
                    // Custom styles for dropdown arrow (optional, requires more CSS)
                    // For better custom styling, consider a Headless UI library for select
                  "
                >
                  <option value="shopper" className="bg-gray-800 text-white">I&apos;m a Shopper</option> {/* Apply background to options */}
                  <option value="vendor" className="bg-gray-800 text-white">I&apos;m a Vendor</option> {/* Apply background to options */}
                </select>
              </div>

              {/* Conditional Redirect Inputs - ESSENTIAL for custom redirection */}
              {selectedUserType === 'shopper' && (
                <input type="hidden" name="_redirect" value={`${BASE_URL}/success`} />
              )}
              {selectedUserType === 'vendor' && (
                <input type="hidden" name="_redirect" value={`${BASE_URL}/vendor-interest`} />
              )}

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                {selectedUserType === 'shopper' ? 'Notify Me' : 'Next Steps'} {/* Dynamic Button Text */}
              </Button>
            </CardContent>
          </form>
        </Card>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card, index) => (
          <FeatureCard key={index} icon={card.icon} title={card.title} desc={card.desc} />
        ))}
      </section>

      {/* Shared Footer component */}
      <SharedFooter /> {/* Use the SharedFooter component here */}
    </div>
  );
}

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