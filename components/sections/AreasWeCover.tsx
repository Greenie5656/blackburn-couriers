'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Navigation } from 'lucide-react';
import { LOCATION, COMPANY } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AreasWeCover() {
  return (
    
    <section id="areas" className="relative py-20 sm:py-28 overflow-hidden">
        {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-fresh-sky z-10" />

        
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/boxes.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-french-blue/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-fresh-sky font-semibold text-sm uppercase tracking-widest mb-3 block">
            Local Coverage
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Areas We Cover in Blackburn &amp; Darwen
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Based just minutes away in Accrington, we provide fast same-day
            collections and deliveries across every part of Blackburn, Darwen,
            and the surrounding towns and villages.
          </p>
        </motion.div>

        {/* Town cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {LOCATION.towns.map((town) => (
            <motion.div
              key={town.name}
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-fresh-sky/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-fresh-sky" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {town.name}
                  </h3>

                  <span className="text-sm text-white/60">
                    Postcodes: {town.postcodes.join(', ')}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {town.areas.map((area, index) => (
                  <span
                    key={`${town.name}-${index}`}
                    className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-lg font-medium border border-white/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nearby areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-fresh-sky/10 rounded-xl flex items-center justify-center">
              <Navigation className="w-6 h-6 text-fresh-sky" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-french-blue">
                We Also Cover Nearby Towns
              </h3>

              <p className="text-gray-500 text-sm">
                Regular collections and deliveries across Lancashire and
                nationwide
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {LOCATION.nearbyAreas.map((area, index) => (
              <span
                key={`nearby-${index}`}
                className="bg-french-blue/5 text-french-blue border border-french-blue/10 text-sm px-4 py-2 rounded-lg font-medium hover:bg-fresh-sky hover:text-white hover:border-fresh-sky transition-colors"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Don&apos;t see your area listed? We cover the whole of the UK.
            Call{' '}
            <a
              href={COMPANY.phoneHref}
              className="text-fresh-sky hover:underline font-semibold"
            >
              {COMPANY.phone}
            </a>{' '}
            for a quick quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}