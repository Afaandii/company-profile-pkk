import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, MapPin, Send } from "lucide-react";

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
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

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
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Hubungi Kami
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Mari Wujudkan Ide Anda
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full min-h-[600px] flex flex-col">
              {/* Map */}
              <div className="flex-1 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.56347862302!2d112.6178287!3d-7.4472536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1447c8f5c3b%3A0x6c1f4d8b1c6e2c8a!2sSidoarjo%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Form Card */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Kirim Pesan
                </h3>
                <p className="text-gray-600">
                  Isi form dibawah dan kami akan segera menghubungi Anda
                </p>
              </div>

              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 transition-all duration-200 resize-none"
                    placeholder="Ceritakan kebutuhan Anda..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Kirim Pesan</span>
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Social Media Cards - Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* WhatsApp Card */}
            <motion.a
              whileHover={{ y: -5 }}
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Chat dengan kami</p>
                  <p className="text-green-600 font-semibold">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Instagram Card */}
            <motion.a
              whileHover={{ y: -5 }}
              href="https://instagram.com/templatestore"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-pink-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Instagram
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Follow kami</p>
                  <p className="text-pink-600 font-semibold">
                    syncdev870@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Email Card */}
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:hello@templatestore.com"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Email
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">Kirim email</p>
                  <p className="text-blue-600 font-semibold">
                    syncdev870@gmail.com
                  </p>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
