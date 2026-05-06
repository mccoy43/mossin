"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceTracker() {
  const [trackingId, setTrackingId] = useState("");
  const [orderStatus, setOrderStatus] = useState<any>(null);

  // Mock order statuses
  const mockStatuses = {
    "MB001": {
      status: "In Transit",
      step: 2,
      items: ["3 Shirts", "2 Trousers"],
      pickup: "2024-01-15 09:00",
      delivery: "2024-01-15 18:00",
      location: "Currently at our facility"
    },
    "MB002": {
      status: "Completed",
      step: 4,
      items: ["1 Suit", "2 Shirts"],
      pickup: "2024-01-14 14:00",
      delivery: "2024-01-14 16:00",
      location: "Delivered to customer"
    }
  };

  const steps = [
    { label: "Order Placed", badge: "ORDERED" },
    { label: "Picked Up", badge: "PICKUP" },
    { label: "Processing", badge: "PROCESSING" },
    { label: "Quality Check", badge: "QUALITY" },
    { label: "Out for Delivery", badge: "DELIVERY" },
    { label: "Delivered", badge: "COMPLETE" },
  ];

  const handleTrack = () => {
    if (mockStatuses[trackingId as keyof typeof mockStatuses]) {
      setOrderStatus(mockStatuses[trackingId as keyof typeof mockStatuses]);
    } else {
      setOrderStatus({ error: "Order not found" });
    }
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white">
            Track Your Order
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time updates on your laundry status
          </p>
        </motion.div>

        {/* Tracking Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-luxury p-8 rounded-2xl mb-8"
        >
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter tracking ID (e.g., MB001)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="flex-1 bg-dark-bg/50 border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
            />
            <button
              onClick={handleTrack}
              className="btn-primary px-6 py-3"
            >
              Track
            </button>
          </div>
        </motion.div>

        {/* Order Status */}
        {orderStatus && !orderStatus.error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-luxury p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gold mb-2">Order {trackingId}</h3>
              <p className="text-green-400 font-semibold">{orderStatus.status}</p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`px-3 py-2 rounded-full flex items-center justify-center text-xs font-bold mb-2 ${
                      index <= orderStatus.step
                        ? "bg-gold text-dark-bg animate-luxury-glow"
                        : "bg-gray-600 text-gray-400"
                    }`}
                  >
                    {step.badge}
                  </motion.div>
                  <p className={`text-xs text-center ${
                    index <= orderStatus.step ? "text-gold" : "text-gray-400"
                  }`}>
                    {step.label}
                  </p>
                </div>
              ))}
              {/* Progress line */}
              <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-600">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(orderStatus.step / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-gold to-yellow-400"
                />
              </div>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gold font-semibold mb-3">Order Details</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">Items: {orderStatus.items.join(", ")}</p>
                  <p className="text-gray-300">Pickup: {orderStatus.pickup}</p>
                  <p className="text-gray-300">Delivery: {orderStatus.delivery}</p>
                </div>
              </div>
              <div>
                <h4 className="text-gold font-semibold mb-3">Current Location</h4>
                <p className="text-gray-300">{orderStatus.location}</p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm">Live tracking active</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {orderStatus?.error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-luxury p-8 rounded-2xl text-center"
          >
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-gray-400">Order not found. Please check your tracking ID.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}