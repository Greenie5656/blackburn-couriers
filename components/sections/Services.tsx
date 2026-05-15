'use client';

import { motion } from 'framer-motion';
import { Zap, Truck, MapPin, Clock } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Truck,
  MapPin,
  Clock,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-fresh-sky font-semibold text-sm uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-french-blue mb-4">
            Courier Services in Blackburn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From urgent same-day collections to nationwide delivery, we provide
            a fast, reliable, and fully dedicated courier service across
            Blackburn, Darwen, and the whole of Lancashire.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-fresh-sky/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-fresh-sky/10 rounded-xl flex items-center justify-center mb-5">
                  {Icon && <Icon className="w-7 h-7 text-fresh-sky" />}
                </div>
                <h3 className="text-lg font-bold text-french-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}