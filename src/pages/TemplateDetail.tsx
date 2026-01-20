import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { templates } from "../data/templates";
import { Check, ArrowRight, Star, Shield, Zap, ChevronLeft } from "lucide-react";

const TemplateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = templates.find((t) => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!template) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Template tidak ditemukan</h2>
        <button
          onClick={() => navigate("/templates")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all"
        >
          Kembali ke Semua Template
        </button>
      </div>
    );
  }

  const isPremium = template.category === "premium";


    
  // Using the colour from the object if it was there (it's not in the shared data, but AllTemplates generates it. Only Templates.tsx had it hardcoded)
  // Let's use a nice gradient based on type.
  const gradient = isPremium 
    ? "from-purple-600 to-pink-600" 
    : "from-blue-500 to-cyan-500";

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
        {/* Breadcrumb / Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
                <ChevronLeft className="w-5 h-5" />
                Kembali
            </button>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image/Preview Area */}
            <div className={`relative h-[400px] lg:h-auto bg-gradient-to-br ${gradient} p-10 flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Decorative Circles */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4">{template.name}</h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
                        {isPremium ? <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /> : <Zap className="w-5 h-5" />}
                        <span className="font-semibold tracking-wide uppercase text-sm">
                            {isPremium ? "Premium Template" : "Basic Template"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Detail Template</h2>
                <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-bold text-gray-900">{template.price}</span>
                <span className="text-gray-500 text-lg">/ license</span>
              </div>

              <div className="space-y-6 mb-10">
                <h3 className="font-semibold text-gray-900">Fitur yang didapatkan:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isPremium ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-green-100 text-green-600">
                        <Shield className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700">Garansi 30 Hari</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/6288989432127?text=Halo%20saya%20tertarik%20dengan%20${encodeURIComponent(template.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 ${
                    isPremium 
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gradient-to-r from-indigo-600 to-blue-600"
                  }`}
                >
                  <span className="text-lg">Beli Sekarang</span>
                  <ArrowRight className="w-6 h-6" />
                </a>
                <p className="text-center text-sm text-gray-500">
                    Pembayaran aman & proses setup cepat via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetail;
