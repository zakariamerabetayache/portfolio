import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Services.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.12, duration: 0.6 },
    }),
};

export default function Services() {
    const { t: translate } = useLang();
    const t: any = translate('services');

    return (
        <>
            {/* Hero */}
            <section className="services-hero section">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        {t.heroTitle}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        {t.heroSubtitle}
                    </motion.p>
                </div>
            </section>

            {/* Offerings Grid */}
            <section className="section">
                <div className="container">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.span className="section-label" variants={fadeUp}>{t.offeringsLabel}</motion.span>
                    </motion.div>

                    <div className="offerings-grid">
                        {t.offerings.map((item: any, i: number) => (
                            <motion.div
                                className="glass-card offering-card"
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="offering-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        className="tech-stack-line"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {t.techStack}
                    </motion.p>
                </div>
            </section>

            {/* Process */}
            <section className="section" style={{ background: 'var(--clr-bg-secondary)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">{t.processLabel}</span>
                        <h2 className="section-title">{t.processTitle}</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            {t.processSubtitle}
                        </p>
                    </div>
                    <div className="process-steps">
                        {t.process.map((s: any, i: number) => (
                            <motion.div
                                className="glass-card process-step"
                                key={s.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="process-number">{s.num}</div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">{t.faqLabel}</span>
                        <h2 className="section-title">{t.faqTitle}</h2>
                    </div>
                    <div className="faq-grid">
                        {t.faqs.map((f: any, i: number) => (
                            <motion.div
                                className="glass-card faq-item"
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <h4>{f.q}</h4>
                                <p>{f.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section services-cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t.ctaHeading}
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        style={{ margin: '0 auto var(--sp-2xl)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        {t.ctaDesc}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/contact" className="btn btn-primary">
                            {t.ctaBtn} <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
