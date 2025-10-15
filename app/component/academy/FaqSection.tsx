"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is MentorPath.ai's mission?",
      answer: "MentorPath.ai's mission is to democratize access to artificial intelligence for everyone. We aim to create AI tools that empower people, solve complex problems, and drive progress across communities by providing access to multiple leading AI models in one platform."
    },
    {
      question: "Why was MentorPath.ai created?",
      answer: "We launched MentorPath.ai to democratize access to AI knowledge. Our goal is to empower individuals from all backgrounds to confidently integrate AI into their lives, work, and communities through comprehensive learning resources and hands-on training."
    },
    {
      question: "Who can join MentorPath.ai?",
      answer: "MentorPath.ai is open to everyone, with free enrollment to ensure broad access. Whether you're a student, professional, educator, or just curious about AI, you're welcome to join and learn at your own pace."
    },
    {
      question: "Does MentorPath.ai offer certifications?",
      answer: "We're planning to expand MentorPath.ai by offering certifications for different levels of AI fluency, from the basics of prompt engineering to AI-enabled work. We plan to pilot MentorPath.ai Certifications starting in late 2025 / early 2026 and look forward to sharing more information soon."
    },
    {
      question: "In what languages is MentorPath.ai available?",
      answer: "Currently, MentorPath.ai programming is available in English and Bengali, with plans to expand to additional languages soon to serve our global community better."
    },
    {
      question: "Can I host an MentorPath.ai in my community?",
      answer: "We are always looking for motivated hosts across the country and around the world. Ideal hosts include academic institutions and community groups eager to help their members embrace and adopt AI. Contact us at academy@mentorpath.ai to express your interest."
    },
    {
      question: "Where can I find out about local events?",
      answer: "Once you join MentorPath.ai, navigate to the Events section to explore upcoming virtual and in-person gatherings. You can filter by category, location, and date to find events that match your interests."
    },
    {
      question: "Where will local events take place?",
      answer: "MentorPath.ai is starting its programs in Bangladesh and plans to scale globally soon. We're committed to bringing AI education to communities worldwide."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus:outline-none"
          >
            <span className="font-semibold text-lg text-white">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-gray-400 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;

