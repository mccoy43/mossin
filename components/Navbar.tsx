"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 glass-luxury border-b border-gold/30 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-gold via-yellow-400 to-gold flex items-center justify-center text-dark-bg font-bold text-xl shadow-lg shadow-gold/50 group-hover:shadow-gold/70 transition-all duration-300"
            >
              M
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-gold block leading-tight">MOSSIN</span>
              <span className="text-xs text-gray-400 font-light">LAUNDRY CITY</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-gold transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block btn-luxury text-sm"
          >
            Book Pickup
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span className={`w-6 h-0.5 bg-gold transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-gold transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-gold transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-gold/20"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full btn-primary mt-4">Book Pickup</button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
