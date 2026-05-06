"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", address: "", service: "" });
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Ready to Experience Luxury?</h2>
          <p className="section-subtitle">
            Book your service today and join hundreds of satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-xl border border-gold/20"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gold mb-2">
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-bg/50 border border-gold/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wash-fold">Wash & Fold</option>
                  <option value="dry-cleaning">Dry Cleaning</option>
                  <option value="ironing">Ironing & Pressing</option>
                  <option value="stain-treatment">Stain Treatment</option>
                  <option value="express">Express Service</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full btn-primary font-semibold py-3"
              >
                {submitted ? "✓ Booking Confirmed!" : "Book Your Service"}
              </button>
            </div>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">Get in Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                Have questions? Our concierge team is ready to help you with
                any inquiries about our services.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gold text-2xl">📞</span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+234 901 524 3173</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                  EMAIL
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">blessingayorinde39@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                  LOCATION
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-semibold">24, Akanni Str, Off Aiyepe Ave, Somolu, Lagos</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/20">
              <h4 className="text-lg font-bold text-white mb-4">Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl overflow-hidden border border-gold/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5521936230524!2d3.369!3d6.5348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f755266b5b5b5b5%3A0x3f755266b5b5b5b5!2s24%20Akanni%20Street%20Somolu%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
