import {
  Zap,
  Palette,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cepat & Efisien",
      desc: "Website siap dalam hitungan hari",
      gradient: "from-yellow-400 to-orange-500",
      bgGlow: "bg-yellow-400/20",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Desain Modern",
      desc: "Template trendy dan profesional",
      gradient: "from-pink-400 to-purple-500",
      bgGlow: "bg-pink-400/20",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Mudah Update",
      desc: "Customisasi sesuai kebutuhan",
      gradient: "from-blue-400 to-cyan-500",
      bgGlow: "bg-blue-400/20",
    },
  ];

  const benefits = [
    "100% Responsive di semua device",
    "SEO Optimized untuk ranking Google",
    "Loading super cepat",
    "Support gratis lifetime",
    "Update template berkala",
    "Dokumentasi lengkap",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mkg0djJoMnYtMmgydi0yaC0ydi0ySDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-indigo-200 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-indigo-900">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tentang Kami
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Kami adalah solusi digital terpercaya yang menghadirkan template
            landing page modern, responsif, dan siap pakai untuk bisnis Anda.
            Dirancang khusus untuk UMKM, penyedia jasa, dan bisnis online yang
            ingin memiliki kehadiran digital profesional tanpa harus
            mengeluarkan biaya besar.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 ${feature.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg mb-6 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                {/* Hover Arrow */}
                <div className="flex items-center gap-2 mt-4 text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full rounded-tr-2xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kenapa Pilih Kami?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Setiap template kami mudah dikustomisasi sesuai kebutuhan brand
                Anda dan dioptimalkan untuk meningkatkan kepercayaan pelanggan
                serta konversi penjualan.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Projects Done" },
            { number: "50+", label: "Templates" },
            { number: "4.9/5", label: "Rating" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
