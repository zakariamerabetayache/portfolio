import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './Work.css';

export default function Work() {
    const { t: translate } = useLang();
    const t = translate('work');

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxSlides, setLightboxSlides] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (images, index) => {
        setLightboxSlides(images.map(src => ({ src })));
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <>
            {/* Hero */}
            <section className="work-hero section">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.heroTitle}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        {t.heroSubtitle}
                    </motion.p>
                </div>
            </section>

            {/* Case studies */}
            {t.caseStudies.map((cs, i) => (
                <section className="section case-study" key={cs.title}>
                    <div className="container">
                        <motion.div
                            className="case-study-inner"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="case-study-images">
                                {cs.images.slice(0, 3).map((img, j) => {
                                    const isLastVisible = j === 2;
                                    const remainingCount = cs.images.length - 3;

                                    return (
                                        <div
                                            className="case-study-img-wrapper"
                                            key={j}
                                            onClick={() => openLightbox(cs.images, j)}
                                        >
                                            <img src={img} alt={`${cs.title} screenshot ${j + 1}`} />
                                            <div className={`zoom-overlay ${isLastVisible && remainingCount > 0 ? 'more-overlay' : ''}`}>
                                                {isLastVisible && remainingCount > 0 ? (
                                                    <span className="more-count">+{remainingCount}</span>
                                                ) : (
                                                    <ZoomIn size={20} />
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="case-study-text">
                                <div className="case-category">{cs.category}</div>
                                <h3>{cs.title}</h3>
                                <p className="one-liner">{cs.oneLiner}</p>

                                {(cs.role || cs.tech || cs.timeline) && (
                                    <div className="case-meta">
                                        {cs.role && (
                                            <div className="case-meta-item">
                                                <div className="meta-label">{t.labels.role}</div>
                                                <div className="meta-value">{cs.role}</div>
                                            </div>
                                        )}
                                        {cs.tech && (
                                            <div className="case-meta-item">
                                                <div className="meta-label">{t.labels.stack}</div>
                                                <div className="meta-value">{cs.tech}</div>
                                            </div>
                                        )}
                                        {cs.timeline && (
                                            <div className="case-meta-item">
                                                <div className="meta-label">{t.labels.timeline}</div>
                                                <div className="meta-value">{cs.timeline}</div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="case-body">
                                    <h4>{t.labels.problem}</h4>
                                    <p>{cs.problem}</p>
                                    <h4>{t.labels.approach}</h4>
                                    <p>{cs.approach}</p>
                                    <h4>{t.labels.solution}</h4>
                                    <p>{cs.solution}</p>
                                    <h4>{t.labels.impact}</h4>
                                    <p>{cs.impact}</p>
                                </div>

                                <div className="case-learnings">
                                    <strong>{t.labels.keyLearnings}</strong>
                                    <p>{cs.learning}</p>
                                </div>

                                <div className="tech-bar">
                                    {cs.tags.map(tag => (
                                        <span className="tech-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="section cta-section">
                <div className="container cta-content">
                    <h2>{t.ctaHeading}</h2>
                    <p>{t.ctaDesc}</p>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn btn-primary">
                            {t.ctaBtn} <ArrowRight size={16} />
                        </Link>

                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={lightboxSlides}
                plugins={[Zoom]}
                zoom={{
                    maxZoomPixelRatio: 5,
                    scrollToZoom: true,
                }}
                styles={{
                    container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
                }}
            />
        </>
    );
}
