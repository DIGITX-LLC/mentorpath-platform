"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div
      className="bg-[#030205] text-white min-h-screen"
      style={{
        background: 'linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(240, 63%, 10%, 1) 95%, hsla(241, 61%, 26%, 1) 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-32">
        <Link href="/bd/help" className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#3FBFF4] mb-6 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Help
        </Link>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p className="text-lg">Last updated: October 14, 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, register for events, or participate in communities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve MentorPath.ai Academy services, including to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your registrations and manage your account</li>
                <li>Send you updates about events and content</li>
                <li>Respond to your questions and provide support</li>
                <li>Analyze usage patterns to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information with service providers who assist us in operating MentorPath.ai Academy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Cookies</h2>
              <p>We use cookies and similar technologies to enhance your experience and collect usage data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact</h2>
              <p>For privacy-related questions, please contact us at <a href="mailto:privacy@mentorpath.ai" className="text-[#60A5FA] hover:text-[#3FBFF4]">privacy@mentorpath.ai</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


