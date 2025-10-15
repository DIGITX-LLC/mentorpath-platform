"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, BookOpen, Users, Award, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DynamicButton from '../../component/about/DynamicButton';

export default function DashboardPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/assets/profile-avatar.svg",
    memberSince: "Sep 2025",
    stats: {
      eventsAttended: 12,
      contentViewed: 45,
      communities: 3,
      certificates: 2
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "ChatGPT for Business 101",
      date: "Oct 20, 2025",
      time: "6:00 PM GMT",
      slug: "chatgpt-for-business-101"
    },
    {
      id: 2,
      title: "AI for Educators",
      date: "Oct 25, 2025",
      time: "7:00 PM GMT",
      slug: "ai-for-educators"
    }
  ];

  const savedContent = [
    {
      id: 1,
      title: "MentorPath.ai Fundamentals",
      type: "Resource",
      slug: "mentorpath-fundamentals"
    },
    {
      id: 2,
      title: "Prompt Engineering Masterclass",
      type: "Tutorial",
      slug: "prompt-engineering-masterclass"
    }
  ];

  const myCommunities = [
    {
      id: 1,
      name: "AI for Business Professionals",
      members: 1247,
      slug: "ai-business-professionals"
    },
    {
      id: 2,
      name: "Bangladesh AI Community",
      members: 2341,
      slug: "bangladesh-ai-community"
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth >= 769 && window.innerWidth <= 1024);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth >= 769 && window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showBurgerMenu = isMobile || isTablet;

  return (
    <div
      className="bg-[#030205] text-white min-h-screen relative"
      style={{
        background: 'linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(240, 63%, 10%, 1) 95%, hsla(241, 61%, 26%, 1) 100%)'
      }}
    >
      {/* Navigation Header */}
      <div
        className={`fixed ${isSticky ? "" : "absolute"} left-1/2 transform -translate-x-1/2 px-2 sm:px-4 flex z-50 items-center justify-between w-[95%] sm:w-[95%] max-w-7xl transition-all duration-300`}
        style={{
          top: isSticky ? "8px" : isMobile ? "12px" : "1.5rem",
          transition: "top 0.3s ease-in-out",
        }}
      >
        <div className={`${(isSticky || isMobile || isTablet) ? "backdrop-blur-[10px] bg-white/5 border border-white/20 rounded-full" : ""} px-2 sm:px-4 py-2 flex items-center justify-between w-full max-w-7xl rounded-full transition-all duration-300`}>
          <Link href="/" className="flex-shrink-0 z-10">
            <Image
              src="/assets/MentorPathLogo.svg"
              alt="MentorPath.ai Logo"
              width={200}
              height={40}
              className="h-6 w-[120px] pl-2 xs:h-7 xs:w-[140px] sm:h-8 sm:w-[160px] md:h-10 md:w-[200px]"
            />
          </Link>

          {showBurgerMenu && (
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none p-2 hover:bg-white/20 rounded-full transition-all duration-200 relative z-20 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          )}

          {!showBurgerMenu && (
            <nav className={`${isSticky ? '' : 'bg-white/5 border border-white/20'} h-[40px] sm:h-[45px] flex items-center justify-center rounded-full transition-all duration-300`}>
              <ul className="flex items-center gap-1 xl:gap-2 text-gray-300 px-4">
                <li className="px-1 py-1">
                  <Link href="/bd">
                    <span className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10 text-sm block">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="px-1 py-1">
                  <Link href="/bd/events">
                    <span className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10 text-sm block">
                      Events
                    </span>
                  </Link>
                </li>
                <li className="px-1 py-1">
                  <Link href="/bd/content">
                    <span className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10 text-sm block">
                      Content
                    </span>
                  </Link>
                </li>
                <li className="px-1 py-1">
                  <Link href="/bd/communities">
                    <span className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10 text-sm block">
                      Communities
                    </span>
                  </Link>
                </li>
                <li className="px-1 py-1">
                  <Link href="/bd/help">
                    <span className="hover:text-white font-medium transition-all duration-300 cursor-pointer px-3 xl:px-4 py-2 rounded-full hover:bg-white/10 text-sm block">
                      Help
                    </span>
                  </Link>
                </li>
                <li className="px-1 py-1 ml-2">
                  <DynamicButton
                    label="Dashboard"
                    size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                  />
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="md:px-6 mx-auto">
        {/* Header Section */}
        <section className="container pt-32 pb-12">
          <div className="flex items-center gap-6 mb-8">
            <Image
              src={user.avatar}
              alt={user.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-4 border-[#656FE2]"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-gray-300">Member since {user.memberSince}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-[#656FE2]" />
              <h3 className="text-2xl font-bold mb-1">{user.stats.eventsAttended}</h3>
              <p className="text-sm text-gray-400">Events Attended</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-[#656FE2]" />
              <h3 className="text-2xl font-bold mb-1">{user.stats.contentViewed}</h3>
              <p className="text-sm text-gray-400">Content Viewed</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-[#656FE2]" />
              <h3 className="text-2xl font-bold mb-1">{user.stats.communities}</h3>
              <p className="text-sm text-gray-400">Communities</p>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-[#656FE2]" />
              <h3 className="text-2xl font-bold mb-1">{user.stats.certificates}</h3>
              <p className="text-sm text-gray-400">Certificates</p>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="container pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming Events */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#656FE2]" />
                Upcoming Events
              </h2>
              {upcomingEvents.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No upcoming events</p>
              ) : (
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/bd/events/${event.slug}`}
                      className="block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                    >
                      <h3 className="font-semibold mb-2">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/bd/events" className="block mt-4">
                <button className="w-full py-2 px-4 border border-[#656FE2] text-[#60A5FA] rounded-lg font-medium hover:bg-[#656FE2]/20 transition-all">
                  Browse All Events
                </button>
              </Link>
            </div>

            {/* Saved Content */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#656FE2]" />
                Saved Content
              </h2>
              {savedContent.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No saved content</p>
              ) : (
                <div className="space-y-4">
                  {savedContent.map((content) => (
                    <Link
                      key={content.id}
                      href={`/bd/content/${content.slug}`}
                      className="block p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                    >
                      <h3 className="font-semibold mb-1">{content.title}</h3>
                      <p className="text-sm text-gray-400">{content.type}</p>
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/bd/content" className="block mt-4">
                <button className="w-full py-2 px-4 border border-[#656FE2] text-[#60A5FA] rounded-lg font-medium hover:bg-[#656FE2]/20 transition-all">
                  Explore Content
                </button>
              </Link>
            </div>

            {/* My Communities */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-[#656FE2]" />
                My Communities
              </h2>
              {myCommunities.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Not a member of any communities</p>
              ) : (
                <div className="space-y-4">
                  {myCommunities.map((community) => (
                    <div
                      key={community.id}
                      className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                    >
                      <h3 className="font-semibold mb-2">{community.name}</h3>
                      <p className="text-sm text-gray-400">{community.members.toLocaleString()} members</p>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/bd/communities" className="block mt-4">
                <button className="w-full py-2 px-4 border border-[#656FE2] text-[#60A5FA] rounded-lg font-medium hover:bg-[#656FE2]/20 transition-all">
                  Discover Communities
                </button>
              </Link>
            </div>

            {/* Learning Progress */}
            <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#656FE2]" />
                Learning Progress
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">AI Fundamentals</span>
                    <span className="text-sm text-gray-400">75%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[#656FE2] h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Prompt Engineering</span>
                    <span className="text-sm text-gray-400">40%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[#656FE2] h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Business AI Applications</span>
                    <span className="text-sm text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-[#656FE2] h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-white/20">
          <div className="container mx-auto text-center text-gray-400 text-sm">
            <p>© 2025 OneBr<span style={{ color: '#3FBFF4' }}>ai</span>n Academy. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

