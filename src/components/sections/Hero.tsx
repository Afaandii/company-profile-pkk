import { ChevronRight, Sparkles, Zap, TrendingUp, Layout } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mkg0djJoMnYtMmgydi0yaC0ydi0ySDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">
                Template Premium Ready to Use
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Template Landing Page{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                  Siap Pakai
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Cepat, murah, dan profesional untuk UMKM & bisnis online.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Instan Setup</div>
                  <div className="text-xs text-gray-300">5 Menit Live</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">SEO Ready</div>
                  <div className="text-xs text-gray-300">Optimized</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Responsive</div>
                  <div className="text-xs text-gray-300">All Devices</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() =>
                  document
                    .getElementById("templates")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Lihat Template</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Pesan Sekarang
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Templates</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative lg:scale-110">
            {/* Main Card */}
            <div className="relative">
              {/* Floating Card 1 */}
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300 flex items-center justify-center z-10">
                <div className="text-white text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-bold text-sm">Premium</div>
                  <div className="text-xs">Quality</div>
                </div>
              </div>

              {/* Main Mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Template Preview"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-2xl font-bold mb-2">Modern Design</div>
                  <div className="text-sm text-gray-200">
                    Professional & Responsive
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform -rotate-6 hover:-rotate-12 transition-transform duration-300 flex items-center justify-center z-10">
                <div className="text-white text-center">
                  <Zap className="w-12 h-12 mx-auto mb-2" />
                  <div className="font-bold text-sm">Fast</div>
                  <div className="text-xs">Loading</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          className="w-full h-24 fill-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
