'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

import { COMPANY, LOCATION } from '@/lib/constants';
import { Button } from '@/components/ui';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  collection: string;
  delivery: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  collection: '',
  delivery: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xbdkbdeq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `Blackburn Courier Enquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormData);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
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

      {/* Chevron pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 20 L10 10 L10 14 L4 20 L10 26 L10 30 Z M15 20 L25 10 L25 14 L19 20 L25 26 L25 30 Z M30 20 L40 10 L40 14 L34 20 L40 26 L40 30 Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Request a Quote
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Need a same-day collection from {LOCATION.primary}? Give us a call
            for an instant quote or fill in the form and we&apos;ll get back to
            you straight away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Phone card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">
                Fastest Way to Book
              </h3>

              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-fresh-sky rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>

                <div>
                  <p className="text-2xl font-bold text-white group-hover:text-fresh-sky transition-colors">
                    {COMPANY.phone}
                  </p>

                  <p className="text-white/60 text-sm">
                    Available 24/7
                  </p>
                </div>
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-fresh-sky/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-fresh-sky" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Email
                  </p>

                  <a
                    href={COMPANY.emailHref}
                    className="text-white/60 hover:text-fresh-sky transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-fresh-sky/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-fresh-sky" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Based at
                  </p>

                  <p className="text-white/60">
                    {COMPANY.address.full}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick reassurance */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="font-semibold text-white">
                  Quick response guaranteed.
                </span>{' '}
                Most enquiries are answered within 15 minutes during business
                hours. For urgent same-day collections, calling is always the
                fastest option.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-french-blue mb-3">
                  Enquiry Sent
                </h3>

                <p className="text-gray-600 mb-6">
                  Thanks for getting in touch. We&apos;ll get back to you as
                  soon as possible. For urgent collections, give us a call
                  on{' '}
                  <a
                    href={COMPANY.phoneHref}
                    className="text-fresh-sky font-semibold hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                  .
                </p>

                <Button onClick={() => setStatus('idle')}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm">
                {status === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />

                    <p className="text-sm">
                      Something went wrong. Please try again or call us on{' '}
                      <a
                        href={COMPANY.phoneHref}
                        className="font-semibold underline"
                      >
                        {COMPANY.phone}
                      </a>
                      .
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-french-blue mb-1.5"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fresh-sky focus:ring-2 focus:ring-fresh-sky/20 outline-none transition-all text-brand-black"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email & Phone row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-french-blue mb-1.5"
                      >
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fresh-sky focus:ring-2 focus:ring-fresh-sky/20 outline-none transition-all text-brand-black"
                        placeholder="john@company.co.uk"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-french-blue mb-1.5"
                      >
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fresh-sky focus:ring-2 focus:ring-fresh-sky/20 outline-none transition-all text-brand-black"
                        placeholder="07700 900000"
                      />
                    </div>
                  </div>

                  {/* Collection & Delivery row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="collection"
                        className="block text-sm font-semibold text-french-blue mb-1.5"
                      >
                        Collection Postcode / Area
                      </label>

                      <input
                        type="text"
                        id="collection"
                        name="collection"
                        value={formData.collection}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fresh-sky focus:ring-2 focus:ring-fresh-sky/20 outline-none transition-all text-brand-black"
                        placeholder="e.g. BB1 5AH or Blackburn"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="delivery"
                        className="block text-sm font-semibold text-french-blue mb-1.5"
                      >
                        Delivery Postcode / Area
                      </label>

                      <input
                        type="text"
                        id="delivery"
                        name="delivery"
                        value={formData.delivery}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fresh-sky focus:ring-2 focus:ring-fresh-sky/20 outline-none transition-all text-brand-black"
                        placeholder="e.g. M1 1AA or Manchester"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-french-blue mb-1.5"
                    >
                      Additional Details
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fresh-sky focus:ring-2 focus:ring-fresh-sky/20 outline-none transition-all resize-none text-brand-black"
                      placeholder="Tell us what you need delivering, any size/weight details, and when you need it collected..."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Enquiry
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form you agree to our{' '}
                    <a
                      href={`${COMPANY.mainSiteUrl}/privacy`}
                      className="underline hover:text-fresh-sky"
                    >
                      Privacy Policy
                    </a>
                    . We&apos;ll only use your details to respond to your
                    enquiry.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}