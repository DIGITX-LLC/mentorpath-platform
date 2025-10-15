"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Search, Filter, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Upcoming");

  const categories = ["All", "Work", "Education", "Nonprofits", "Government"];
  const filters = ["Upcoming", "Past"];

  // Gradient colors for cards (matching home page style)
  const gradients = [
    'linear-gradient(135deg, #064E5C 0%, #1E3A8A 100%)', // Dark Teal to Blue
    'linear-gradient(135deg, #2D1B69 0%, #4A1E5C 50%, #6B1F47 100%)', // Purple to Pink
    'linear-gradient(135deg, #4C1D95 0%, #7F1D53 100%)', // Purple to Pink
    'linear-gradient(135deg, #1E3A8A 0%, #4C1D95 100%)', // Blue to Purple
    'linear-gradient(135deg, #064E5C 0%, #4C1D95 100%)', // Teal to Purple
    'linear-gradient(135deg, #7F1D53 0%, #92400E 100%)', // Pink to Orange
  ];

  const allEvents = [
    {
      id: 1,
      title: "ChatGPT for Business 101",
      date: "Oct 20, 2025",
      time: "6:00 PM - 7:00 PM GMT",
      hosts: [
        { name: "John Doe", avatar: "/assets/profile-avatar.svg" },
        { name: "Jane Smith", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Work",
      status: "Upcoming",
      slug: "chatgpt-for-business-101",
      description: "Learn the fundamentals of using ChatGPT to streamline business operations, improve productivity, and enhance customer service."
    },
    {
      id: 2,
      title: "AI for Educators: Transforming Classrooms",
      date: "Oct 25, 2025",
      time: "7:00 PM - 8:00 PM GMT",
      hosts: [
        { name: "Sarah Johnson", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Education",
      status: "Upcoming",
      slug: "ai-for-educators",
      description: "Discover how AI tools can transform your classroom, personalize learning, and save time on administrative tasks."
    },
    {
      id: 3,
      title: "Build Multi-Agent Systems with MentorPath.ai",
      date: "Nov 1, 2025",
      time: "6:30 PM - 7:30 PM GMT",
      hosts: [
        { name: "Mike Chen", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Work",
      status: "Upcoming",
      slug: "build-multi-agent-systems",
      description: "Advanced workshop on creating multi-agent AI systems for complex problem-solving and automation."
    },
    {
      id: 4,
      title: "AI for Government Officials 101",
      date: "Oct 14, 2025",
      time: "6:00 PM - 7:00 PM GMT",
      hosts: [
        { name: "Emma Wilson", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Government",
      status: "Upcoming",
      slug: "ai-for-government-101",
      description: "Introduction to AI tools for government officials to improve public services and administrative efficiency."
    },
    {
      id: 5,
      title: "Prompting with Purpose: Best Practices",
      date: "Oct 3, 2025",
      time: "7:00 PM - 8:00 PM GMT",
      hosts: [
        { name: "David Lee", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Work",
      status: "Past",
      slug: "prompting-best-practices",
      description: "Master the art of prompt engineering to get better results from AI models across various use cases."
    },
    {
      id: 6,
      title: "AI for Nonprofits: Maximizing Impact",
      date: "Sep 28, 2025",
      time: "6:00 PM - 7:00 PM GMT",
      hosts: [
        { name: "Lisa Martinez", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Nonprofits",
      status: "Past",
      slug: "ai-for-nonprofits",
      description: "Learn how nonprofit organizations can leverage AI to maximize their impact and streamline operations."
    },
    {
      id: 7,
      title: "Getting Started with Image Generation",
      date: "Nov 5, 2025",
      time: "8:00 PM - 9:00 PM GMT",
      hosts: [
        { name: "Alex Turner", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Work",
      status: "Upcoming",
      slug: "image-generation-basics",
      description: "Introduction to AI image generation tools and techniques for creating stunning visuals."
    },
    {
      id: 8,
      title: "AI Ethics in Education",
      date: "Nov 10, 2025",
      time: "7:00 PM - 8:00 PM GMT",
      hosts: [
        { name: "Dr. Rachel Green", avatar: "/assets/profile-avatar.svg" }
      ],
      category: "Education",
      status: "Upcoming",
      slug: "ai-ethics-education",
      description: "Explore the ethical considerations of using AI in educational settings and how to address them."
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesFilter = event.status === selectedFilter;
    return matchesSearch && matchesCategory && matchesFilter;
  });


  return (
    <div className="min-h-screen">
        {/* Header Section */}
        <section className="relative pt-8 pb-16 px-6" style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(168, 199, 250, 0.05) 100%)'
        }}>
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-10 h-10 text-[#60A5FA]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Events</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Engage, Connect, and Thrive
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            {/* Status Filter Tabs */}
            <div className="flex gap-2">
              {["All", "Upcoming", "New", "Past"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter === "All" ? "Upcoming" : filter)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    (filter === "All" && selectedFilter === "Upcoming") || selectedFilter === filter
                      ? 'bg-white/10 text-white border border-white/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm font-medium focus:outline-none focus:border-white/30 transition-all cursor-pointer appearance-none pr-10"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-[#0a0a0a]">
                    {category}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="container pb-16">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
                  style={{
                    background: gradients[index % gradients.length]
                  }}
                >
                  <Link href={`/bd/events/${event.slug}`}>
                    <div className="p-6 h-full flex flex-col justify-between min-h-[320px] relative">
                      {/* Icon */}
                      <div className="absolute top-6 left-6">
                        <Sparkles className="w-8 h-8 text-white/60" />
                      </div>
                      
                      {/* Status Badge */}
                      {event.status === 'Upcoming' && (
                        <div className="absolute top-6 right-6">
                          <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-md text-xs font-semibold backdrop-blur-sm">
                            Live in 3 days
                          </span>
                        </div>
                      )}

                      <div className="mt-12">
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {event.description.length > 70 ? event.description.substring(0, 70) + '...' : event.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="text-xs text-white/70 mb-3">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-3 h-3" />
                            <span>{event.time}, {event.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {event.hosts.map((host, idx) => (
                              <Image
                                key={idx}
                                src={host.avatar}
                                alt={host.name}
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full border-2 border-white/30"
                              />
                            ))}
                          </div>
                          {event.status === 'Past' && (
                            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-md text-xs font-semibold backdrop-blur-sm">
                              Deepdive
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Load More Button */}
          {filteredEvents.length > 0 && (
            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all bg-transparent">
                Load more
              </button>
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

