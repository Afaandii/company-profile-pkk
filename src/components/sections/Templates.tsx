import {
  Check,
  Star,
  Sparkles,
  Crown,
  Zap,
  ArrowRight,
  Eye,
} from "lucide-react";
import { useState } from "react";

const Templates = () => {
  const [activeTab, setActiveTab] = useState("all");

  const basicTemplates = [
    {
      id: 1,
      name: "Template A",
      category: "Basic",
      price: "80.000",
      color: "from-blue-500 to-indigo-600",
      features: [
        "Company profile",
        "Product showcase",
        "Contact form",
        "Responsive design",
      ],
    },
    {
      id: 2,
      name: "Template B",
      category: "Basic",
      price: "80.000",
      color: "from-purple-500 to-pink-600",
      features: [
        "Company profile",
        "Product showcase",
        "Contact form",
        "Responsive design",
      ],
    },
    {
      id: 3,
      name: "Template C",
      category: "Basic",
      price: "80.000",
      color: "from-pink-500 to-rose-600",
      features: [
        "Company profile",
        "Product showcase",
        "Contact form",
        "Responsive design",
      ],
    },
  ];

  const premiumTemplates = [
    {
      id: 4,
      name: "Template A",
      category: "Premium",
      price: "150.000",
      color: "from-emerald-500 to-teal-600",
      features: [
        "Semua fitur Basic",
        "Produk unggulan",
        "Akses update",
        "3 revisi",
      ],
    },
    {
      id: 5,
      name: "Template B",
      category: "Premium",
      price: "150.000",
      color: "from-red-500 to-orange-600",
      features: [
        "Semua fitur Basic",
        "Produk unggulan",
        "Akses update",
        "3 revisi",
      ],
    },
    {
      id: 6,
      name: "Template C",
      category: "Premium",
      price: "150.000",
      color: "from-orange-500 to-amber-600",
      features: [
        "Semua fitur Basic",
        "Produk unggulan",
        "Akses update",
        "3 revisi",
      ],
    },
  ];

  const allTemplates = [...basicTemplates, ...premiumTemplates];

  const getFilteredTemplates = () => {
    if (activeTab === "basic") return basicTemplates;
    if (activeTab === "premium") return premiumTemplates;
    return allTemplates;
  };

  return (
    <section id="templates" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mkg0djJoMnYtMmgydi0yaC0ydi0ySDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-900">
              Our Templates
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pilihan Template
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih template yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "basic", "premium"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {tab === "all"
                ? "Semua Template"
                : tab === "basic"
                ? "Basic"
                : "Premium"}
            </button>
          ))}
        </div>

        {/* Basic Section Header */}
        {(activeTab === "all" || activeTab === "basic") && (
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Kategori Basic
                </h3>
                <p className="text-2xl font-bold text-indigo-600">Rp 80.000</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
                <span className="text-sm font-semibold text-blue-900">
                  Popular Choice
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Basic Templates Grid */}
        {(activeTab === "all" || activeTab === "basic") && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {basicTemplates.map((template, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Template Preview */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${template.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="text-5xl font-bold mb-2">
                      {template.name}
                    </div>
                    <div className="text-lg opacity-90">
                      Professional Design
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold flex items-center gap-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      {template.name} - {template.category}
                    </h4>
                    <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      Basic
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-indigo-600 mb-6">
                    Rp {template.price}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {template.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn">
                    <span>Pilih Template</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Premium Section Header */}
        {(activeTab === "all" || activeTab === "premium") && (
          <div className="mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Kategori Premium
                </h3>
                <p className="text-2xl font-bold text-purple-600">Rp 150.000</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full">
                <Crown className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-900">
                  Best Value
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Premium Templates Grid */}
        {(activeTab === "all" || activeTab === "premium") && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {premiumTemplates.map((template, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-amber-200"
              >
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  <span>PREMIUM</span>
                </div>

                {/* Template Preview */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${template.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-white text-center">
                    <div className="text-5xl font-bold mb-2">
                      {template.name}
                    </div>
                    <div className="text-lg opacity-90">Premium Design</div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold flex items-center gap-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-5 h-5" />
                      <span>Preview</span>
                    </button>
                  </div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-900">
                      {template.name} - {template.category}
                    </h4>
                  </div>

                  <div className="text-3xl font-bold text-purple-600 mb-6">
                    Rp {template.price}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {template.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn">
                    <span>Pilih Template</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Template CTA */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&q=80"
              alt="Custom Template"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:py-24 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold">Custom Solution</span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Kategori Custom
            </h3>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-2xl md:text-3xl font-bold">Mulai dari</span>
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Rp 200.000
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Template custom sesuai kebutuhan brand kamu. Desain unik, fitur
              khusus, dan unlimited revisi untuk hasil yang sempurna.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
              {[
                { icon: <Zap className="w-6 h-6" />, text: "Desain Unik" },
                { icon: <Star className="w-6 h-6" />, text: "Fitur Khusus" },
                {
                  icon: <Crown className="w-6 h-6" />,
                  text: "Unlimited Revisi",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-left">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="px-10 py-4 bg-white text-indigo-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3 mx-auto group">
              <span>Pesan Custom</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
