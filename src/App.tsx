import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import IndustriesPage from "./pages/IndustriesPage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import QualityPage from "./pages/QualityPage";
import MaterialsPage from "./pages/MaterialsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
/* New routes */
import EquipmentPage from "./pages/EquipmentPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CostAdvantagePage from "./pages/CostAdvantagePage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import QuotePage from "./pages/QuotePage";
import ThankYouPage from "./pages/ThankYouPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Newly added approved routes (nav will be wired later) */}
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/cost-advantage" element={<CostAdvantagePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          {/* Alias /request-quote -> /quote */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
