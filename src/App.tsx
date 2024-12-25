import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/social" element={<div>Social (Coming Soon)</div>} />
          <Route path="/games" element={<div>Games (Coming Soon)</div>} />
          <Route path="/health" element={<div>Health (Coming Soon)</div>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/zencoins" element={<div>Zencoins (Coming Soon)</div>} />
          <Route path="/lucky-draw" element={<div>Lucky Draw (Coming Soon)</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;