"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Essential",
      price: "₦15,000",
      period: "/month",
      features: [
        "Up to 5kg per month",
        "Wash & fold included",
        "Standard delivery",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      price: "₦35,000",
      period: "/month",
      features: [
        "Up to 15kg per month",
        "Wash & fold + ironing",
        "Same-day delivery",
        "Priority support",
        "Monthly stain treatment",
      ],
      highlighted: true,
    },
    {
      name: "Luxury",
      price: "₦75,000",
      period: "/month",
      features: [
        "Unlimited monthly services",
        "All services included",
        "Dedicated concierge",
        "24/7 support",
        "Premium packaging",
        "Complimentary alterations",
      ],
      highlighted: false,
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
    <section id="pricing" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">
            Flexible plans designed for every lifestyle and budget
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={plan.highlighted ? { scale: 1.02 } : {}}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 gold-glow"
                  : "glass-effect border border-gold/20"
              } ${plan.highlighted ? "bg-gradient-to-br from-gold/10 to-deep-blue/10" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold to-deep-blue text-dark-bg py-2 text-center font-bold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <span className="text-gold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={
                    plan.highlighted ? "btn-primary w-full" : "btn-secondary w-full"
                  }
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
