"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Professional Garment Collection",
      description: "Our uniformed team arrives precisely on time with premium packaging materials. Each garment is carefully inspected, tagged, and documented before professional packaging.",
      badge: "COLLECTION",
      stats: "500+ Daily Pickups"
    },
    {
      id: 2,
      title: "Advanced Laundry Technology",
      description: "State-of-the-art washing machines and dryers with eco-friendly detergents. Our automated systems ensure consistent, premium results for every load.",
      badge: "TECHNOLOGY",
      stats: "50+ Washing Machines"
    },
    {
      id: 3,
      title: "Expert Stain Treatment",
      description: "Specialized stain removal technicians using professional-grade products. From wine stains to oil marks, we treat each challenge with precision and care.",
      badge: "STAIN CARE",
      stats: "98% Stain Removal"
    },
    {
      id: 4,
      title: "Precision Pressing & Folding",
      description: "Master pressers ensure every crease is perfect. Professional folding techniques preserve your garments' shape and presentation.",
      badge: "PROFESSIONAL PRESSING",
      stats: "Perfect Press Guarantee"
    },
    {
      id: 5,
      title: "Luxury Packaging & Delivery",
      description: "Garments are packaged in premium, protective materials. Our delivery team ensures safe, timely arrival with real-time GPS tracking.",
      badge: "PREMIUM DELIVERY",
      stats: "Same-Day Delivery"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="how-it-works" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Our <span className="text-gold">Operations</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the sophistication of a world-class laundry operation serving Lagos&apos;s elite
          </p>
        </motion.div>

        {/* Slideshow Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden glass-premium">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative h-full bg-gradient-to-br from-dark-secondary to-dark-bg flex items-center justify-center">
                  {/* Content Overlay */}
                  <div className="max-w-4xl p-8 md:p-12 text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <div className="bg-gradient-to-r from-gold/20 to-deep-blue/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3 mb-6 inline-block">
                        <span className="text-gold font-bold text-sm tracking-wide">{slides[currentSlide].badge}</span>
                      </div>

                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="text-gold font-semibold text-lg bg-gold/10 px-4 py-2 rounded-full">
                          {slides[currentSlide].stats}
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        {slides[currentSlide].title}
                      </h3>

                      <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                        {slides[currentSlide].description}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-luxury"
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300 hover-luxury-scale"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-dark-bg transition-all duration-300 hover-luxury-scale"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gold w-8"
                    : "bg-gray-600 hover:bg-gold/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { number: "10K+", label: "Items Cleaned Monthly" },
            { number: "500+", label: "Daily Pickups" },
            { number: "99.8%", label: "Customer Satisfaction" },
            { number: "50+", label: "Expert Staff" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass-luxury p-6 rounded-2xl hover-luxury-glow"
            >
              <div className="text-2xl md:text-3xl font-bold text-gold mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of Lagos professionals who trust MOSSIN with their most valuable possessions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury text-lg px-8 py-4"
          >
            Experience Luxury Service
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
