"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <footer className="bg-dark-secondary border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-deep-blue flex items-center justify-center text-dark-bg font-bold text-lg">
                M
              </div>
              <span className="font-heading font-bold text-xl text-gold">
                MOSSIN
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium laundry & dry cleaning services redefining luxury in everyday living.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-semibold">
                  TEL
                </div>
                <a href="tel:+2349015243173" className="hover:text-gold transition-colors">
                  +234 901 524 3173
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-semibold">
                  EMAIL
                </div>
                <a href="mailto:blessingayorinde39@gmail.com" className="hover:text-gold transition-colors">
                  blessingayorinde39@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-semibold">
                  LOC
                </div>
                <span>Somolu, Lagos</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gold/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} MOSSIN Laundry City. All rights reserved.
            </p>
            <p className="text-gray-400">
              Crafted with <span className="text-gold">♡</span> for luxury
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
