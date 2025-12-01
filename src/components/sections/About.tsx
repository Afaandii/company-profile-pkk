// src/components/sections/About.tsx
import React from "react";
import { motion } from "framer-motion";
import { Zap, Palette, RefreshCw } from "lucide-react";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tentang Kami
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Kami adalah solusi digital terpercaya yang menghadirkan template
            landing page modern, responsif, dan siap pakai untuk bisnis Anda.
            Dirancang khusus untuk UMKM, penyedia jasa, dan bisnis online yang
            ingin memiliki kehadiran digital profesional tanpa harus
            mengeluarkan biaya besar. Setiap template kami mudah dikustomisasi
            sesuai kebutuhan brand Anda dan dioptimalkan untuk meningkatkan
            kepercayaan pelanggan serta konversi penjualan.
          </p>

          <div className="grid sm:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <Zap size={40} />,
                title: "Cepat & Efisien",
                desc: "Website siap dalam hitungan hari",
              },
              {
                icon: <Palette size={40} />,
                title: "Desain Modern",
                desc: "Template trendy dan profesional",
              },
              {
                icon: <RefreshCw size={40} />,
                title: "Mudah Update",
                desc: "Customisasi sesuai kebutuhan",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
