'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Ensure these are imported
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SharedFooter from '@/components/SharedFooter'; // Assuming you still want this footer

export default function FAQPage() {
  const faqItems = [
    {
      question: "Where do these deals come from? (What websites/vendors do you aggregate from?)",
      answer: "SouloSales' library of daily deals directly from our partners is constantly expanding. We collaborate with a growing network of reputable vendors to bring you the best discounts."
    },
    {
      question: "How often are the deals updated? (Is it real-time, hourly, daily?)",
      answer: "New sales are added daily, as items from our partners go live around the clock. Our inventory expands every hour, ensuring you always have access to the latest deals."
    },
    {
      question: "How accurate are the countdown timers? (Are they directly linked to the vendor's sale end time?)",
      answer: "Deals presented on SouloSales are accurate to the second due to being directly linked to our partner's site's metadata. The moment the sale ends on the vendor's website is the moment it ends on ours."
    },
    {
      question: "What happens when the timer runs out? (Is the deal automatically removed, marked as expired?)",
      answer: "Once the timer runs out, the deal is no longer available for the sale price on our site nor the vendor's site. If you are on the listings page, the deal will grey out with an animation of Sol and a headstone reading 'this sale is no longer available.' This listing is still clickable, and you will still be able to visit the vendor's site to purchase the item at full price. Once you refresh the page, the listing will disappear from our website entirely."
    },
    {
      question: "Are the prices I see on SouloSales the final price? (Do they include shipping, taxes?)",
      answer: "The prices you see on SouloSales are the exact same prices you will see on the vendor's site. Vendors usually present their prices without consideration for shipping or taxes, as those will vary by region and will be calculated during checkout on the vendor's site."
    },
    {
      question: "How do I know if a deal is legitimate? (Do you verify the sales?)",
      answer: "Vendors go through a vetting process that ensures every item listed on SouloSales is a legitimate item from a reputable vendor, sold at the price listed on their website. We prioritize authenticity and trust."
    },
    {
      question: "Can I save deals to watch later? (Wishlist or favorite feature?)",
      answer: "Yes! In order to store items you wish to revisit later, you must create an account first for that information to be saved across multiple sessions or devices. Once an account is created, click the bookmark icon next to the expanded item to save it. To access all of your bookmarked items, click the icon in the top right corner of the screen to view them. Please note: If you bookmark items without an account and close the website or visit it on another device, your bookmarked items will not be there. This is why it is highly recommended that you create an account, so you do not lose access to your favorite deals."
    },
    {
      question: "Can I get notified about deals on specific products or from specific vendors? (Alerts, subscriptions?)",
      answer: "Yes, in order to receive alerts about new listings, items that are about to expire, and manage your subscriptions, you must create an account, provide a preferred method of communication (email or SMS), and allow SouloSales to contact you."
    },
    {
      question: "What are the filtering and sorting options based on? (Price, discount percentage, popularity, end time, category, vendor?)",
      answer: "You are able to filter by category, price range, brand, and parameters (color, dimensions, size). You can also sort by recently started sales as well as sales that are ending soon."
    },
    {
      question: "If I have a problem with a purchase, who do I contact? (You or the vendor?)",
      answer: (
        <>
          SouloSales is an online repository of deals from across the internet. Think of our website as a digital sheet of paper that transports you to the store of your liking in order for you to initiate and complete a purchase. In the event of an issue with your purchase, you will need to contact the vendor directly.
          <br /><br />
          For issues pertaining to the services we offer (incorrect pricing, inaccuracies regarding remaining time left for an item&apos;s sale, misleading details, etc.), please contact us at [your phone number] or [your support email].
        </>
      )
    },
    {
      question: "Do I need to create an account to use the site? (What are the benefits of creating an account?)",
      answer: "You do not need to create an account to use SouloSales. Creating an account is recommended for those who wish to frequent our catalogue, those who would like to bookmark items for later, and those who would like to be notified of our ever-expanding repository."
    },
    {
      question: "Is SouloSales free to use for consumers?",
      answer: "SouloSales is a completely free service for visitors."
    },
    {
      question: "How do I find specific types of deals? (Navigation, search functionality?)",
      answer: "You can search for specific items using the search bar found on the home page. To narrow down the range of items, you can filter the selection using a range of parameters. You can also sort by recently started sales as well as sales that are ending soon."
    },
    {
      question: "Is there a mobile app? (Or is the website mobile-friendly?)",
      answer: "The website is mobile-friendly, designed to work seamlessly across devices. There are plans to launch a SouloSales application in the future for the convenience of finding deals directly from a native app on your mobile device."
    },
    {
      question: "How do I contact customer support if I have questions about using SouloSales?",
      answer: "You can reach our customer support team at [your support email] or by phone at [your phone number]. We're here to help!"
    },
    {
      question: "What are your privacy practices? (How do you handle my data?)",
      answer: (
        <>
          SouloSales uses cookies to allow the temporary caching of any information you input on our website. This includes search queries, filtering, sorting, email, phone number, bookmarked items, and parameters you frequently engage with. Certain metrics such as time spent on an item, the amount of items you click from a vendor, and affiliate turnover may be shared with our vendors in order to improve our own site as well as their operations.
          <br /><br />
          To view more on our comprehensive privacy policy, please click <Link href="/privacy" className="text-purple-400 hover:underline">here</Link> or visit <a href="https://www.SouloSales.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">https://www.SouloSales.com/privacy</a>.
        </>
      )
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-900 via-purple-900 to-orange-900 text-white p-6 flex flex-col items-center">
      <Link href="/" passHref className="absolute top-6 left-6 text-white hover:text-white/80 transition-colors">
        <ArrowLeft size={24} /> Back to Home
      </Link>

      <section className="max-w-4xl mx-auto py-24 text-center space-y-6">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-400 to-orange-400">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-white/80">
          Find answers to common questions about SouloSales.
        </p>
      </section>

      <section className="w-full max-w-3xl mb-12">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
              <AccordionTrigger className="text-left text-lg hover:no-underline text-white font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      
    </div>
  );
}