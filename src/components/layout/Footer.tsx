// src/components/layout/Footer.tsx
import React from "react";
import { Instagram, MessageCircle, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* 1. Brand Section (Left) */}
          <div className="text-center md:text-left md:w-1/3">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
               <img
                    src="/images/sync-logo.png"
                    alt="SyncDev Logo"
                    className="h-10 w-auto brightness-200"
                />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Solusi template website profesional untuk bisnis Anda.
            </p>
          </div>

          {/* 2. Quick Links (Center - Horizontal) */}
          <div className="md:w-1/3">
            <ul className="flex flex-wrap justify-center gap-8">
              {['Home', 'Templates', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white font-medium transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Socials (Right) */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="flex flex-col items-center">
                <h4 className="font-bold mb-4 hidden md:block">Follow Us</h4>
                <div className="flex gap-4">
                <a
                    href="https://instagram.com/pkk.rpl.2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                >
                    <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                >
                    <MessageCircle size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                    href="mailto:info@syncdev.com"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group"
                >
                    <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 SyncDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
