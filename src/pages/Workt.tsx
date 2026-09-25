import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ZoomIn, ExternalLink, Terminal, Layers, GitBranch } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './Work.css';

export default function Work() {
    const { t: translate } = useLang();
    const t: any = translate('work');

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (images: string[], index: number) => {
        setLightboxSlides(images.map((src) => ({ src })));
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            {/* Hero */}
            <section className="work-hero section">
                <div className="container">
                    <motion.div
                        className="work-hero-inner"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="work-hero-label">
                            <Terminal size={13} />
                            Deep Dives
                        </span>
                        <h1>{t.heroTitle}</h1>
                        <p>{t.heroSubtitle}</p>
                    </motion.div>
                </div>
            </section>

            {/* Case studies */}
            {t.caseStudies.map((cs: any) => (
                <section className="section case-study" key={cs.title}>
                    <div className="container">
                        <motion.div
                            className="case-study-inner"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65 }}
                        >
                            {/* PROJECT HEADER */}
                            <div className="cs-header">
                                <div className="cs-header-left">
                                    <span className="case-category">{cs.category}</span>
                                    <h2 className="cs-title">{cs.title}</h2>
                                    <p className="cs-one-liner">{cs.oneLiner}</p>
                                </div>
                                <div className="cs-header-right">
                                    {cs.github && (
                                        <a href={cs.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                                            <Github size={16} />
                                            {t.labels.viewOnGithub}
                                            <ExternalLink size={13} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* META ROW */}
                            <div className="cs-meta-row">
                                {cs.role && (
                                    <div className="cs-meta-chip">
                                        <span className="meta-chip-label">{t.labels.role}</span>
                                        <span className="meta-chip-value">{cs.role}</span>
                                    </div>
                                )}
                                {cs.tech && (
                                    <div className="cs-meta-chip">
                                        <span className="meta-chip-label">{t.labels.stack}</span>
                                        <span className="meta-chip-value">{cs.tech}</span>
                                    </div>
                                )}
                                {cs.timeline && (
                                    <div className="cs-meta-chip">
                                        <span className="meta-chip-label">{t.labels.timeline}</span>
                                        <span className="meta-chip-value">{cs.timeline}</span>
                                    </div>
                                )}
                                {cs.github && (
                                    <a href={cs.github} target="_blank" rel="noopener noreferrer" className="cs-meta-chip cs-meta-github-chip">
                                        <Github size={13} />
                                        <span className="meta-chip-label">Repo:</span>
                                        <span className="meta-chip-value">{cs.github.replace('https://github.com/', '')}</span>
                                        <ExternalLink size={11} />
                                    </a>
                                )}
                            </div>

                            {/* IMAGES */}
                            <div className="cs-images">
                                {cs.images.slice(0, 4).map((img: string, j: number) => {
                                    const isLast = j === 3;
                                    const remaining = cs.images.length - 4;
                                    return (
                                        <div
                                            className={`cs-img-wrap ${j === 0 ? 'cs-img-featured' : ''}`}
                                            key={j}
                                            onClick={() => openLightbox(cs.images, j)}
                                        >
                                            <img src={img} alt={`${cs.title} screenshot ${j + 1}`} />
                                            <div className={`zoom-overlay ${isLast && remaining > 0 ? 'more-overlay' : ''}`}>
                                                {isLast && remaining > 0 ? (
                                                    <span className="more-count">+{remaining}</span>
                                                ) : (
                                                    <ZoomIn size={18} />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* BODY */}
                            <div className="cs-body">
                                {/* Philosophy */}
                                {cs.philosophy && (
                                    <motion.div className="cs-section cs-philosophy"
                                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                                        <div className="cs-section-label">
                                            <Layers size={14} />
                                            {t.labels.philosophy}
                                        </div>
                                        <blockquote className="philosophy-quote">{cs.philosophy}</blockquote>
                                    </motion.div>
                                )}

                                {/* Problem + Solution */}
                                <div className="cs-two-col">
                                    <motion.div className="cs-section"
                                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
                                        <div className="cs-section-label cs-label-problem">
                                            <span className="label-dot dot-red" />
                                            {t.labels.problem}
                                        </div>
                                        <p className="cs-text">{cs.problem}</p>
                                    </motion.div>
                                    <motion.div className="cs-section"
                                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}>
                                        <div className="cs-section-label cs-label-solution">
                                            <span className="label-dot dot-green" />
                                            {t.labels.solution}
                                        </div>
                                        <p className="cs-text">{cs.solution}</p>
                                    </motion.div>
                                </div>

                                {/* Technical Breakdown */}
                                {cs.techSpec && cs.techSpec.length > 0 && (
                                    <motion.div className="cs-section cs-tech-spec"
                                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                                        <div className="cs-section-label">
                                            <GitBranch size={14} />
                                            {t.labels.techSpec}
                                        </div>
                                        <div className="tech-spec-grid">
                                            {cs.techSpec.map((spec: any, i: number) => (
                                                <div className="tech-spec-item" key={i}>
                                                    <div className="spec-label">{spec.label}</div>
                                                    <div className="spec-detail">{spec.detail}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Tech Stack Tags */}
                                {cs.tags && cs.tags.length > 0 && (
                                    <div className="cs-section cs-tags-section">
                                        <div className="cs-section-label">
                                            <Terminal size={14} />
                                            {t.labels.techStack}
                                        </div>
                                        <div className="tech-bar">
                                            {cs.tags.map((tag: string) => (
                                                <span className="tech-tag" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="section cta-section">
                <div className="container cta-content">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2>{t.ctaHeading}</h2>
                        <p>{t.ctaDesc}</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary">
                                {t.ctaBtn} <ArrowRight size={16} />
                            </Link>
                            <a href="https://github.com/zakariamerabetayache" target="_blank"
                                rel="noopener noreferrer" className="btn btn-secondary">
                                <Github size={16} />
                                {t.ctaBtnGithub}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={lightboxSlides}
                plugins={[Zoom]}
                zoom={{ maxZoomPixelRatio: 5, scrollToZoom: true }}
                styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' } }}
            />
        </>
    );
}
