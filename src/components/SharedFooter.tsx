import React from 'react';
import Link from 'next/link';

export default function SharedFooter() {
  // You might want to get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    // Changed class names for the desired effect
    <footer className="w-full bg-gradient-to-t from-black via-gray-900 to-gray-800 backdrop-blur-sm bg-opacity-70 border-t border-white/10 text-white/60 text-sm py-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <p>&copy; {currentYear} SouloSales. All rights reserved.</p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" passHref className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" passHref className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/faq" passHref className="hover:text-white transition-colors duration-200">
            FAQ
          </Link>
          <Link href="/about" passHref className="hover:text-white transition-colors duration-200">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
}