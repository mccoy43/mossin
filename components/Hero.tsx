"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      headline: ["WE PICK UP", "YOUR LAUNDRY", "WE WASH", "WE IRON"],
      subtext: "Seamless premium laundry service from doorstep pickup to impeccable delivery.",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
      alt: "Doorstep laundry pickup and ironing",
      accent: "DOORSTEP SERVICE"
    },
    {
      id: 2,
      headline: ["PROFESSIONAL", "DRY CLEANING", "FOR EVERY", "OCCASION"],
      subtext: "Expert dry cleaning for suits, dresses, and delicate fabrics. Eco-friendly solvents, impeccable results.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop",
      alt: "Professional dry cleaning service",
      accent: "DRY CLEAN"
    },
    {
      id: 3,
      headline: ["SAME-DAY", "EXPRESS SERVICE", "WHEN YOU NEED", "IT FAST"],
      subtext: "Urgent laundry needs met with our express service. Quality never compromised, just accelerated.",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop",
      alt: "Express laundry service",
      accent: "EXPRESS"
    },
    {
      id: 4,
      headline: ["PREMIUM", "WARDROBE CARE", "FOR THE", "DISCERNING"],
      subtext: "Luxury wardrobe management for executives, creatives, and those who demand perfection.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      alt: "Premium wardrobe care",
      accent: "PREMIUM"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image Slide */}
      <div className="absolute inset-0">
        <Image
          src={heroSlides[currentSlide].image}
          alt={heroSlides[currentSlide].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-dark-bg/70 to-dark-bg/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-deep-blue/20 backdrop-blur-sm border border-gold/30 rounded-full px-6 py-3">
            <span className="text-gold font-semibold text-sm tracking-wide">PREMIUM LAUNDRY SERVICE</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {heroSlides[currentSlide].headline.map((line, index) => (
                <span key={index} className={`block ${index === 1 ? "text-gold" : "text-white"}`}>
                  {line}
                </span>
              ))}
            </h1>

            <div className="px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
              <span className="text-gold font-semibold text-sm">{heroSlides[currentSlide].accent}</span>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            <span className="text-gold font-semibold">ULTRA FAST • PREMIUM QUALITY • FREE DELIVERY</span>
            <br />
            {heroSlides[currentSlide].subtext}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
              <span className="relative z-10">Book Your Service Now</span>
            </button>

            <button className="btn-secondary text-lg px-8 py-4 border-2 border-gold/50 hover:border-gold transition-colors duration-300 hover:scale-105">
              View Our Services
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { badge: "EXPRESS", text: "Same-Day Service", desc: "Fast turnaround guaranteed" },
              { badge: "PREMIUM", text: "Expert Care", desc: "Professional attention to detail" },
              { badge: "GREEN", text: "Eco-Friendly", desc: "Sustainable cleaning processes" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-luxury p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                  {item.badge}
                </div>
                <div className="text-white font-semibold mb-1">{item.text}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gold w-8"
                : "bg-gray-600 hover:bg-gold/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gold/60 text-sm font-light">Discover more</span>
          <svg
            className="w-6 h-6 text-gold hover:text-yellow-300 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}