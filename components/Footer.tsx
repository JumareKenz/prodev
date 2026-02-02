"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp, Send, Sparkles } from "lucide-react";

const servicesLinks = [
  { label: "Program Design & Technical Advisory", href: "/services/program-design/" },
  { label: "Project Management & Implementation", href: "/services/project-management/" },
  { label: "MEL/MERL Services", href: "/services/monitoring-evaluation/" },
  { label: "Digital Transformation", href: "/services/digital-transformation/" },
  { label: "Capacity Building & Training", href: "/services/capacity-building/" },
];

const sectorsLinks = [
  { label: "Health Systems Strengthening", href: "/sectors/health/" },
  { label: "Education Systems & Workforce", href: "/sectors/education/" },
  { label: "Governance & Accountability", href: "/sectors/governance/" },
  { label: "Climate Adaptation & Resilience", href: "/sectors/climate/" },
  { label: "Livelihoods, Gender & Youth", href: "/sectors/livelihoods/" },
];

const companyLinks = [
  { label: "About Us", href: "/about/" },
  // { label: "Case Studies", href: "/case-studies/" },
  // { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/policies/privacy/" },
  { label: "Terms of Service", href: "/policies/terms/" },
  { label: "Cookie Policy", href: "/policies/cookies/" },
  { label: "Code of Conduct", href: "/policies/compliance/" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-blue-950 to-neutral-900 text-neutral-300 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMzQgMzZoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Main Footer */}
      <div className="container-wide section-padding-sm relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20"
              >
                <span className="text-white font-bold text-xl">P</span>
              </motion.div>
              <div>
                <span className="text-xl font-bold text-white">ProDev</span>
                <span className="text-sm text-neutral-400 block -mt-1">Consulting Ltd.</span>
              </div>
            </Link>
            <p className="text-sm text-neutral-400 mb-6 max-w-sm leading-relaxed">
              Professional consulting and project management services enhancing design, 
              delivery, monitoring, and evaluation of development programs across 
              public and private sectors in Nigeria and Africa.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <span>Abuja, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <a href="mailto:support@prodevconsults.org" className="hover:text-cyan-400 transition-colors">
                support@prodevconsults.org
              </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <a href="tel:+2349099214425" className="hover:text-cyan-400 transition-colors">
                +234 909 921 4425
              </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 border border-white/10 hover:border-transparent"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 border border-white/10 hover:border-transparent"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Services
            </h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Sectors
            </h4>
            <ul className="space-y-3">
              {sectorsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-cyan-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Newsletter
            </h4>
            <p className="text-sm text-neutral-400 mb-4">
              Subscribe for insights on development consulting and MEL best practices.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                />
                <Send className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-neutral-500">
              {policyLinks.map((link, index) => (
                <span key={link.href} className="flex items-center">
                  <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                  {index < policyLinks.length - 1 && (
                    <span className="ml-4 text-neutral-700">|</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} ProDev Consulting Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg shadow-cyan-500/20 flex items-center justify-center transition-all z-40 border border-white/20"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}
