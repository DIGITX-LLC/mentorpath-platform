"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Play, BookOpen, ArrowLeft, Eye, Clock, Share2, Bookmark, ThumbsUp, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import DynamicButton from '../../../component/about/DynamicButton';

export default function ContentDetailPage() {
  const params = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(245);

  // Mock content data - in real app, fetch based on params.slug
  const content = {
    id: 1,
    title: "MentorPath.ai Fundamentals",
    description: "A fundamental overview of what MentorPath.ai is and how you can use it in any role.",
    type: "Resource",
    views: "91K",
    date: "Sep 30th, 2025",
    author: {
      name: "MentorPath.ai Team",
      avatar: "/assets/profile-avatar.svg",
      title: "Content Team"
    },
    thumbnail: "/assets/explore_banner.png",
    slug: "mentorpath-fundamentals",
    duration: "15 min read",
    content: `
      # Introduction to MentorPath.ai

      MentorPath.ai is Bangladesh's first multi-AI platform that brings together the world's leading AI models in one seamless interface. Whether you're a student, professional, educator, or creator, MentorPath.ai empowers you to harness the full potential of artificial intelligence.

      ## What Makes MentorPath.ai Unique?

      ### Multi-Model Access
      Instead of subscribing to multiple AI platforms separately, MentorPath.ai gives you access to:
      - ChatGPT (OpenAI)
      - Claude (Anthropic)
      - Gemini (Google)
      - Grok (xAI)
      - DeepSeek
      - Llama (Meta)
      - And many more...

      ### Seamless Integration
      Switch between different AI models with a single click, comparing responses and choosing the best output for your needs.

      ### Creative Tools
      Beyond text generation, MentorPath.ai offers:
      - Image generation with multiple models
      - Video creation capabilities
      - Audio and voice synthesis
      - Text humanization
      - Multi-language support

      ## Getting Started with MentorPath.ai

      ### Step 1: Create Your Account
      Visit [mentorpath.ai](https://mentorpath.ai) and sign up for a free account. You'll get immediate access to our basic features.

      ### Step 2: Explore the Models
      Navigate through our model selector to find the perfect AI for your task. Each model has unique strengths:
      - Use ChatGPT for general tasks and coding
      - Try Claude for detailed analysis and writing
      - Choose Gemini for research and data processing
      - Select Grok for real-time information

      ### Step 3: Start Creating
      Begin with simple prompts and gradually explore advanced features like:
      - Custom GPTs
      - Image generation
      - Document analysis
      - Code generation

      ## Use Cases Across Industries

      ### For Students
      - Research assistance
      - Essay writing and editing
      - Study materials creation
      - Problem-solving help

      ### For Professionals
      - Email drafting
      - Report generation
      - Data analysis
      - Presentation creation

      ### For Educators
      - Lesson planning
      - Assignment creation
      - Student feedback generation
      - Educational content development

      ### For Creators
      - Content ideation
      - Script writing
      - Image generation
      - Social media content

      ## Best Practices

      1. **Be Specific**: Clear, detailed prompts yield better results
      2. **Iterate**: Refine your prompts based on the outputs
      3. **Experiment**: Try different models for the same task
      4. **Verify**: Always fact-check important information
      5. **Respect Ethics**: Use AI responsibly and ethically

      ## Advanced Features

      ### Custom GPTs
      Create specialized AI assistants tailored to your specific needs.

      ### Document Processing
      Upload and analyze PDFs, documents, and images.

      ### Multi-Modal Interactions
      Combine text, images, and data in your conversations.

      ## Pricing and Plans

      MentorPath.ai offers flexible pricing to suit every need:
      - **Free Plan**: Basic access to all models
      - **Pro Plan**: Unlimited access with priority support
      - **Creator Plan**: Advanced features for content creators

      ## Community and Support

      Join our growing community:
      - MentorPath.ai Academy for learning resources
      - Community forums for discussions
      - Regular webinars and workshops
      - Dedicated support team

      ## Conclusion

      MentorPath.ai democratizes access to AI, making it easier than ever to leverage cutting-edge technology for your personal and professional growth. Start your AI journey today and discover what's possible when you have the world's best AI models at your fingertips.

      Ready to get started? [Join MentorPath.ai Now](https://mentorpath.ai/register)
    `,
    relatedContent: [
      {
        id: 2,
        title: "Advanced Prompting Techniques",
        type: "Tutorial",
        slug: "advanced-prompting-techniques"
      },
      {
        id: 3,
        title: "Choosing the Right AI Model",
        type: "Guide",
        slug: "choosing-right-ai-model"
      },
      {
        id: 4,
        title: "MentorPath.ai Pro Features",
        type: "Video",
        slug: "mentorpath-pro-features"
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

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
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
                    <DynamicButton
                      label="Content"
                      size="w-auto px-3 xl:px-4 h-[35px] rounded-full font-normal block text-sm"
                    />
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
                  <Link href="https://mentorpath.ai/login">
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
        {/* Content Header */}
        <section className="container pt-32 pb-12">
          <Link href="/bd/content" className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#3FBFF4] mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Content
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#656FE2]/20 text-[#60A5FA] rounded-full text-sm font-medium">
                  {content.type}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{content.title}</h1>
              
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{content.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{content.duration}</span>
                </div>
                <span>{content.date}</span>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <Image
                    src={content.author.avatar}
                    alt={content.author.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-white/20"
                  />
                  <div>
                    <h3 className="font-semibold">{content.author.name}</h3>
                    <p className="text-sm text-gray-400">{content.author.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleLike}
                    className={`p-2 rounded-full border transition-all ${
                      isLiked 
                        ? 'border-[#656FE2] bg-[#656FE2]/20 text-[#60A5FA]'
                        : 'border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                  <span className="text-sm">{likes}</span>
                  
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2 rounded-full border transition-all ${
                      isBookmarked 
                        ? 'border-[#656FE2] bg-[#656FE2]/20 text-[#60A5FA]'
                        : 'border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>

                  <button className="p-2 rounded-full border border-white/20 hover:bg-white/5 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Body */}
              <div className="prose prose-invert max-w-none">
                <div className="text-gray-300 leading-relaxed space-y-6 whitespace-pre-line">
                  {content.content}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex gap-4">
                <Link href="https://mentorpath.ai/register" className="flex-1">
                  <button className="w-full py-3 px-6 bg-transparent rounded-lg font-medium hover:bg-white/10 transition-all border border-white/30">
                    Get Started with MentorPath.ai
                  </button>
                </Link>
                <button className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Related Content */}
                <div className="bg-white/5 border border-white/20 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Related Content</h3>
                  <div className="space-y-3">
                    {content.relatedContent.map((related) => (
                      <Link
                        key={related.id}
                        href={`/bd/content/${related.slug}`}
                        className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#656FE2]/20 flex items-center justify-center">
                            {related.type === 'Video' || related.type === 'Tutorial' ? (
                              <Play className="w-5 h-5 text-[#60A5FA]" />
                            ) : (
                              <BookOpen className="w-5 h-5 text-[#60A5FA]" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{related.title}</h4>
                            <p className="text-xs text-gray-400">{related.type}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-white/5 border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">In This Resource</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                        Introduction to MentorPath.ai
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                        What Makes MentorPath.ai Unique
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                        Getting Started
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                        Use Cases Across Industries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                        Best Practices
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-300 hover:text-[#60A5FA] transition-colors">
                        Advanced Features
                      </a>
                    </li>
                  </ul>
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

