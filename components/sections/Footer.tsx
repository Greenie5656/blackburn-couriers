import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY, LOCATION } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden">
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

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-fresh-sky z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">
              A2A Couriers
            </h3>

            <p className="text-fresh-sky text-xs font-semibold tracking-widest uppercase mb-4">
              {COMPANY.tagline}
            </p>

            <p className="text-white/60 text-sm leading-relaxed">
              Professional same-day courier service covering{' '}
              {LOCATION.primary}, {LOCATION.region}, and nationwide. Fast,
              reliable, dedicated delivery every time.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Contact
            </h4>

            <div className="space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3 text-white/60 hover:text-fresh-sky transition-colors group"
              >
                <Phone size={16} className="text-fresh-sky" />

                <span className="group-hover:text-fresh-sky">
                  {COMPANY.phone}
                </span>
              </a>

              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-3 text-white/60 hover:text-fresh-sky transition-colors group"
              >
                <Mail size={16} className="text-fresh-sky" />

                <span className="group-hover:text-fresh-sky">
                  {COMPANY.email}
                </span>
              </a>

              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-fresh-sky mt-0.5" />

                <span className="text-sm">
                  {COMPANY.address.full}
                </span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Quick Links
            </h4>

            <div className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Areas We Cover', href: '#areas' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Get a Quote', href: '#contact' },
                { label: 'Main Website', href: COMPANY.mainSiteUrl },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/60 hover:text-fresh-sky transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Areas served */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              Areas We Serve
            </h4>

            <div className="space-y-2">
              {LOCATION.towns.map((town) => (
                <p key={town.name} className="text-white/60 text-sm">
                  <span className="text-white font-medium">
                    {town.name}
                  </span>{' '}
                  — {town.postcodes.join(', ')}
                </p>
              ))}

              <p className="text-white/60 text-sm mt-3">
                Plus {LOCATION.nearbyAreas.slice(0, 5).join(', ')} and
                more across Lancashire &amp; nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm">
            <a
              href={`${COMPANY.mainSiteUrl}/privacy`}
              className="text-white/40 hover:text-fresh-sky transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href={`${COMPANY.mainSiteUrl}/terms`}
              className="text-white/40 hover:text-fresh-sky transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>

          <a
            href="https://www.lancashirewebfixers.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/images/LWF.png"
              alt="Website by Lancashire Web Fixers"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}