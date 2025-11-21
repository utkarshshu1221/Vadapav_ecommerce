// app/components/Footer.jsx (or src/components/Footer.jsx)
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer({
  brand = {
    name: "Hare Krishna Bada Pav",
    logoSrc: "/images.png",
    logoAlt: "Hare Krishna Bada Pav Logo",
    tagline: "Serving warmth, flavor, and devotion in every bite.",
  },
  navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Order Online", href: "/order" },
  ],
  socials = [
    { label: "Instagram", href: "https://instagram.com/hkbadapav", icon: FaInstagram },
    { label: "WhatsApp", href: "https://wa.me/918000000000", icon: FaWhatsapp },
    { label: "Facebook", href: "https://facebook.com/hkbadapav", icon: FaFacebookF },
    { label: "X", href: "https://x.com/hkbadapav", icon: FaXTwitter },
  ],
  newsletter = {
    heading: "Stay in the flavor loop",
    subheading: "Get updates on new items, offers, and events.",
    placeholder: "Enter your email",
    cta: "Subscribe",
    onSubmit: null, // hook later to Mailchimp/Formspree/backend
  },
  location = {
    heading: "Visit us",
    address: "Near Danapur Cantt, Patna, Bihar 801503",
    hours: "Open daily: 10:00 AM – 10:00 PM",
    mapsHref: "https://maps.google.com/?q=Hare+Krishna+Bada+Pav+Danapur",
    mapsLabel: "Open in Google Maps",
  },
  credit = {
    year: new Date().getFullYear(),
    siteName: "Hare Krishna Bada Pav",
    developer: { label: "VisionClick Media", href: "https://visionclick.media" },
  },
  className = "",
}) {
  const handleNewsletter = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    if (newsletter?.onSubmit) {
      newsletter.onSubmit(email);
    } else {
      // Placeholder behavior; replace with service integration
      console.log("Newsletter email:", email);
    }
    form.reset();
  };

  return (
    <footer
      className={`relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white ${className}`}
      aria-labelledby="footer-heading"
    >
      {/* Decorative subtle overlay for depth */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8">
        <h2 id="footer-heading" className="sr-only">
          Website footer
        </h2>

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-12 rounded-lg bg-white/10 ring-1 ring-white/20 overflow-hidden">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-semibold tracking-tight group-hover:opacity-90 transition-opacity">
                {brand.name}
              </span>
            </Link>
            <p className="text-sm text-gray-100/90 leading-relaxed">
              {brand.tagline}
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 text-white transition
                             hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            <h3 className="text-lg font-semibold">Navigate</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-100/90 transition hover:text-white hover:translate-x-0.5 inline-flex items-center gap-1"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-white/40" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-100/90">{newsletter.subheading}</p>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={newsletter.placeholder}
                className="w-full rounded-lg bg-white/10 px-4 py-2.5 text-sm placeholder:text-gray-200/70 text-white
                           ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition"/>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2.5 text-sm font-medium text-red-700
                           hover:bg-white hover:scale-[1.02] active:scale-100 transition focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {newsletter.cta}
              </button>
            </form>
            <p className="text-xs text-white/70">
              By subscribing, you consent to receive marketing emails. Unsubscribe anytime.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{location.heading}</h3>
            <div className="space-y-2 text-sm text-gray-100/90">
              <p>{location.address}</p>
              <p>{location.hours}</p>
            </div>
            <Link
              href={location.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm ring-1 ring-white/20
                         hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
              {location.mapsLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/80">
            © {credit.year} {credit.siteName}. All rights reserved.
          </p>
          <p className="text-xs text-white/70">
            Site by{" "}
            <Link
              href={credit.developer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 hover:decoration-white transition"
            >
              {credit.developer.label}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
