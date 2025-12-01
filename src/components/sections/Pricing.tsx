import { Check, Star, Zap, Crown, Sparkles, ArrowRight } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "Rp 80.000",
      description: "Perfect untuk startup",
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Company profile",
        "Desain menarik",
        "Kontak pembelian",
        "1x revisi",
        "Responsive design",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      name: "Premium",
      price: "Rp 150.000",
      description: "Paling populer",
      popular: true,
      gradient: "from-indigo-600 to-purple-600",
      features: [
        "Semua fitur Basic",
        "Produk unggulan",
        "Akses update",
        "3x revisi",
        "SEO friendly",
        "Fast loading",
      ],
      icon: <Crown className="w-6 h-6" />,
    },
    {
      name: "Custom",
      price: "Mulai 200k",
      description: "Sesuai kebutuhan Anda",
      popular: false,
      gradient: "from-pink-500 to-rose-500",
      features: [
        "Desain sesuai brand",
        "Unlimited revisi",
        "Fitur khusus",
        "Konsultasi gratis",
        "Support prioritas",
      ],
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mkg0djJoMnYtMmgydi0yaC0ydi0ySDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <Star className="w-4 h-4 text-indigo-600 fill-indigo-600" />
            <span className="text-sm font-semibold text-indigo-900">
              Pricing Plans
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Paket Harga
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket
            sudah termasuk hosting gratis!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? "md:-mt-6 md:mb-6" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-white" />
                    <span>POPULER</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl scale-105 hover:scale-110"
                    : "bg-white shadow-lg hover:shadow-2xl hover:scale-105 border border-gray-100"
                }`}
              >
                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/50 to-purple-400/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                      plan.popular
                        ? "bg-white/20 backdrop-blur-sm text-white"
                        : `bg-gradient-to-br ${plan.gradient} text-white`
                    } shadow-lg`}
                  >
                    {plan.icon}
                  </div>

                  {/* Plan Name & Description */}
                  <div className="mb-6">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        plan.popular ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div
                      className={`text-4xl font-bold mb-1 ${
                        plan.popular
                          ? "text-white"
                          : `bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`
                      }`}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={`text-sm ${
                        plan.popular ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      Pembayaran satu kali
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.popular
                              ? "bg-white/20 backdrop-blur-sm"
                              : "bg-green-100"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.popular ? "text-white" : "text-green-600"
                            }`}
                          />
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            plan.popular ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn ${
                      plan.popular
                        ? "bg-white text-indigo-600 hover:bg-gray-50 shadow-lg"
                        : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-xl`
                    }`}
                  >
                    <span>Pilih Paket</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Decorative Corner */}
                {!plan.popular && (
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.gradient} opacity-5 rounded-bl-full`}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Check className="w-6 h-6" />, text: "Garansi 30 Hari" },
            { icon: <Zap className="w-6 h-6" />, text: "Setup Cepat" },
            { icon: <Star className="w-6 h-6" />, text: "Support 24/7" },
            { icon: <Crown className="w-6 h-6" />, text: "Kualitas Premium" },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-3">
                {badge.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Masih bingung memilih paket yang tepat?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
            <span>Hubungi Kami</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
