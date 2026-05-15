'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { Button } from '@/components/ui';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — contact info */}
      <div className="bg-french-blue text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <a
            href={COMPANY.emailHref}
            className="hidden sm:flex items-center gap-2 hover:text-fresh-sky transition-colors"
          >
            <Mail size={14} />
            {COMPANY.email}
          </a>

          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 hover:text-fresh-sky transition-colors font-semibold"
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'shadow-md py-3' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href={COMPANY.mainSiteUrl} className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/Logo_Header.png"
                alt="A2A Couriers"
                width={180}
                height={48}
                priority
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-brand-black hover:text-fresh-sky transition-colors font-medium"
            >
              Services
            </a>

            <a
              href="#areas"
              className="text-brand-black hover:text-fresh-sky transition-colors font-medium"
            >
              Areas We Cover
            </a>

            <a
              href="#faq"
              className="text-brand-black hover:text-fresh-sky transition-colors font-medium"
            >
              FAQ
            </a>

            <a href={COMPANY.phoneHref}>
              <Button size="sm">
                <Phone size={16} />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-french-blue p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-french-blue">
                    Menu
                  </span>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-french-blue" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4 mb-8">
                  {['Services', 'Areas We Cover', 'FAQ'].map((label, i) => {
                    const href = `#${['services', 'areas', 'faq'][i]}`;

                    return (
                      <motion.a
                        key={href}
                        href={href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="block px-4 py-3 rounded-lg font-semibold text-brand-black hover:bg-gray-100 transition-colors"
                      >
                        {label}
                      </motion.a>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <a href={COMPANY.phoneHref} className="block">
                    <Button className="w-full">
                      <Phone size={16} />
                      Call {COMPANY.phone}
                    </Button>
                  </a>

                  <a href={COMPANY.emailHref} className="block">
                    <Button variant="outline" className="w-full">
                      <Mail size={16} />
                      Email Us
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}