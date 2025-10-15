"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, BookOpen, Search, Eye, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSelectedSort] = useState("Latest");

  const types = ["All", "Videos", "Resources", "Tutorials", "Guides"];
  const sortOptions = ["Latest", "Most Viewed", "Trending"];

  // Gradient colors for cards (matching home page style)
  const gradients = [
    'linear-gradient(135deg, #064E5C 0%, #1E3A8A 100%)', // Dark Teal to Blue
    'linear-gradient(135deg, #2D1B69 0%, #4A1E5C 50%, #6B1F47 100%)', // Purple to Pink
    'linear-gradient(135deg, #4C1D95 0%, #7F1D53 100%)', // Purple to Pink
    'linear-gradient(135deg, #1E3A8A 0%, #4C1D95 100%)', // Blue to Purple
    'linear-gradient(135deg, #064E5C 0%, #4C1D95 100%)', // Teal to Purple
    'linear-gradient(135deg, #7F1D53 0%, #92400E 100%)', // Pink to Orange
  ];

  const allContent = [
    {
      id: 1,
      title: "MentorPath.ai Fundamentals",
      description: "A fundamental overview of what MentorPath.ai is and how you can use it in any role.",
      type: "Resource",
      views: "91K",
      date: "Sep 30th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "onebrain-fundamentals",
      trending: true
    },
    {
      id: 2,
      title: "AI Strategies for Educators",
      description: "An interactive session designed to help teachers harness AI tools to enhance learning.",
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
      description: "Learn how to streamline your project management workflow using AI tools.",
      type: "Resource",
      views: "1.2K",
      date: "Oct 4th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "managing-projects-ai",
      trending: false
    },
    {
      id: 4,
      title: "Prompt Engineering Masterclass",
      description: "Advanced techniques for writing effective prompts that get the best results from AI models.",
      type: "Tutorial",
      duration: "45:00",
      views: "15.3K",
      date: "Oct 8th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "prompt-engineering-masterclass",
      trending: true
    },
    {
      id: 5,
      title: "Building AI-Powered Chatbots",
      description: "Step-by-step guide to creating custom chatbots for your business needs.",
      type: "Guide",
      views: "8.7K",
      date: "Oct 10th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "building-ai-chatbots",
      trending: false
    },
    {
      id: 6,
      title: "AI Ethics and Responsible Use",
      description: "Understanding the ethical implications of AI and how to use it responsibly.",
      type: "Video",
      duration: "35:00",
      views: "4.2K",
      date: "Oct 12th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "ai-ethics-responsible-use",
      trending: false
    },
    {
      id: 7,
      title: "Data Analysis with AI",
      description: "Leverage AI tools to analyze data faster and uncover insights more effectively.",
      type: "Tutorial",
      duration: "52:00",
      views: "12.8K",
      date: "Oct 15th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "data-analysis-ai",
      trending: true
    },
    {
      id: 8,
      title: "Content Creation with MentorPath.ai",
      description: "Master content creation workflows using MentorPath.ai's multi-model capabilities.",
      type: "Guide",
      views: "9.5K",
      date: "Oct 18th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "content-creation-onebrain",
      trending: false
    },
    {
      id: 9,
      title: "Introduction to Image Generation",
      description: "Learn the basics of AI image generation and creative applications.",
      type: "Video",
      duration: "28:00",
      views: "22.1K",
      date: "Oct 20th, 2025",
      thumbnail: "/assets/explore_banner.png",
      slug: "intro-image-generation",
      trending: true
    }
  ];

  const filteredContent = allContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || content.type === selectedType;
    return matchesSearch && matchesType;
  }).sort((a, b) => {
    if (sortBy === "Most Viewed") {
      const viewsA = parseInt(a.views.replace('K', '000'));
      const viewsB = parseInt(b.views.replace('K', '000'));
      return viewsB - viewsA;
    } else if (sortBy === "Trending") {
      return b.trending === a.trending ? 0 : b.trending ? 1 : -1;
    }
    return 0; // Latest - already in order
  });


  return (
    <div className="min-h-screen">
        {/* Header Section */}
        <section className="container pt-8 pb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Explore quick videos, tutorials, and resources—from AI basics to more advanced content.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="container pb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Type Filter */}
            <div className="flex gap-2 flex-wrap">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedType === type
                      ? 'bg-white/10 text-white border border-white/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex gap-2">
              <span className="text-gray-400 text-sm self-center">Sort by:</span>
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedSort(option)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    sortBy === option
                      ? 'bg-white/10 text-white border border-white/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="container pb-16">
          {filteredContent.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">No content found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: gradients[index % gradients.length]
                  }}
                >
                  <Link href={`/bd/content/${content.slug}`}>
                    <div className="p-6 flex flex-col min-h-[320px]">
                      <div className="flex-1">
                        {/* Type and Trending Badges */}
                        <div className="flex gap-2 mb-4">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-semibold">
                            {content.type}
                          </span>
                          {content.trending && (
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-semibold flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Trending
                            </span>
                          )}
                        </div>

                        {/* Icon */}
                        <div className="mb-4">
                          {content.type === "Video" || content.type === "Tutorial" ? (
                            <Play className="w-8 h-8 text-white/60" />
                          ) : (
                            <BookOpen className="w-8 h-8 text-white/60" />
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          {content.title}
                        </h3>
                        <p className="text-white/80 text-sm mb-4">
                          {content.description.length > 100 ? content.description.substring(0, 100) + '...' : content.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-xs text-white/70 mb-3">
                          <span>{content.date}</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {content.views}
                          </span>
                        </div>
                        {content.duration && (
                          <div className="text-xs text-white/70 mb-3">
                            Duration: {content.duration}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-white/20">
          <div className="container mx-auto text-center text-gray-400 text-sm">
            <p>© 2025 DigitX LLC. All rights reserved.</p>
          </div>
        </footer>
    </div>
  );
}

