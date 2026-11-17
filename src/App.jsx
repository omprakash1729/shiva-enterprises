import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingContact } from "@/components/site/FloatingContact";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { ServicesCataloguePage } from "@/pages/ServicesCataloguePage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesCataloguePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
      <FloatingContact />
      <Toaster position="bottom-right" richColors />
    </BrowserRouter>
  );
}
