"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Wash & Fold",
      description: "Professional washing and folding service for everyday wear. Perfect for casual and business casual attire.",
      price: "₦400 per kg",
      features: ["Gentle washing", "Professional folding", "Quality inspection", "Same-day service available"],
      badge: "ESSENTIAL"
    },
    {
      title: "Dry Cleaning",
      description: "Premium dry cleaning for delicate fabrics, suits, dresses, and formal wear that require special care.",
      price: "₦2,500 per item",
      features: ["Eco-friendly solvents", "Expert stain removal", "Steam pressing", "Protective packaging"],
      badge: "PREMIUM"
    },
    {
      title: "Ironing",
      description: "Professional pressing and ironing service to ensure your clothes look impeccable for any occasion.",
      price: "₦300 per item",
      features: ["Steam ironing", "Crease-free finish", "Fabric-appropriate care", "Quick turnaround"],
      badge: "PERFECT"
    },
    {
      title: "Stain Treatment",
      description: "Advanced stain removal service using professional techniques and eco-friendly products.",
      price: "₦500 per stain",
      features: ["Deep stain penetration", "Color-safe treatment", "Multiple treatment options", "Satisfaction guarantee"],
      badge: "EXPERT"
    },
    {
      title: "Walk-in Premium Service",
      description: "Express and priority service for urgent needs. Walk-in convenience with premium treatment.",
      price: "₦1,000 premium fee",
      features: ["Express processing", "Priority scheduling", "Walk-in convenience", "Premium packaging"],
      badge: "EXPRESS"
    }
  ];

  const contactInfo = {
    phone: "+234 901 524 3173",
    email: "blessingayorinde39@gmail.com",
    address: "Somolu, Lagos"
  };

  return (
    <main className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg"></div>

        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Premium laundry and wardrobe management services tailored for the modern Lagos lifestyle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-luxury p-8 rounded-2xl hover-luxury-glow transition-all duration-300 group"
              >
                <div className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block group-hover:scale-105 transition-transform duration-300">
                  {service.badge}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                <div className="text-gold font-semibold text-lg mb-4">{service.price}</div>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                      <span className="text-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 btn-secondary text-sm py-3"
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold mb-8 text-white">
              Get in Touch
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to elevate your laundry experience? Contact us for personalized service and exceptional care.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Phone",
                  value: contactInfo.phone,
                  badge: "CALL US",
                  link: `tel:${contactInfo.phone.replace(/\s+/g, '')}`
                },
                {
                  title: "Email",
                  value: contactInfo.email,
                  badge: "EMAIL US",
                  link: `mailto:${contactInfo.email}`
                },
                {
                  title: "Address",
                  value: contactInfo.address,
                  badge: "VISIT US",
                  link: "#"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-luxury p-8 rounded-2xl text-center hover-luxury-glow transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-gold/20 to-deep-blue/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-4 inline-block">
                    <span className="text-gold font-bold text-sm">{contact.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gold mb-3">{contact.title}</h3>
                  <a
                    href={contact.link}
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {contact.value}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-gray-400 mb-6">
                Prefer to chat? Message us on WhatsApp for instant booking and support.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4"
                onClick={() => {
                  const message = "Hi MOSSIN! I'd like to learn more about your services.";
                  const phoneNumber = "+2349015243173";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
              >
                Chat on WhatsApp
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}