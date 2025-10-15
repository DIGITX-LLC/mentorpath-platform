"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Users, Play, BookOpen, MessageCircle, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FaqSection from './components/FaqSection';
import { useLanguage } from './layout';

export default function AcademyPage() {
  const { language } = useLanguage();

  // Translations
  const translations = {
    en: {
      title: "MentorPath.ai",
      subtitle: "Empowering Bangladesh with AI knowledge and skills to unlock opportunities in the digital era and drive innovation across the nation.",
      joinNow: "Join Now",
      expertLearning: "Expert & Community-Led Learning",
      expertLearningDesc: "Connect with MentorPath.ai experts and Bangladeshi innovators to explore AI applications tailored for local industries and emerging trends in South Asia.",
      connections: "Connections & Collaboration",
      connectionsDesc: "Build meaningful relationships with peers, entrepreneurs, and tech leaders across Bangladesh through discussions and collaborative projects.",
      stayAhead: "Stay Ahead with AI",
      stayAheadDesc: "Learn about new AI products and solutions designed for Bangladesh's growing tech ecosystem—keeping you at the forefront of digital transformation.",
      events: "Events",
      seeAllEvents: "See All Events",
      liveIn: "Live in",
      hours: "hours",
      days: "days",
      deepdive: "Deepdive Session",
      learnMore: "Learn More →",
      content: "Content",
      seeAllContent: "See All Content",
      aboutTitle: "About MentorPath.ai",
      aboutDesc: "Across Bangladesh, students, professionals, and entrepreneurs are embracing AI to solve local challenges and enhance creativity, productivity, and learning. MentorPath.ai empowers the Bangladeshi community through workshops, discussions, and Bengali-friendly digital content—from foundational AI literacy to advanced technical skills. With online and in-person events in Dhaka, Chittagong, and beyond, MentorPath.ai creates a thriving space where participants from all backgrounds can gain practical knowledge and drive innovation in Bangladesh's digital economy.",
      eventsCard: "Events",
      eventsCardDesc: "Join virtual and in-person gatherings to learn and network with experts",
      knowledgeHub: "Knowledge Hub",
      knowledgeHubDesc: "Explore videos, tutorials, and resources from AI basics to advanced content",
      communityGroups: "Community Groups",
      communityGroupsDesc: "Connect with peers for discussions, shared learning, and collaboration",
      connect: "Connect",
      connectDesc: "Message members to exchange ideas and grow your network",
      faqTitle: "Frequently Asked Questions",
      quickLinks: "Quick Links",
      communities: "Communities",
      help: "Help",
      legal: "Legal",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      codeOfConduct: "Code of Conduct",
      copyright: "© 2025 DigitX LLC. All rights reserved.",
      resource: "Resource",
      video: "Video",
      views: "Views",
      viewResource: "View Resource",
      viewVideo: "View Video",
    },
    bn: {
      title: "MentorPath.ai",
      subtitle: "ডিজিটাল যুগে সুযোগ আনলক করতে এবং দেশজুড়ে উদ্ভাবন চালাতে এআই জ্ঞান এবং দক্ষতা দিয়ে বাংলাদেশকে ক্ষমতায়ন করা।",
      joinNow: "এখনই যোগ দিন",
      expertLearning: "বিশেষজ্ঞ এবং কমিউনিটি-নেতৃত্বাধীন শিক্ষা",
      expertLearningDesc: "স্থানীয় শিল্পের জন্য তৈরি এআই অ্যাপ্লিকেশন এবং দক্ষিণ এশিয়ার উদীয়মান প্রবণতা অন্বেষণ করতে MentorPath.ai বিশেষজ্ঞ এবং বাংলাদেশী উদ্ভাবকদের সাথে সংযুক্ত হন।",
      connections: "সংযোগ এবং সহযোগিতা",
      connectionsDesc: "আলোচনা এবং সহযোগিতামূলক প্রকল্পের মাধ্যমে বাংলাদেশ জুড়ে সহকর্মীদের, উদ্যোক্তা এবং প্রযুক্তি নেতাদের সাথে অর্থবহ সম্পর্ক তৈরি করুন।",
      stayAhead: "এআই এর সাথে এগিয়ে থাকুন",
      stayAheadDesc: "বাংলাদেশের ক্রমবর্ধমান প্রযুক্তি ইকোসিস্টেমের জন্য ডিজাইন করা নতুন এআই পণ্য এবং সমাধান সম্পর্কে জানুন—আপনাকে ডিজিটাল রূপান্তরের অগ্রভাগে রাখুন।",
      events: "ইভেন্ট",
      seeAllEvents: "সব ইভেন্ট দেখুন",
      liveIn: "সরাসরি",
      hours: "ঘণ্টায়",
      days: "দিনে",
      deepdive: "গভীর সেশন",
      learnMore: "আরও জানুন →",
      content: "কন্টেন্ট",
      seeAllContent: "সব কন্টেন্ট দেখুন",
      aboutTitle: "MentorPath.ai সম্পর্কে",
      aboutDesc: "সারা বাংলাদেশ জুড়ে, শিক্ষার্থী, পেশাদার এবং উদ্যোক্তারা স্থানীয় চ্যালেঞ্জ সমাধান এবং সৃজনশীলতা, উৎপাদনশীলতা এবং শিক্ষা বৃদ্ধির জন্য এআই গ্রহণ করছে। MentorPath.ai বাংলাদেশী কমিউনিটিকে ওয়ার্কশপ, আলোচনা এবং বাংলা-বান্ধব ডিজিটাল কন্টেন্টের মাধ্যমে ক্ষমতায়ন করে—মৌলিক এআই সাক্ষরতা থেকে উন্নত প্রযুক্তিগত দক্ষতা পর্যন্ত। ঢাকা, চট্টগ্রাম এবং তার বাইরে অনলাইন এবং সরাসরি ইভেন্টের সাথে, MentorPath.ai একটি সমৃদ্ধ স্থান তৈরি করে যেখানে সমস্ত পটভূমির অংশগ্রহণকারীরা ব্যবহারিক জ্ঞান অর্জন করতে এবং বাংলাদেশের ডিজিটাল অর্থনীতিতে উদ্ভাবন চালাতে পারে।",
      eventsCard: "ইভেন্ট",
      eventsCardDesc: "বিশেষজ্ঞদের সাথে শিখতে এবং নেটওয়ার্ক করতে ভার্চুয়াল এবং ব্যক্তিগত সমাবেশে যোগ দিন",
      knowledgeHub: "জ্ঞান কেন্দ্র",
      knowledgeHubDesc: "এআই মৌলিক থেকে উন্নত কন্টেন্ট পর্যন্ত ভিডিও, টিউটোরিয়াল এবং সম্পদ অন্বেষণ করুন",
      communityGroups: "কমিউনিটি গ্রুপ",
      communityGroupsDesc: "আলোচনা, শেয়ার করা শিক্ষা এবং সহযোগিতার জন্য সমবয়সীদের সাথে সংযোগ করুন",
      connect: "সংযোগ",
      connectDesc: "ধারণা বিনিময় এবং আপনার নেটওয়ার্ক বৃদ্ধির জন্য সদস্যদের বার্তা পাঠান",
      faqTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
      quickLinks: "দ্রুত লিঙ্ক",
      communities: "কমিউনিটি",
      help: "সাহায্য",
      legal: "আইনি",
      termsOfService: "সেবার শর্তাবলী",
      privacyPolicy: "গোপনীয়তা নীতি",
      codeOfConduct: "আচরণবিধি",
      copyright: "© ২০২৫ ডিজিটএক্স এলএলসি। সর্বস্বত্ব সংরক্ষিত।",
      resource: "সম্পদ",
      video: "ভিডিও",
      views: "দেখা হয়েছে",
      viewResource: "সম্পদ দেখুন",
      viewVideo: "ভিডিও দেখুন",
    }
  };

  const t = translations[language];
  // Featured events data
  const featuredEvents = [
    {
      id: 1,
      title: "ChatGPT for Business 101",
      date: "Oct 20, 2025",
      time: "6:00 PM - 7:00 PM BST",
      hosts: [
        { name: "Arif Rahman", avatar: "/assets/profile-avatar.svg" },
        { name: "Nadia Sultana", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Work",
      slug: "chatgpt-for-business-101"
    },
    {
      id: 2,
      title: "AI for Educators: Transforming Classrooms",
      date: "Oct 25, 2025",
      time: "7:00 PM - 8:00 PM BST",
      hosts: [
        { name: "Dr. Farida Ahmed", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Education",
      slug: "ai-for-educators"
    },
    {
      id: 3,
      title: "Build Multi-Agent Systems with MentorPath.ai",
      date: "Nov 1, 2025",
      time: "6:30 PM - 7:30 PM BST",
      hosts: [
        { name: "Rafiul Islam", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Work",
      slug: "build-multi-agent-systems"
    }
  ];

  // Featured content data
  const featuredContent = [
    {
      id: 1,
      title: "MentorPath.ai Fundamentals",
      description: "A comprehensive guide to using MentorPath.ai for businesses, students, and professionals in Bangladesh.",
      type: "Resource",
      views: "91K",
      date: "Sep 30th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "mentorpath-fundamentals",
      trending: true
    },
    {
      id: 2,
      title: "AI Strategies for Educators",
      description: "Help Bangladeshi teachers integrate AI tools in classrooms to enhance student learning and engagement.",
      type: "Video",
      duration: "1:00:00",
      views: "6.1K",
      date: "Oct 1st, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "ai-strategies-educators",
      trending: false
    },
    {
      id: 3,
      title: "Managing Projects with AI",
      description: "Practical AI solutions for managing projects in Bangladesh's growing startup and SME ecosystem.",
      type: "Resource",
      views: "1.2K",
      date: "Oct 4th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "managing-projects-ai"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
              {t.subtitle}
            </p>
            <Link href="https://mentorpath.ai/register">
              <button className="px-12 py-4 bg-transparent text-white rounded-full font-semibold text-xl hover:bg-white/10 transition-all border-2 border-white/50">
                {t.joinNow}
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{t.expertLearning}</h3>
              <p className="text-gray-300">{t.expertLearningDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{t.connections}</h3>
              <p className="text-gray-300">{t.connectionsDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{t.stayAhead}</h3>
              <p className="text-gray-300">{t.stayAheadDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.events}</h2>
            <Link href="/bd/events" className="flex items-center gap-2 text-[#60A5FA] hover:text-[#3FBFF4] transition-colors font-medium">
              {t.seeAllEvents}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Featured Event - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:col-span-1 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #2D1B69 0%, #4A1E5C 50%, #6B1F47 100%)'
              }}
            >
              <Link href={`/bd/events/${featuredEvents[0].slug}`}>
                <div className="p-8 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-semibold mb-6">
                      {t.liveIn} 3 {t.hours}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {featuredEvents[0].title}
                    </h3>
                    <p className="text-white/90 text-sm mb-6">
                      Building comfort and confidence with AI for business applications.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredEvents[0].time}, {featuredEvents[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {featuredEvents[0].hosts.map((host, idx) => (
                        <Image
                          key={idx}
                          src={host.avatar}
                          alt={host.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full border-2 border-white/30"
                        />
                      ))}
                    </div>
                    <button className="text-white font-medium text-sm hover:underline">
                      {t.learnMore}
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Second Event */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden relative group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #064E5C 0%, #1E3A8A 100%)'
              }}
            >
              <Link href={`/bd/events/${featuredEvents[1].slug}`}>
                <div className="p-6 h-full flex flex-col justify-between min-h-[190px]">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-semibold mb-4">
                      {t.liveIn} 5 {t.days}
                    </span>
                  </div>
                  <div>
                    <div className="text-white/90 text-xs mb-2">
                      <Calendar className="inline w-3 h-3 mr-1" />
                      {featuredEvents[1].time}, {featuredEvents[1].date}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {featuredEvents[1].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Third Event */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden relative group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #4C1D95 0%, #7F1D53 100%)'
              }}
            >
              <Link href={`/bd/events/${featuredEvents[2].slug}`}>
                <div className="p-6 h-full flex flex-col justify-between min-h-[190px]">
                  <div>
                    <span className="inline-block px-3 py-1 bg-black/30 backdrop-blur-sm text-white rounded-md text-xs font-semibold mb-4">
                      {t.deepdive}
                    </span>
                  </div>
                  <div>
                    <div className="text-white/90 text-xs mb-2">
                      <Calendar className="inline w-3 h-3 mr-1" />
                      {featuredEvents[2].time}, {featuredEvents[2].date}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {featuredEvents[2].title}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* See All Events Button */}
          <div className="flex justify-center mt-8">
            <Link href="/bd/events">
              <button className="px-12 py-4 bg-transparent text-white rounded-full font-semibold text-xl hover:bg-white/10 transition-all border-2 border-white/50">
                {t.seeAllEvents}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.content}</h2>
            <Link href="/bd/content" className="flex items-center gap-2 text-[#60A5FA] hover:text-[#3FBFF4] transition-colors font-medium">
              {t.seeAllContent}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Content - Gradient Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Link href={`/bd/content/${featuredContent[0].slug}`}>
                <div 
                  className="relative h-64 p-6 flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(135deg, #064E5C 0%, #4C1D95 100%)'
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {featuredContent[0].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {featuredContent[0].description}
                    </p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] p-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{featuredContent[0].type}</span>
                    <span className="text-xs text-gray-400">{featuredContent[0].date} | {t.views} {featuredContent[0].views}</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Second Content - Video Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Link href={`/bd/content/${featuredContent[1].slug}`}>
                <div 
                  className="relative h-64 p-6 flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #4C1D95 100%)'
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {featuredContent[1].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {featuredContent[1].description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-black/30 backdrop-blur-sm text-white rounded text-xs font-semibold">
                      {featuredContent[1].type}
                    </span>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] p-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{featuredContent[1].type}</span>
                    <span className="text-xs text-gray-400">{featuredContent[1].date} | {t.views} {featuredContent[1].views}</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Third Content - Resource Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Link href={`/bd/content/${featuredContent[2].slug}`}>
                <div 
                  className="relative h-64 p-6 flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(135deg, #7F1D53 0%, #92400E 100%)'
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {featuredContent[2].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {featuredContent[2].description}
                    </p>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] p-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{featuredContent[2].type}</span>
                    <span className="text-xs text-gray-400">{featuredContent[2].date} | {t.views} {featuredContent[2].views}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* See All Content Button */}
          <div className="flex justify-center mt-8">
            <Link href="/bd/content">
              <button className="px-12 py-4 bg-transparent text-white rounded-full font-semibold text-xl hover:bg-white/10 transition-all border-2 border-white/50">
                {t.seeAllContent}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t.aboutTitle}</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <h3 className="text-lg font-bold mb-2 text-white">{t.eventsCard}</h3>
              <p className="text-gray-300 text-sm">{t.eventsCardDesc}</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <h3 className="text-lg font-bold mb-2 text-white">{t.knowledgeHub}</h3>
              <p className="text-gray-300 text-sm">{t.knowledgeHubDesc}</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <h3 className="text-lg font-bold mb-2 text-white">{t.communityGroups}</h3>
              <p className="text-gray-300 text-sm">{t.communityGroupsDesc}</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
              <h3 className="text-lg font-bold mb-2 text-white">{t.connect}</h3>
              <p className="text-gray-300 text-sm">{t.connectDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t.faqTitle}
          </h2>
          <FaqSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Image
              src="/assets/MentorPathLogo.svg"
              alt="MentorPath.ai Logo"
              width={180}
              height={36}
              className="mb-4"
            />
            <p className="text-gray-300 text-sm max-w-sm">
              MentorPath.ai - Empowering individuals to harness the transformative power of AI.
            </p>
          </div>
          <div>
            <h4 className="text-[#60A5FA] font-semibold mb-3">{t.quickLinks}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/bd/events" className="hover:text-white transition">{t.events}</Link></li>
              <li><Link href="/bd/content" className="hover:text-white transition">{t.content}</Link></li>
              <li><Link href="/bd/communities" className="hover:text-white transition">{t.communities}</Link></li>
              <li><Link href="/bd/help" className="hover:text-white transition">{t.help}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#60A5FA] font-semibold mb-3">{t.legal}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/bd/terms" className="hover:text-white transition">{t.termsOfService}</Link></li>
              <li><Link href="/bd/privacy" className="hover:text-white transition">{t.privacyPolicy}</Link></li>
              <li><Link href="/bd/code-of-conduct" className="hover:text-white transition">{t.codeOfConduct}</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-gray-400 text-sm">
          <p>{t.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
