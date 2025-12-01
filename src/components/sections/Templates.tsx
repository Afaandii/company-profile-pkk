// src/components/sections/Templates.tsx
import React from "react";
import { motion } from "framer-motion";
import TemplateCard from "../ui/TemplateCard";
import { templates } from "../../data/templates";

const Templates: React.FC = () => {
  const basicTemplates = templates.filter((t) => t.category === "basic");
  const premiumTemplates = templates.filter((t) => t.category === "premium");

  return (
    <section id="templates" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Pilihan Template
        </motion.h2>

        {/* Basic Templates */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Kategori Basic</h3>
            <p className="text-xl text-indigo-600 font-semibold">Rp 80.000</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {basicTemplates.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Premium Templates */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-2">Kategori Premium</h3>
            <p className="text-xl text-indigo-600 font-semibold">Rp 150.000</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {premiumTemplates.map((template, index) => (
              <TemplateCard
                key={template.id}
                template={template}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Custom Template */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Kategori Custom
          </h3>
          <p className="text-3xl font-bold mb-4">Mulai dari Rp 200.000</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Template custom sesuai kebutuhan brand kamu. Desain unik, fitur
            khusus, dan unlimited revisi untuk hasil yang sempurna.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Pesan Custom
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Templates;
