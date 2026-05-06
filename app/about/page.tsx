import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
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
              About <span className="text-gold">MOSSIN</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Elevating lifestyle through premium laundry and wardrobe management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-bold mb-8 text-white">
                Our Story
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-1 bg-gold mb-6"></div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Born from Excellence
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  MOSSIN was founded with a vision to revolutionize laundry services in Lagos.
                  We recognized that busy professionals and discerning individuals deserved more
                  than just clean clothes—they deserved an elevated lifestyle experience.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  What started as a commitment to quality has evolved into a premium lifestyle brand
                  that seamlessly integrates wardrobe management into the modern Lagos lifestyle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-1 bg-gold mb-6"></div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Premium & Growing
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  Today, MOSSIN stands as Lagos&apos;s premier laundry and lifestyle brand, serving
                  executives, creatives, and discerning individuals who demand excellence in every aspect
                  of their lives.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Our growth reflects our commitment to innovation, sustainability, and the pursuit
                  of perfection in everything we do. We&apos;re not just cleaning clothes—we&apos;re curating
                  lifestyles.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Excellence",
                description: "Uncompromising quality in every service we provide",
                icon: "✨"
              },
              {
                title: "Innovation",
                description: "Continuously evolving to serve our clients better",
                badge: "FUTURE"
              },
              {
                title: "Sustainability",
                description: "Eco-friendly practices for a better tomorrow",
                badge: "GREEN"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-luxury p-8 rounded-2xl text-center hover-luxury-glow transition-all duration-300"
              >
                <div className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                  {value.badge}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}