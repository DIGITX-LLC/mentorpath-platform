"use client";
import React, { useState, createContext, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Calendar, 
  BookOpen, 
  Search,
  Menu,
  X,
  Languages
} from "lucide-react";

// Language Context
const LanguageContext = createContext<{
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}>({
  language: 'en',
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const isActive = (path: string) => {
    if (path === '/bd' && pathname === '/bd') return true;
    if (path !== '/bd' && pathname.startsWith(path)) return true;
    return false;
  };

  // Translations
  const translations = {
    en: {
      home: 'Home',
      events: 'Events',
      content: 'Content',
      search: 'Search',
      signIn: 'SIGN IN',
    },
    bn: {
      home: 'হোম',
      events: 'ইভেন্ট',
      content: 'কন্টেন্ট',
      search: 'খুঁজুন',
      signIn: 'সাইন ইন',
    }
  };

  const t = translations[language];

  const navItems = [
    { name: t.home, href: '/bd', icon: Home },
    { name: t.events, href: '/bd/events', icon: Calendar },
    { name: t.content, href: '/bd/content', icon: BookOpen },
  ];

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
    <div className={`min-h-screen bg-[#030205] ${language === 'bn' ? 'font-[var(--font-noto-sans-bengali)]' : ''}`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-lg"
      >
        {isSidebarOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-[#0a0a0a] border-r border-white/10
          transition-transform duration-300 z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          w-64 flex flex-col
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10 flex-shrink-0">
          <Link href="/bd" className="flex items-center gap-2">
            <Image
              src="/assets/MentorPathLogo.svg"
              alt="MentorPath.ai Academy"
              width={160}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${isActive(item.href)
                      ? 'bg-white/10 text-white border border-white/30'
                      : 'text-gray-300 hover:bg-white/10'
                    }
                  `}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="fixed top-0 left-0 lg:left-64 right-0 z-30 bg-[#0a0a0a]/95 border-b border-white/10 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left Side - Mobile Menu */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 ml-auto">
              {/* Search - Compact */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder={t.search}
                  className="w-48 md:w-64 pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-gray-400 text-sm"
                />
              </div>
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                >
                  <Languages size={20} />
                  <span className="text-sm hidden sm:inline">{language === 'en' ? 'English' : 'বাংলা'}</span>
                </button>
                
                {/* Language Dropdown */}
                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#0a0a0a] border border-white/20 rounded-lg shadow-lg overflow-hidden z-50">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                        language === 'en' ? 'bg-white/10 text-white' : 'text-gray-300'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('bn');
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-white/10 transition-colors font-[var(--font-noto-sans-bengali)] ${
                        language === 'bn' ? 'bg-white/10 text-white' : 'text-gray-300'
                      }`}
                    >
                      বাংলা
                    </button>
                  </div>
                )}
              </div>

              {/* Sign In */}
              <Link
                href="https://ai.onebrain.app/login"
                className="px-4 py-2 bg-transparent text-white rounded-lg font-medium hover:bg-white/10 transition-all border border-white/30"
              >
                {t.signIn}
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main 
          className="flex-1 pt-[73px]"
          style={{
            background: 'linear-gradient(0deg, hsla(0, 0%, 0%, 1) 0%, hsla(240, 63%, 10%, 1) 95%, hsla(241, 61%, 26%, 1) 100%)'
          }}
        >
          {children}
        </main>
      </div>
    </div>
    </LanguageContext.Provider>
  );
}

