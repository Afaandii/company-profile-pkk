import React from "react";
import { motion } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import type { Template } from "../../types/index";

interface TemplateCardProps {
  template: Template;
  index: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div
        className="h-48 flex items-center justify-center text-white text-2xl font-bold"
        style={{ backgroundColor: template.image }}
      >
        {template.name.split(" - ")[0]}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{template.name}</h3>
        <p className="text-2xl font-bold text-indigo-600 mb-4">
          {template.price}
        </p>
        <ul className="space-y-2 mb-6">
          {template.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-600">
              <Check size={16} className="text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Preview
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Pesan
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;
