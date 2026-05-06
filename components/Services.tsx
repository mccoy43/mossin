"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      badge: "WASH & FOLD",
      title: "Wash & Fold",
      description: "Professional washing and folding service for everyday wear. Our expert team ensures impeccable care for your casual and business casual attire.",
      price: "₦400/kg",
      features: ["Gentle washing cycles", "Professional folding", "Quality inspection", "Eco-friendly detergents"],
      highlight: "Perfect for busy professionals"
    },
    {
      badge: "DRY CLEANING",
      title: "Dry Cleaning",
      description: "Premium dry cleaning for delicate fabrics, suits, dresses, and formal wear. Our master craftsmen use eco-friendly solvents and traditional techniques.",
      price: "₦2,500/item",
      features: ["Eco-friendly solvents", "Expert stain removal", "Steam pressing", "Protective packaging"],
      highlight: "Luxury fabric care"
    },
    {
      badge: "IRONING",
      title: "Ironing & Pressing",
      description: "Professional pressing and ironing service to ensure your clothes look impeccable. Our skilled pressers use industrial steam technology.",
      price: "₦300/item",
      features: ["Steam ironing technology", "Crease-free finish", "Fabric-appropriate care", "Quick turnaround"],
      highlight: "Impeccable presentation"
    },
    {
      badge: "STAIN CARE",
      title: "Stain Treatment",
      description: "Advanced stain removal service using professional techniques and premium products. Our stain specialists employ multiple treatment methods.",
      price: "₦500/stain",
      features: ["Deep stain penetration", "Color-safe treatment", "Multiple techniques", "Satisfaction guarantee"],
      highlight: "Expert restoration"
    },
    {
      badge: "EXPRESS",
      title: "Express Service",
      description: "Priority processing for urgent requirements. Our dedicated express team ensures same-day and next-day delivery with uncompromising quality.",
      price: "₦1,000 premium",
      features: ["Priority scheduling", "Express processing", "Dedicated team", "Premium packaging"],
      highlight: "When time matters most"
    },
    {
      badge: "DELIVERY",
      title: "Premium Delivery",
      description: "Convenient pickup and delivery service with real-time tracking. Our professional couriers handle your garments with care, ensuring secure transport and flexible scheduling options.",
      price: "Free over ₦5,000",
      features: ["Real-time tracking", "Flexible scheduling", "Secure packaging", "Professional handling"],
      highlight: "Door-to-door luxury"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Elevate your wardrobe with our comprehensive premium laundry solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-luxury p-8 rounded-2xl hover-luxury-glow transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-gold/20 to-deep-blue/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-4">
                  <span className="text-gold font-bold text-sm tracking-wide">{service.badge}</span>
                </div>
                <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-xs font-semibold inline-block">
                  {service.highlight}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>

              <div className="text-gold font-semibold text-lg mb-4">{service.price}</div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                    <span className="text-gold mr-2 text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-secondary text-sm py-3"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
