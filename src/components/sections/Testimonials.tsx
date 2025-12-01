import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">Testimonials</h2>

      <motion.div
        className="max-w-2xl mx-auto p-8 bg-white shadow rounded-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="text-gray-600">
          "Pelayanan sangat profesional dan hasil desain sangat berkualitas.
          Recommended!"
        </p>
        <p className="text-right mt-6 font-semibold text-blue-600">— Client</p>
      </motion.div>
    </section>
  );
}
