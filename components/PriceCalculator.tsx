"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function PriceCalculator() {
  const [quantities, setQuantities] = useState({
    shirts: 0,
    trousers: 0,
    suits: 0,
    dresses: 0,
    bedsheets: 0,
  });

  const prices = {
    shirts: 400,
    trousers: 400,
    suits: 2500,
    dresses: 3500,
    bedsheets: 700,
  };

  const updateQuantity = (item: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [item]: Math.max(0, value)
    }));
  };

  const subtotal = Object.entries(quantities).reduce((total, [item, qty]) => {
    return total + (qty * prices[item as keyof typeof prices]);
  }, 0);

  const deliveryFee = subtotal > 0 ? 0 : 0; // Free delivery
  const total = subtotal + deliveryFee;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing-calculator" className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Price Calculator
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get an instant quote for your laundry. Select items and see pricing in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-luxury p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-6">Select Your Items</h3>

              {Object.entries(prices).map(([item, price]) => (
                <div key={item} className="flex items-center justify-between py-4 border-b border-gold/20 last:border-b-0">
                  <div>
                    <p className="text-white font-semibold capitalize">{item.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="text-gold text-sm">₦{price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item, quantities[item as keyof typeof quantities] - 1)}
                      className="w-8 h-8 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-dark-bg transition-all flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-white font-semibold">
                      {quantities[item as keyof typeof quantities]}
                    </span>
                    <button
                      onClick={() => updateQuantity(item, quantities[item as keyof typeof quantities] + 1)}
                      className="w-8 h-8 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-dark-bg transition-all flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-luxury p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gold mb-6">Order Summary</h3>

              <div className="space-y-4">
                {Object.entries(quantities).map(([item, qty]) => {
                  if (qty === 0) return null;
                  return (
                    <div key={item} className="flex justify-between text-gray-300">
                      <span>{qty}x {item.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span>₦{(qty * prices[item as keyof typeof prices]).toLocaleString()}</span>
                    </div>
                  );
                })}

                {subtotal > 0 && (
                  <>
                    <div className="border-t border-gold/20 pt-4">
                      <div className="flex justify-between text-gray-400">
                        <span>Subtotal</span>
                        <span>₦{subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-green-400 text-sm">
                        <span>Delivery</span>
                        <span>FREE</span>
                      </div>
                    </div>

                    <div className="border-t border-gold pt-4">
                      <div className="flex justify-between text-white font-bold text-xl">
                        <span>Total</span>
                        <span>₦{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {subtotal > 0 && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary mt-6 text-lg font-semibold py-4"
                >
                  Book Pickup Now
                </motion.button>
              )}

              {subtotal === 0 && (
                <div className="text-center text-gray-400 py-8">
                  <div className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                    SELECT ITEMS
                  </div>
                  <p>Choose your laundry items to calculate pricing</p>
                </div>
              )}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-luxury p-4 rounded-xl text-center">
                <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-bold mb-2">FREE</div>
                <div className="text-xs text-gray-400">Delivery</div>
              </div>
              <div className="glass-luxury p-4 rounded-xl text-center">
                <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-bold mb-2">24H</div>
                <div className="text-xs text-gray-400">Service</div>
              </div>
              <div className="glass-luxury p-4 rounded-xl text-center">
                <div className="bg-gold/20 text-gold px-2 py-1 rounded text-xs font-bold mb-2">100%</div>
                <div className="text-xs text-gray-400">Insured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}