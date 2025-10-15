"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CodeOfConductPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">Code of Conduct</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <p className="text-lg">Our commitment to fostering a welcoming and inclusive community</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Pledge</h2>
              <p>MentorPath.ai Academy is committed to providing a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Standards</h2>
              <p>Examples of behavior that contributes to creating a positive environment include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Using welcoming and inclusive language</li>
                <li>Being respectful of differing viewpoints and experiences</li>
                <li>Gracefully accepting constructive criticism</li>
                <li>Focusing on what is best for the community</li>
                <li>Showing empathy towards other community members</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Unacceptable Behavior</h2>
              <p>Examples of unacceptable behavior include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harassment, intimidation, or discrimination in any form</li>
                <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
                <li>Public or private harassment</li>
                <li>Publishing others' private information without permission</li>
                <li>Other conduct which could reasonably be considered inappropriate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Enforcement</h2>
              <p>Community moderators are responsible for clarifying and enforcing our standards. They have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that do not align with this Code of Conduct.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Reporting</h2>
              <p>Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the team at <a href="mailto:conduct@onebrain.app" className="text-[#60A5FA] hover:text-[#3FBFF4]">conduct@onebrain.app</a>. All complaints will be reviewed and investigated promptly and fairly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Scope</h2>
              <p>This Code of Conduct applies within all MentorPath.ai Academy spaces, including events, online forums, and community interactions.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

