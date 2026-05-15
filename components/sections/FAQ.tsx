'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS, COMPANY } from '@/lib/constants';

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-french-blue pr-8 group-hover:text-fresh-sky transition-colors">
          {question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-fresh-sky" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-1 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
        
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-fresh-sky font-semibold text-sm uppercase tracking-widest mb-3 block">
            Common Questions
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-french-blue mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-gray-600">
            Everything you need to know about our courier services in Blackburn
            and the surrounding areas.
          </p>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="bg-off-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
        >
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 mt-8"
        >
          Still have questions? Call us on{' '}
          <a
            href={COMPANY.phoneHref}
            className="text-fresh-sky font-semibold hover:underline"
          >
            {COMPANY.phone}
          </a>{' '}
          or{' '}
          <a
            href="#contact"
            className="text-fresh-sky font-semibold hover:underline"
          >
            send us an enquiry
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}