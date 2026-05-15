'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, ArrowRight, Clock, Shield, Truck, MapPin } from 'lucide-react';
import { COMPANY, LOCATION } from '@/lib/constants';
import { Button } from '@/components/ui';

const quickStats = [
  { icon: Clock, text: 'Collection within 60 mins' },
  { icon: Shield, text: 'Fully insured & tracked' },
  { icon: Truck, text: 'Dedicated direct delivery' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/A2A Vans.jpg"
          alt="A2A Couriers fleet of Mercedes Sprinter vans"
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-french-blue via-french-blue/70 to-fresh-sky/30" />
      </div>

      {/* Chevron background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20 L10 10 L10 14 L4 20 L10 26 L10 30 Z M15 20 L25 10 L25 14 L19 20 L25 26 L25 30 Z M30 20 L40 10 L40 14 L34 20 L40 26 L40 30 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-40 pb-20 sm:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-fresh-sky animate-ping opacity-20" />
                <div className="relative w-6 h-6 bg-fresh-sky rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-sm font-semibold">
                Serving {LOCATION.primary} &amp; {LOCATION.region}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Same-Day Couriers{' '}
              <span className="text-fresh-sky">in Blackburn</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl font-semibold mb-8 text-white/90"
            >
              — Nationwide Delivery —
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <a href="#contact">
                <Button size="lg" className="w-full group">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={COMPANY.phoneHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white text-french-blue border-white hover:bg-white/90"
                >
                  <Phone className="w-5 h-5" />
                  {COMPANY.phone}
                </Button>
              </a>
            </motion.div>

            {/* Key features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                { icon: Clock, text: 'Collections within the hour' },
                { icon: Truck, text: 'Dedicated direct service' },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-3 bg-fresh-sky/30 backdrop-blur-sm border-2 border-white/50 rounded-xl p-4 shadow-lg"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-fresh-sky rounded-lg flex items-center justify-center shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-bold text-white leading-tight">
                    {feature.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-white/90"
            >
              Your local same-day courier specialists covering Blackburn,
              Darwen, and all surrounding areas. Urgent, time-sensitive, and
              secure from collection to delivery.
            </motion.p>
          </motion.div>

          {/* Right — Fleet image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/A2A Vans.jpg"
                  alt="A2A Couriers fleet of branded Mercedes Sprinter vans"
                  width={900}
                  height={700}
                  className="object-cover w-full"
                  priority
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-fresh-sky text-white rounded-2xl px-4 py-3 font-bold shadow-xl text-center min-w-[140px]"
              >
                <div className="text-sm leading-tight">
                  Collections
                  <br />
                  within the hour
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom tagline bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 bg-french-blue/80 backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 shadow-2xl text-center"
        >
          <p className="text-3xl md:text-4xl font-bold text-white tracking-wider">
            EXPRESS <span className="text-fresh-sky">—</span> SECURE{' '}
            <span className="text-fresh-sky">—</span> DIRECT
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}