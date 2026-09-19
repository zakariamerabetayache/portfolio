import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ArrowRight, Users, FileText, Shield, Download, Settings,
    Bell, BarChart3, Lock, CheckCircle
} from 'lucide-react';
import './Products.css';

const screenshots = [
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.22 (1).jpeg', caption: 'Dashboard Overview' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.22 (2).jpeg', caption: 'Registration Form' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.22 (3).jpeg', caption: 'Member Management' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.22.jpeg', caption: 'Admin Panel' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.23 (1).jpeg', caption: 'Reports View' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.23 (2).jpeg', caption: 'Settings & Config' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.23 (3).jpeg', caption: 'Data Export' },
    { src: '/img/WhatsApp Image 2026-02-09 at 07.20.23.jpeg', caption: 'User Roles' },
];

const features = [
    { icon: <Users size={22} />, title: 'Member Registration', desc: 'Online forms with validation, file upload, and consent tracking.' },
    { icon: <FileText size={22} />, title: 'Event Sign-ups', desc: 'Create events, manage RSVPs, and track attendance in one place.' },
    { icon: <Shield size={22} />, title: 'Role-based Access', desc: 'Regional admins, coordinators, and viewers — each with scoped permissions.' },
    { icon: <Download size={22} />, title: 'CSV / PDF Export', desc: 'Export member lists, reports, and analytics for outreach or compliance.' },
    { icon: <Bell size={22} />, title: 'Notifications', desc: 'SMS and email notifications for new sign-ups, events, and reminders.' },
    { icon: <Lock size={22} />, title: 'Security & Consent', desc: 'Audit-friendly design with consent tracking and data protection built in.' },
];

export default function Products() {
    return (
        <>
            {/* Hero */}
            <section className="products-hero section">
                <div className="container">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        Registration App
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        A ready-made registration system for events, political parties, organizations.
                        Get up and running in 48 hours.
                    </motion.p>
                    <motion.div
                        className="products-hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link to="/contact" className="btn btn-primary">
                            Request Demo <ArrowRight size={16} />
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Buy Now
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">App Preview</span>
                        <h2 className="section-title">See It in Action</h2>
                    </div>
                    <div className="screenshots-grid">
                        {screenshots.map((s, i) => (
                            <motion.div
                                className="screenshot-item"
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <img src={s.src} alt={s.caption} />
                                <p>{s.caption}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="section features-section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">Features</span>
                        <h2 className="section-title">Everything You Need</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Built for organizations that need secure, scalable member management.
                        </p>
                    </div>
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <motion.div
                                className="glass-card feature-card"
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="feature-card-icon">{f.icon}</div>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 Ways to Engage */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">Options</span>
                        <h2 className="section-title">3 Ways to Get Started</h2>
                    </div>
                    <div className="engage-grid">
                        {[
                            { num: '1', title: 'Buy As-Is', desc: 'Purchase the product ready to go. No dev time needed. Install, configure, launch.' },
                            { num: '2', title: 'Product + Customization', desc: "Get the product and I'll add branding, custom forms, CRM integration — fast and affordable." },
                            { num: '3', title: 'Fully Custom Build', desc: "Need something unique? I'll build a tailored solution from scratch with the same technical foundation." },
                        ].map((e, i) => (
                            <motion.div
                                className="glass-card engage-card"
                                key={e.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                            >
                                <div className="step-num">{e.num}</div>
                                <h4>{e.title}</h4>
                                <p>{e.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section product-pricing">
                <div className="container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="section-label">Pricing</span>
                        <h2 className="section-title">Simple, Transparent Pricing</h2>
                    </div>
                    <div className="product-pricing-grid">
                        <motion.div
                            className="glass-card product-price-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>SaaS Monthly</h3>
                            <div className="price-tag">$49<span>/month</span></div>
                            <p>Hosted solution with automatic updates, backups, and support. Cancel anytime.</p>
                            <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
                        </motion.div>
                        <motion.div
                            className="glass-card product-price-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3>One-Time License</h3>
                            <div className="price-tag">$499<span> one-time</span></div>
                            <p>Self-hosted white-label license. Full source code, deploy on your server. Setup fee included.</p>
                            <Link to="/contact" className="btn btn-secondary">Get License</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Customizations */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="section-label">Add-ons</span>
                    <h2 className="section-title">Common Customizations</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto var(--sp-2xl)' }}>
                        Many product customers add these popular upgrades.
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
                        {[
                            'Custom Branding', 'Custom Forms', 'CRM Integration', 'Payment Gateway',
                            'SMS Notifications', 'Multi-language', 'Advanced Reporting', 'API Access'
                        ].map(tag => (
                            <span className="product-feature-tag" key={tag} style={{
                                padding: '0.5rem 1rem',
                                background: 'var(--clr-accent-glow)',
                                border: '1px solid rgba(108,92,231,0.15)',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--fs-sm)',
                                fontWeight: 500,
                                color: 'var(--clr-accent-light)',
                            }}>
                                <CheckCircle size={14} /> {tag}
                            </span>
                        ))}
                    </div>
                    <div style={{ marginTop: 'var(--sp-2xl)' }}>
                        <Link to="/contact" className="btn btn-primary">
                            Request Customization <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
