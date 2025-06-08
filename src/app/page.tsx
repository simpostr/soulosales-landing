'use client'; // This component needs to be a Client Component

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Make sure your radio group or similar input is structured correctly to capture 'userType'
// This example assumes you have a way to get userType from the form,
// or you can explicitly set it based on the radio button selection.

export default function PrelaunchLandingPage() { // Or whatever your component name is
  const [selectedUserType, setSelectedUserType] = useState('shopper'); // Default to 'shopper'

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUserType(event.target.value);
  };

  // You can keep your existing handleSubmit if you have one, or use Formspree's action directly
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Your existing form submission logic
  //   // For redirection, you can use:
  //   // if (selectedUserType === 'shopper') {
  //   //   window.location.href = 'https://your-domain.com/success';
  //   // } else {
  //   //   window.location.href = 'https://your-domain.com/vendor-interest';
  //   // }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      {/* ... Your existing logo, headline, and subheadline ... */}

      <Card className="w-[380px] bg-white/10 border-white/20 text-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-white text-center">Join Our Waitlist</CardTitle>
          <CardDescription className="text-white/70 text-center">
            Be the first to know when we launch!
          </CardDescription>
        </CardHeader>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <CardContent className="space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="bg-white/10 border-white/30 text-white placeholder-white/60 focus:ring-purple-500"
            />
            <div className="flex justify-center space-x-4">
              <label className="flex items-center space-x-2 text-white/80">
                <Input
                  type="radio"
                  name="userType"
                  value="shopper"
                  checked={selectedUserType === 'shopper'}
                  onChange={handleUserTypeChange}
                  className="form-radio text-purple-600 focus:ring-purple-500"
                />
                <span>I&apos;m a Shopper</span>
              </label>
              <label className="flex items-center space-x-2 text-white/80">
                <Input
                  type="radio"
                  name="userType"
                  value="vendor"
                  checked={selectedUserType === 'vendor'}
                  onChange={handleUserTypeChange}
                  className="form-radio text-purple-600 focus:ring-purple-500"
                />
                <span>I&apos;m a Vendor</span>
              </label>
            </div>
            {/* Hidden redirect inputs based on selected type */}
            {selectedUserType === 'shopper' && (
              <input type="hidden" name="_redirect" value="https://soulosales.com/success" />
            )}
            {selectedUserType === 'vendor' && (
              <input type="hidden" name="_redirect" value="https://soulosales.com/vendor-interest" />
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              {selectedUserType === 'shopper' ? 'Notify Me' : 'Next Steps'}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* ... Your three feature cards ... */}

    </main>
  );
}