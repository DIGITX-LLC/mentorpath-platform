"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p className="text-lg">Last updated: October 14, 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using MentorPath.ai Academy, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Services</h2>
              <p>MentorPath.ai Academy provides educational resources, events, and community features related to artificial intelligence. You agree to use these services responsibly and in accordance with our community guidelines.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Content</h2>
              <p>All content provided through MentorPath.ai Academy is for educational purposes. You may not reproduce, distribute, or create derivative works without permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Limitation of Liability</h2>
              <p>MentorPath.ai Academy is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact</h2>
              <p>For questions about these Terms of Service, please contact us at <a href="mailto:academy@onebrain.app" className="text-[#60A5FA] hover:text-[#3FBFF4]">academy@onebrain.app</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


