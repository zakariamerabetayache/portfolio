import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './About.css';

export default function About() {
    const { t: translate } = useLang();
    const t: any = translate('about');

    return (
        <>
            {/* Hero */}
            <section className="about-hero section">
                <div className="container">
                    <motion.div
                        className="about-hero-inner"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-photo">
                            <img src="/img/pesonelimage.jpg" alt="Merabet Ayache Zakaria" />
                        </div>
                        <div className="about-intro">
                            <h1>{t.heroName}</h1>
                            <p>{t.heroP1}</p>
                            <p>{t.heroP2}</p>
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary">
                                    {t.ctaBtn} <ArrowRight size={16} />
                                </Link>
                                <a href="/cv-merabet-ayache-zakaria.pdf" download className="btn btn-secondary">
                                    <Download size={16} /> {t.cvBtn}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section className="section skills-section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">{t.skillsLabel}</span>
                        <h2 className="section-title">{t.skillsTitle}</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            {t.skillsSubtitle}
                        </p>
                    </div>
                    <div className="skills-grid">
                        {t.skills.map((s, i) => (
                            <motion.div
                                className="skill-group"
                                key={s.group}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h4>{s.group}</h4>
                                <div className="skill-tags">
                                    {s.items.map(item => (
                                        <span className="skill-tag" key={item}>{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container cta-content">
                    <h2>{t.ctaHeading}</h2>
                    <p>{t.ctaDesc}</p>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn btn-primary">
                            {t.ctaActionBtn} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
