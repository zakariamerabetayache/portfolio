import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import cvFile from '../assets/Zakaria_Merabet_Ayache_ATS_CV_DEV.pdf';
import { useLang } from '../context/LanguageContext';
import './Home.css';

// type TService = {
//     title: string;
//     desc: string;
//     icon: string;
// };

// type TTrustBarItem = {
//     number: string;
//     label: string;
// };

// type TTransHome = {
//     badge: string;
//     heroH1: string;
//     heroDesc: string;
//     trustMicro: string;
//     ctaPrimary: string;
//     ctaSecondary: string;
//     trustBar: TTrustBarItem[];
//     servicesLabel: string;
//     servicesTitle: string;
//     servicesSubtitle: string;
//     services: TService[];
//     viewAllServices: string;
//     productLabel: string;
//     productTitle: string;
//     productSubtitle: string;
//     featuredProject: string;
//     viewProject: string;
//     ctaFinal: string;
// };


const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export default function Home() {
    const { t: translate } = useLang();
    const t: any = translate('home');

    return (
        <>
            {/* ===== HERO ===== */}
            <section className="hero">
                <div className="container hero-content">
                    <motion.div className="hero-text" initial="hidden" animate="visible">
                        <motion.div className="hero-badge" variants={fadeUp} custom={0}>
                            <span className="dot" /> {t.badge}
                        </motion.div>

                        <motion.h1 variants={fadeUp} custom={1}>
                            {t.heroH1}
                        </motion.h1>

                        <motion.p className="hero-desc" variants={fadeUp} custom={2}>
                            {t.heroDesc}
                        </motion.p>

                        <motion.p className="hero-trust-micro" variants={fadeUp} custom={2.5}>
                            {t.trustMicro}
                        </motion.p>

                        <motion.div className="hero-actions" variants={fadeUp} custom={3}>
                            <Link to="/contact" className="btn btn-primary">
                                {t.ctaPrimary} <ArrowRight size={16} />
                            </Link>
                            <a href={cvFile} download="Zakaria_Merabet_Ayache_CV.pdf" className="btn btn-secondary">
                                {t.ctaSecondary} <Download size={16} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="hero-image-glow" />
                        <div className="hero-image-wrapper">
                            <img src="/img/pesonelimage.jpg" alt="Merabet Ayache Zakaria" />
                        </div>
                    </motion.div>
                </div >
            </section >

            {/* ===== TRUST BAR ===== */}
            < section className="trust-bar" >
                <div className="container trust-bar-inner">
                    {t.trustBar.map((item, i) => (
                        <motion.div
                            className="trust-item"
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="number">{item.number}</div>
                            <div className="label">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section >

            {/* ===== SERVICES PREVIEW ===== */}
            < section className="section services-preview" >
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.span className="section-label" variants={fadeUp}>{t.servicesLabel}</motion.span>
                        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
                            {t.servicesTitle}
                        </motion.h2>
                        <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
                            {t.servicesSubtitle}
                        </motion.p>
                    </motion.div>

                    <div className="services-grid">
                        {t.services.map((s, i) => (
                            <motion.div
                                className="glass-card service-card"
                                key={s.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <div className="service-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--sp-2xl)' }}>
                        <Link to="/services" className="btn btn-ghost">
                            {t.viewAllServices} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section >

            {/* ===== PRODUCT HIGHLIGHT ===== */}
            {/* <section className="section product-highlight">
                <div className="container">
                    <span className="section-label">{t.productLabel}</span>
                    <h2 className="section-title">{t.productTitle}</h2>

                    <div className="product-highlight-inner">
                        <motion.div
                            className="product-screens"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="product-screen">
                                <img src="/img/WhatsApp Image 2026-02-09 at 07.20.22 (1).jpeg" alt="Registration Dashboard" />
                            </div>
                            <div className="product-screen">
                                <img src="/img/WhatsApp Image 2026-02-09 at 07.20.23 (1).jpeg" alt="Registration Form" />
                            </div>
                            <div className="product-screen">
                                <img src="/img/WhatsApp Image 2026-02-09 at 07.20.23 (2).jpeg" alt="Members List" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="product-info"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3>{t.productHeading}</h3>
                            <p>{t.productDesc}</p>

                            <div className="product-features">
                                {t.productFeatures.map(f => (
                                    <span className="product-feature-tag" key={f}>
                                        <CheckCircle size={12} /> {f}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <Link to="/products" className="btn btn-primary">
                                    {t.productCta} <ArrowRight size={16} />
                                </Link>
                                <Link to="/contact" className="btn btn-secondary">
                                    {t.productCtaSecondary}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* ===== FEATURED WORK ===== */}
            <section className="section featured-work">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.span className="section-label" variants={fadeUp}>{t.portfolioLabel}</motion.span>
                        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
                            {t.portfolioTitle}
                        </motion.h2>
                        <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
                            {t.portfolioSubtitle}
                        </motion.p>
                    </motion.div>

                    <div className="featured-grid">
                        {t.projects.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <Link to="/work" className="glass-card project-card" style={{ display: 'block' }}>
                                    <div className="project-thumb">
                                        <img src={p.thumb} alt={p.title} />
                                        <div className="project-thumb-overlay" />
                                    </div>
                                    <div className="project-body">
                                        {/* <div className="project-category">{p.category}</div> */}
                                        <h3>{p.title}</h3>
                                        <p>{p.desc}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 'var(--sp-2xl)' }}>
                        <Link to="/work" className="btn btn-ghost">
                            {t.viewCaseStudies} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="section cta-section">
                <div className="container cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.ctaHeading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t.ctaDesc}
                    </motion.p>
                    <motion.div
                        className="cta-actions"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/contact" className="btn btn-primary">
                            {t.ctaBtn} <ArrowRight size={16} />
                        </Link>
                        <Link to="/services" className="btn btn-secondary">
                            {t.ctaServices}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
