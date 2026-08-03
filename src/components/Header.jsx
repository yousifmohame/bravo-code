"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    // Scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
          scrolled ? 'dark:bg-slate-900/90 bg-white/10 backdrop-blur shadow-lg' : 'bg-transparent'
        }`}
        dir="rtl"
      >
        <nav className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-extrabold tracking-tighter dark:text-white text-gray-900"
          >
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Bravocode
            </span>
            <span className="text-cyan-600 dark:text-cyan-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 items-center text-lg">
              <li>
                <Link 
                  href="/" 
                  className="dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  عنا
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4 mr-4">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full dark:bg-slate-800 bg-gray-100 dark:text-cyan-400 text-cyan-600 shadow-md"
                aria-label="تبديل الوضع الليلي"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-500 dark:to-blue-600 hover:from-cyan-700 hover:to-blue-800 dark:hover:from-cyan-600 dark:hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full dark:bg-slate-800 bg-gray-100 dark:text-cyan-400 text-cyan-600"
              aria-label="تبديل الوضع الليلي"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="text-2xl dark:text-white text-gray-800"
              aria-label="فتح القائمة"
            >
              <FaBars />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden dark:bg-slate-900 bg-white shadow-xl"
          >
            <ul className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <li>
                <Link 
                  href="/" 
                  className="block dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="block dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  أعمالنا
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="block dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block dark:text-gray-300 text-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                  onClick={toggleMobileMenu}
                >
                  عنا
                </Link>
              </li>
              <li className="mt-4">
                <Link 
                  href="/contact" 
                  className="block text-center bg-gradient-to-r from-cyan-600 to-blue-700 dark:from-cyan-500 dark:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  onClick={toggleMobileMenu}
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}