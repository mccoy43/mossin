"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Amara Okoye",
      role: "Fashion Designer",
      content:
        "MOSSIN has transformed my wardrobe maintenance. The premium care and attention to detail is exceptional. My designs deserve this level of luxury.",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
      rating: 5,
    },
    {
      name: "Kofi Mensah",
      role: "Business Executive",
      content:
        "As someone who travels frequently, MOSSIN ensures my professional attire is always impeccable. The convenience and quality are unmatched in Lagos.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 5,
    },
    {
      name: "Nia Thompson",
      role: "Creative Director",
      content:
        "The lifestyle elevation MOSSIN provides is remarkable. From pickup to delivery, every interaction feels premium and sophisticated.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by hundreds of satisfied customers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-xl border border-gold/20 hover:border-gold/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gold text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
