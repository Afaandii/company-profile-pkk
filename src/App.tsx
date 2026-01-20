import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";
import AllTemplates from "./pages/AllTemplates";
import TemplateDetail from "./pages/TemplateDetail";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/templates" element={<AllTemplates />} />
        <Route path="/templates/:id" element={<TemplateDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
