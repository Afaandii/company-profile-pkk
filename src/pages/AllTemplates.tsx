import { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  Check, 
  ArrowRight, 
  Eye, 
  Crown,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { templates } from "../data/templates";
import { motion, AnimatePresence } from "framer-motion";

const AllTemplates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredTemplates.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTemplates.slice(indexOfFirstItem, indexOfLastItem);

  const categories = ["all", "basic", "premium"];

  // Helper to get color gradient based on index or template properties
  const getGradient = (index: number, category: string) => {
    if (category === 'basic') {
      const basicGradients = [
        "from-blue-500 to-indigo-600",
        "from-purple-500 to-pink-600",
        "from-pink-500 to-rose-600"
      ];
      return basicGradients[index % basicGradients.length];
    } else {
      const premiumGradients = [
        "from-emerald-500 to-teal-600",
        "from-red-500 to-orange-600",
        "from-orange-500 to-amber-600"
      ];
      return premiumGradients[index % premiumGradients.length];
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mkg0djJoMnYtMmgydi0yaC0ydi0ySDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2Mmgydi0yaC0ydi0yaDJ2LTJoMnYyaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 pointer-events-none"></div>

      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Temukan Template Impianmu
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Pilih dari berbagai pilihan template profesional yang siap digunakan untuk 
            meningkatkan kredibilitas bisnis Anda.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-12"
          >
            <div className="relative flex-grow group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
              <input 
                type="text"
                placeholder="Cari nama template..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 shadow-lg shadow-indigo-500/5 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none text-gray-700 hover:shadow-xl hover:shadow-indigo-500/10"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-8 py-3 rounded-full font-bold transition-all duration-300 capitalize overflow-hidden ${
                    isActive
                      ? "text-white shadow-lg shadow-indigo-500/25 scale-105 ring-2 ring-offset-2 ring-indigo-500"
                      : "bg-white text-gray-500 hover:text-gray-900 hover:bg-gray-50 border border-gray-100 hover:border-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {cat === 'all' && <Sparkles className="w-4 h-4" />}
                    {cat === 'all' ? 'Semua Template' : `${cat} Template`}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatePresence mode="wait">
            {currentItems.length > 0 ? (
              <>
                <motion.div 
                  key={`${selectedCategory}-${currentPage}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[800px]" // Prevent layout shift during transition
                >
                  <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {currentItems.map((template, index) => {
                      // Adjust index for gradient continuity across pages
                      const globalIndex = (currentPage - 1) * itemsPerPage + index;
                      const gradient = getGradient(globalIndex, template.category);
                      const isPremium = template.category === 'premium';

                      return (
                        <motion.div
                          key={template.id}
                          layout
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { 
                              opacity: 1, 
                              y: 0,
                              transition: {
                                duration: 0.5,
                                ease: "easeOut"
                              }
                            }
                          }}
                          className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isPremium ? 'border-2 border-amber-200' : ''}`}
                        >
                        {isPremium && (
                          <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <Crown className="w-3 h-3" />
                            <span>PREMIUM</span>
                          </div>
                        )}

                        {/* Template Preview */}
                        <div className={`relative h-64 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="relative z-10 text-white text-center">
                            <div className="text-4xl font-bold mb-2">
                              {template.name}
                            </div>
                            <div className="text-lg opacity-90">
                              {isPremium ? 'Premium Design' : 'Professional Design'}
                            </div>
                          </div>
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-50">
                            <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold flex items-center gap-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                              <Eye className="w-5 h-5" />
                              <span>Preview</span>
                            </button>
                          </div>
                        </div>

                        {/* Template Info */}
                        <div className="p-6 text-left">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-xl font-bold text-gray-900">
                              {template.name}
                            </h4>
                            {!isPremium && (
                              <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                                Basic
                              </div>
                            )}
                          </div>

                          <div className={`text-3xl font-bold mb-6 ${isPremium ? 'text-purple-600' : 'text-indigo-600'}`}>
                            {template.price}
                          </div>

                          {/* Features */}
                          <div className="space-y-3 mb-6">
                            {template.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <button className={`w-full py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn bg-gradient-to-r ${isPremium ? 'from-purple-600 to-pink-600' : 'from-indigo-600 to-purple-600'}`}>
                            <span>Pilih Template</span>
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Pagination UI */}
                  {totalPages > 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-16 flex justify-center items-center gap-2"
                    >
                      <button
                        onClick={() => {
                          setCurrentPage(prev => Math.max(prev - 1, 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === 1}
                        className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCurrentPage(i + 1);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className={`w-12 h-12 rounded-xl font-bold transition-all ${
                            currentPage === i + 1
                              ? "bg-indigo-600 text-white shadow-lg scale-110"
                              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => {
                          setCurrentPage(prev => Math.min(prev + 1, totalPages));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === totalPages}
                        className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300"
              >
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Template tidak ditemukan</h3>
                <p className="text-gray-500 mb-6">Coba kata kunci lain atau reset filter kategori.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setSelectedCategory("all");}}
                  className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all"
                >
                  Reset Pencarian
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default AllTemplates;
