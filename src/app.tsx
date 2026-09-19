import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}



function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppLayout />
      <Footer />
    </BrowserRouter>
  );
}
