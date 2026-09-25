import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Github, ExternalLink, ArrowRight, Layers, ShieldCheck, 
    Terminal, GitBranch, Database, Cpu, ZoomIn, CheckCircle2, 
    AlertTriangle, Sparkles, Workflow, Globe2
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './Products.css';

export default function Products() {
    const { t: translate } = useLang();
    const t: any = translate('products');

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const screenshots = t.screenshots || [];
    const lightboxSlides = screenshots.map((s: any) => ({ src: s.src }));

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="product-page">
            {/* HERO SECTION */}
            <section className="product-hero section">
                <div className="container">
                    <motion.div 
                        className="product-hero-inner"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="product-badge">
                            <Sparkles size={14} />
                            <span>{t.heroLabel}</span>
                        </div>
                        <h1 className="product-hero-title">{t.heroTitle}</h1>
                        <p className="product-hero-subtitle">{t.heroSubtitle}</p>

                        <div className="product-hero-actions">
                            <a 
                                href={t.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-product-github"
                            >
                                <Github size={18} />
                                <span>{t.githubBtn}</span>
                                <ExternalLink size={14} />
                            </a>
                            <Link to="/contact" className="btn btn-secondary product-contact-btn">
                                <span>{t.discussBtn}</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* META CHIPS */}
                        {t.metaChips && t.metaChips.length > 0 && (
                            <div className="product-meta-row">
                                {t.metaChips.map((chip: any, i: number) => (
                                    <div className="product-meta-chip" key={i}>
                                        <span className="product-chip-label">{chip.label}</span>
                                        <span className="product-chip-value">{chip.value}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ORIGIN & PHILOSOPHY */}
            {t.philosophyQuote && (
                <section className="section product-philosophy-section">
                    <div className="container">
                        <motion.div 
                            className="glass-card product-philosophy-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="philosophy-header">
                                <div className="section-pill">
                                    <Layers size={14} />
                                    <span>{t.philosophyLabel}</span>
                                </div>
                                <h2 className="philosophy-title">{t.philosophyTitle}</h2>
                            </div>
                            <blockquote className="philosophy-quote-body">
                                {t.philosophyQuote.split('\n\n').map((paragraph: string, idx: number) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </blockquote>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* PROBLEM VS SOLUTION (TWO-COL) */}
            <section className="section product-comparison-section">
                <div className="container">
                    <div className="product-comparison-grid">
                        {/* Problems */}
                        <motion.div 
                            className="glass-card comparison-card problem-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="comparison-header">
                                <div className="comparison-icon icon-danger">
                                    <AlertTriangle size={20} />
                                </div>
                                <div>
                                    <h3 className="comparison-title">{t.problemTitle}</h3>
                                    <p className="comparison-desc">{t.problemDesc}</p>
                                </div>
                            </div>
                            <div className="comparison-list">
                                {t.problemItems && t.problemItems.map((item: any, i: number) => (
                                    <div className="comparison-item" key={i}>
                                        <span className="item-bullet bullet-red" />
                                        <div>
                                            <div className="item-title">{item.title}</div>
                                            <div className="item-desc">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Solutions */}
                        <motion.div 
                            className="glass-card comparison-card solution-card"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="comparison-header">
                                <div className="comparison-icon icon-success">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h3 className="comparison-title">{t.solutionTitle}</h3>
                                    <p className="comparison-desc">{t.solutionDesc}</p>
                                </div>
                            </div>
                            <div className="comparison-list">
                                {t.solutionItems && t.solutionItems.map((item: any, i: number) => (
                                    <div className="comparison-item" key={i}>
                                        <span className="item-bullet bullet-green" />
                                        <div>
                                            <div className="item-title">{item.title}</div>
                                            <div className="item-desc">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TECHNICAL CAPABILITIES & SPECS */}
            <section className="section product-specs-section">
                <div className="container">
                    <div className="section-head-center">
                        <div className="section-pill">
                            <GitBranch size={14} />
                            <span>{t.specsLabel}</span>
                        </div>
                        <h2 className="section-title">{t.specsTitle}</h2>
                        <p className="section-subtitle">{t.specsSubtitle}</p>
                    </div>

                    <div className="specs-grid">
                        {t.specs && t.specs.map((spec: any, i: number) => (
                            <motion.div 
                                className="glass-card spec-card"
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                            >
                                <div className="spec-tag">{spec.tag}</div>
                                <h3 className="spec-title">{spec.title}</h3>
                                <p className="spec-desc">{spec.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ARCHITECTURE PIPELINE */}
            <section className="section product-arch-section">
                <div className="container">
                    <div className="section-head-center">
                        <div className="section-pill">
                            <Workflow size={14} />
                            <span>System Architecture</span>
                        </div>
                        <h2 className="section-title">Decoupled Three-Tier Topology</h2>
                        <p className="section-subtitle">
                            Single-Page App frontend communicating with a stateless Laravel REST API over secure Sanctum sessions.
                        </p>
                    </div>

                    <div className="arch-flow-grid">
                        <motion.div className="glass-card arch-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="arch-card-icon"><Globe2 size={24} /></div>
                            <h4>1. Client Presentation (React 18)</h4>
                            <ul>
                                <li>Multi-Step Wizard with live field validation</li>
                                <li>Runtime CSS Variable Theme Injection</li>
                                <li>Ant Design RTL ConfigProvider for Arabic</li>
                                <li>Stateless Axios client with bearer tokens</li>
                            </ul>
                        </motion.div>

                        <motion.div className="glass-card arch-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <div className="arch-card-icon"><Cpu size={24} /></div>
                            <h4>2. API & Security Layer (Laravel 10)</h4>
                            <ul>
                                <li>NIN Uniqueness & Pre-flight Middleware</li>
                                <li>Sanctum Stateful / Token Authentication</li>
                                <li>Wilaya / Commune Jurisdiction Query Scoping</li>
                                <li>Referral Token Generation & Leaderboards</li>
                            </ul>
                        </motion.div>

                        <motion.div className="glass-card arch-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <div className="arch-card-icon"><Database size={24} /></div>
                            <h4>3. Persistent Storage (MySQL 8)</h4>
                            <ul>
                                <li>party_members table with unique NIN index</li>
                                <li>wilayas & communes normalized geo hierarchy</li>
                                <li>etablissements multi-tenant branding settings</li>
                                <li>Optimized indexes for regional filtering</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SCREENSHOTS / WORKFLOW GALLERY */}
            <section className="section product-screenshots-section">
                <div className="container">
                    <div className="section-head-center">
                        <div className="section-pill">
                            <Terminal size={14} />
                            <span>{t.screenshotsLabel}</span>
                        </div>
                        <h2 className="section-title">{t.screenshotsTitle}</h2>
                        <p className="section-subtitle">{t.screenshotsSubtitle}</p>
                    </div>

                    <div className="product-screenshots-grid">
                        {screenshots.map((s: any, i: number) => (
                            <motion.div 
                                className="product-screenshot-item"
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                onClick={() => openLightbox(i)}
                            >
                                <div className="screenshot-media-wrap">
                                    <img src={s.src} alt={s.title} loading="lazy" />
                                    <div className="screenshot-zoom-overlay">
                                        <ZoomIn size={20} />
                                    </div>
                                </div>
                                <div className="screenshot-info">
                                    <h4>{s.title}</h4>
                                    <p>{s.caption}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH STACK SECTION */}
            <section className="section product-techstack-section">
                <div className="container">
                    <div className="section-head-center">
                        <div className="section-pill">
                            <Terminal size={14} />
                            <span>{t.techStackLabel}</span>
                        </div>
                        <h2 className="section-title">{t.techStackTitle}</h2>
                    </div>

                    <div className="tech-stack-groups">
                        {t.techStackItems && t.techStackItems.map((group: any, i: number) => (
                            <div className="tech-group-card glass-card" key={i}>
                                <h4 className="tech-group-title">{group.category}</h4>
                                <div className="tech-pills-wrap">
                                    {group.items.map((item: string, j: number) => (
                                        <span className="tech-pill" key={j}>
                                            <CheckCircle2 size={13} />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="section product-cta-section">
                <div className="container">
                    <motion.div 
                        className="glass-card product-cta-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cta-github-icon-wrap">
                            <Github size={36} />
                        </div>
                        <h2>{t.ctaTitle}</h2>
                        <p>{t.ctaDesc}</p>
                        <div className="product-cta-actions">
                            <a 
                                href={t.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary btn-cta-github"
                            >
                                <Github size={18} />
                                <span>{t.ctaGithubBtn}</span>
                                <ExternalLink size={15} />
                            </a>
                            <Link to="/contact" className="btn btn-secondary">
                                <span>{t.ctaContactBtn}</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* LIGHTBOX */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={lightboxSlides}
                plugins={[Zoom]}
                zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true }}
                styles={{ container: { backgroundColor: 'rgba(5, 5, 10, 0.94)' } }}
            />
        </div>
    );
}
