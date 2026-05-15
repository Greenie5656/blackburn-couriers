'use client';

import { motion } from 'framer-motion';
import {
  Timer,
  Route,
  ShieldCheck,
  Lock,
  Clock,
  MapPinCheck,
} from 'lucide-react';
import { TRUST_POINTS } from '@/lib/constants';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Timer,
  Route,
  ShieldCheck,
  Lock,
  Clock,
  MapPinCheck,
};

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-french-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {TRUST_POINTS.map((point, index) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={point.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 bg-fresh-sky/20 rounded-xl flex items-center justify-center">
                  {Icon && <Icon className="w-6 h-6 text-fresh-sky" />}
                </div>
                <span className="text-white text-sm font-medium leading-tight">
                  {point.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}