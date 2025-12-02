import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "CEO & Founder",
      company: "TechStart Indonesia",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "Template yang luar biasa! Desainnya modern dan sangat mudah dikustomisasi. Tim kami berhasil launch website dalam waktu singkat. Highly recommended untuk startup!",
      date: "2 minggu lalu",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Marketing Director",
      company: "Digital Prima",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Kualitas premium dengan harga yang sangat terjangkau. Support team sangat responsif dan membantu. Website kami sekarang terlihat lebih profesional dan modern.",
      date: "1 bulan lalu",
    },
    {
      id: 3,
      name: "Ahmad Wijaya",
      role: "Product Manager",
      company: "Inovasi Digital",
      image: "https://i.pravatar.cc/150?img=33",
      rating: 5,
      text: "Best investment untuk bisnis kami! Template ini menghemat waktu development hingga 70%. Dokumentasinya jelas dan mudah diikuti. Worth every penny!",
      date: "3 minggu lalu",
    },
    {
      id: 4,
      name: "Linda Kusuma",
      role: "E-commerce Owner",
      company: "Fashion Hub",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "Sempurna untuk toko online! Conversion rate kami meningkat 45% setelah pakai template ini. Design-nya eye-catching dan user-friendly banget.",
      date: "1 minggu lalu",
    },
    {
      id: 5,
      name: "Rudi Hermawan",
      role: "Freelance Developer",
      company: "Independent",
      image: "https://i.pravatar.cc/150?img=15",
      rating: 5,
      text: "Sebagai developer, saya sangat impressed dengan code quality-nya. Clean, well-organized, dan mudah di-maintain. Jadi favorit saya untuk client projects!",
      date: "2 bulan lalu",
    },
    {
      id: 6,
      name: "Maya Putri",
      role: "Business Owner",
      company: "Kuliner Nusantara",
      image: "https://i.pravatar.cc/150?img=20",
      rating: 5,
      text: "Website kami jadi lebih menarik dan order online meningkat drastis. Template ini benar-benar game changer untuk bisnis F&B kami. Thank you!",
      date: "3 minggu lalu",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Testimonials
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ribuan klien puas telah mempercayai kami untuk mengembangkan bisnis
            mereka
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left Side - Profile */}
                  <div className="md:col-span-2 bg-gradient-to-br from-purple-600 to-pink-600 p-8 flex flex-col items-center justify-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="relative mb-6"
                    >
                      <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50"></div>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="relative w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-purple-100 font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-purple-200 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="text-yellow-300 fill-yellow-300"
                            size={20}
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Right Side - Testimonial Content */}
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <Quote className="text-purple-200 mb-6" size={48} />
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {testimonials[currentIndex].text}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {testimonials[currentIndex].date}
                      </span>
                      <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentIndex
                                ? "bg-purple-600 w-8"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="pointer-events-auto bg-white text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="pointer-events-auto bg-white text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Grid - More Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-yellow-400"
                        size={14}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
