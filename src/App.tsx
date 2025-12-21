import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const QualityPage = lazy(() => import("./pages/QualityPage"));
const MaterialsPage = lazy(() => import("./pages/MaterialsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const EquipmentPage = lazy(() => import("./pages/EquipmentPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CostAdvantagePage = lazy(() => import("./pages/CostAdvantagePage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const QuotePage = lazy(() => import("./pages/QuotePage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/capabilities" element={<CapabilitiesPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/materials" element={<CapabilitiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/equipment" element={<EquipmentPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/cost-advantage" element={<CostAdvantagePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
