import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthStore from "./store/useAuthStore";

// Pages
import HomePage from "./pages/HomePage";

function App() {
  const initTheme = useAuthStore((state) => state.initTheme);

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <>
      {/* Luxury SaaS Ambient Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-background">
        <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vh] rounded-full bg-primary/15 blur-[120px] md:blur-[180px] dark:bg-primary/10" />
        <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vh] rounded-full bg-primary/10 blur-[120px] md:blur-[180px] dark:bg-primary/5" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vh] rounded-full bg-primary/15 blur-[120px] md:blur-[180px] dark:bg-primary/10" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
