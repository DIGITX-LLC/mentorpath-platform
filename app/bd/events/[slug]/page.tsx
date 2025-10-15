"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, Clock, Users, MapPin, ArrowLeft, Share2, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import DynamicButton from '../../../component/about/DynamicButton';

export default function EventDetailPage() {
  const params = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // Mock event data - in real app, fetch based on params.slug
  const event = {
    id: 1,
    title: "ChatGPT for Business 101",
    date: "Oct 20, 2025",
    time: "6:00 PM - 7:00 PM GMT",
    timezone: "GMT",
    hosts: [
      { 
        name: "John Doe", 
        avatar: "/assets/profile-avatar.svg",
        title: "AI Solutions Architect",
        bio: "John has 10+ years of experience in AI and business automation."
      },
      { 
        name: "Jane Smith", 
        avatar: "/assets/profile-avatar.svg",
        title: "Product Manager",
        bio: "Jane leads product development for MentorPath.ai's enterprise solutions."
      }
    ],
    category: "Work",
    status: "Upcoming",
    slug: "chatgpt-for-business-101",
    description: "Learn the fundamentals of using ChatGPT to streamline business operations, improve productivity, and enhance customer service. This comprehensive session will cover practical use cases, best practices, and hands-on demonstrations.",
    longDescription: `
      In this interactive workshop, you'll discover how to leverage ChatGPT and other AI tools to transform your business operations. 
      
      We'll cover:
      - Understanding ChatGPT's capabilities and limitations
      - Practical business use cases across departments
      - Writing effective prompts for business scenarios
      - Integrating AI into existing workflows
      - Security and privacy considerations
      - Real-world case studies and success stories
      
      Whether you're new to AI or looking to expand your knowledge, this session will provide actionable insights you can implement immediately.
    `,
    location: "Virtual (Zoom)",
    capacity: 500,
    registered: 324,
    agenda: [
      { time: "6:00 PM", item: "Welcome & Introduction" },
      { time: "6:10 PM", item: "ChatGPT Fundamentals" },
      { time: "6:30 PM", item: "Business Use Cases & Demonstrations" },
      { time: "6:50 PM", item: "Q&A Session" },
      { time: "7:00 PM", item: "Closing Remarks" }
    ],
    relatedEvents: [
      {
        id: 2,
        title: "Advanced ChatGPT Techniques",
        date: "Oct 27, 2025",
        slug: "advanced-chatgpt-techniques"
      },
      {
        id: 3,
        title: "AI Integration Strategies",
        date: "Nov 3, 2025",
        slug: "ai-integration-strategies"
      }
    ]
  };

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

  const handleRegister = () => {
    setShowRegistrationForm(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setShowRegistrationForm(false);
  };

  const showBurgerMenu = isMobile || isTablet;

  return (
    <div
      className="bg-[#030205] text-white min-h-screen relative"
      style={{
        background: 'linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(240, 63%, 10%, 1) 95%, hsla(241, 61%, 26%, 1) 100%)'
      }}
    >
      {/* Navigation Header - Same as Events Page */}
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
                    <DynamicButton
                      label="Events"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
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
                  <Link href="https://ai.onebrain.app/login">
                    <DynamicButton
                      label="Sign In"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>

      <div className="md:px-6 mx-auto">
        {/* Event Header */}
        <section className="container pt-32 pb-12">
          <Link href="/bd/events" className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#3FBFF4] mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#656FE2]/20 text-[#60A5FA] rounded-full text-sm font-medium">
                  {event.category}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  {event.status}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{event.title}</h1>
              <p className="text-lg text-gray-300 mb-8">{event.description}</p>

              {/* Event Details */}
              <div className="bg-white/5 border border-white/20 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-300">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-semibold">Time</p>
                      <p className="text-gray-300">{event.time} ({event.timezone})</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-300">{event.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-semibold">Capacity</p>
                      <p className="text-gray-300">{event.registered} / {event.capacity} registered</p>
                      <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                        <div 
                          className="bg-[#656FE2] h-2 rounded-full"
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                  {event.longDescription}
                </div>
              </div>

              {/* Agenda */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Agenda</h2>
                <div className="bg-white/5 border border-white/20 rounded-2xl overflow-hidden">
                  {event.agenda.map((item, index) => (
                    <div key={index} className={`p-4 flex items-start gap-4 ${index !== event.agenda.length - 1 ? 'border-b border-white/20' : ''}`}>
                      <span className="font-semibold text-[#60A5FA] min-w-[80px]">{item.time}</span>
                      <span className="text-gray-300">{item.item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hosts */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Hosts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.hosts.map((host, index) => (
                    <div key={index} className="bg-white/5 border border-white/20 rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Image
                          src={host.avatar}
                          alt={host.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-full border-2 border-white/20"
                        />
                        <div>
                          <h3 className="font-bold text-lg">{host.name}</h3>
                          <p className="text-sm text-gray-400">{host.title}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">{host.bio}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Registration Card */}
                <div className="bg-white/5 border border-white/20 rounded-2xl p-6 mb-6">
                  {isRegistered ? (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">You're Registered!</h3>
                      <p className="text-gray-300 text-sm mb-4">We'll send you a reminder before the event starts.</p>
                      <button className="w-full py-3 px-4 border border-[#656FE2] text-[#60A5FA] rounded-lg font-medium hover:bg-[#656FE2]/20 transition-all mb-2">
                        Add to Calendar
                      </button>
                      <button className="w-full py-3 px-4 bg-white/5 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-all">
                        Cancel Registration
                      </button>
                    </div>
                  ) : showRegistrationForm ? (
                    <form onSubmit={handleSubmitRegistration}>
                      <h3 className="text-xl font-bold mb-4">Register for Event</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name</label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#656FE2]"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#656FE2]"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Organization (Optional)</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#656FE2]"
                            placeholder="Your company"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-3 px-4 bg-transparent rounded-lg font-medium hover:bg-white/10 transition-all border border-white/30"
                        >
                          Complete Registration
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowRegistrationForm(false)}
                          className="w-full py-2 px-4 text-gray-400 hover:text-white transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold mb-4">Join This Event</h3>
                      <p className="text-gray-300 text-sm mb-6">Register now to secure your spot</p>
                      <button
                        onClick={handleRegister}
                        className="w-full py-3 px-4 bg-transparent rounded-lg font-medium hover:bg-white/10 transition-all mb-4 border border-white/30"
                      >
                        Register Now
                      </button>
                      <button className="w-full py-2 px-4 flex items-center justify-center gap-2 border border-white/20 text-gray-300 rounded-lg font-medium hover:bg-white/5 transition-all">
                        <Share2 className="w-4 h-4" />
                        Share Event
                      </button>
                    </div>
                  )}
                </div>

                {/* Related Events */}
                {event.relatedEvents.length > 0 && (
                  <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-4">Related Events</h3>
                    <div className="space-y-3">
                      {event.relatedEvents.map((relatedEvent) => (
                        <Link
                          key={relatedEvent.id}
                          href={`/bd/events/${relatedEvent.slug}`}
                          className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                        >
                          <h4 className="font-semibold text-sm mb-1">{relatedEvent.title}</h4>
                          <p className="text-xs text-gray-400">{relatedEvent.date}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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

