// src/components/sections/Contact.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda akan segera kami proses.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Hubungi Kami
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Hubungi kami untuk konsultasi gratis dan dapatkan template yang
              sesuai dengan kebutuhan bisnis Anda.
            </p>

            <div className="space-y-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="text-green-600" size={24} />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://instagram.com/templatestore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
              >
                <Instagram className="text-pink-600" size={24} />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-sm text-gray-600">@templatestore</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="mailto:hello@templatestore.com"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Mail className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-600">
                    hello@templatestore.com
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Nama
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Nama Anda"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="email@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Pesan
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Ceritakan kebutuhan Anda..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Kirim Pesan
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
