import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { useLang } from '../context/LanguageContext.js';
import './Navbar.css';

const navLinks = {
  en: [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ],
  ar: [
    { path: '/', label: 'الرئيسية' },
    { path: '/services', label: 'الخدمات' },
    { path: '/products', label: 'المنتجات' },
    { path: '/work', label: 'الأعمال' },
    { path: '/about', label: 'حولي' },
    { path: '/contact', label: 'تواصل' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLang();

  const links = navLinks[lang];
  const ctaLabel = lang === 'ar' ? 'لنتحدث' : 'Let\'s Talk';
  const name = lang === 'ar' ? 'زكريا مرابط عياش' : 'ZAKARIA MERABET AYACHE';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">{name}</Link>

          <div className="navbar-links">
            {links.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={location.pathname === l.path ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="navbar-cta">
            <button
              className="lang-toggle"
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              <Languages size={14} />
              <span>{lang === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <Link to="/contact" className="btn btn-primary">{ctaLabel}</Link>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button
          className="lang-toggle lang-toggle-mobile"
          onClick={toggleLang}
          aria-label="Toggle language"
        >
          <Languages size={16} />
          <span>{lang === 'en' ? 'العربية' : 'English'}</span>
        </button>
        {links.map(l => (
          <Link key={l.path} to={l.path}>
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          {ctaLabel}
        </Link>
      </div>
    </>
  );
}
