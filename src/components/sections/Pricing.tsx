// src/components/sections/Pricing.tsx
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "../../data/templates";

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Paket Harga
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-xl p-8 ${
                plan.popular
                  ? "bg-indigo-600 text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="bg-yellow-400 text-indigo-900 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  POPULER
                </div>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-3xl font-bold mb-6 ${
                  plan.popular ? "text-white" : "text-indigo-600"
                }`}
              >
                {plan.price}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check
                      size={20}
                      className={
                        plan.popular ? "text-yellow-400" : "text-green-500"
                      }
                    />
                    <span
                      className={plan.popular ? "text-white" : "text-gray-600"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Pilih Paket
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
