import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageCircle, Clock, Globe, ArrowUpRight, Send, CheckCircle, AlertTriangle, Loader2, User, AtSign, PhoneCall, FileText, MessageSquare } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import './Contact.css';
import type { ReactNode, ChangeEvent, FormEvent } from 'react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

const initialFormState = { name: '', email: '', phone: '', subject: '', message: '' };

type FormField = keyof typeof initialFormState;
type ErrorsType = Partial<Record<FormField, string>>;
type StatusType = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
    const { t } = useLang();
    const tc: any = t('contact');
    const tf: any = tc.form;

    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState<ErrorsType>({});
    const [status, setStatus] = useState<StatusType>('idle');

    const channels = [
        {
            id: 'whatsapp',
            icon: <MessageCircle size={28} />,
            label: tc.channels.whatsapp,
            value: <span className="ltr">+213 666 928 006</span>,
            desc: tc.channels.whatsappDesc,
            href: 'https://wa.me/213666928006',
            cta: tc.channels.whatsappCta,
            color: '#25D366',
            glow: 'rgba(37, 211, 102, 0.15)',
        },
        {
            id: 'phone',
            icon: <Phone size={28} />,
            label: tc.channels.phone,
            value: <span className="ltr">+213 666 928 006</span>,
            desc: tc.channels.phoneDesc,
            href: 'tel:+213666928006',
            cta: tc.channels.phoneCta,
            color: '#a29bfe',
            glow: 'rgba(162, 155, 254, 0.15)',
        },
        {
            id: 'email',
            icon: <Mail size={28} />,
            label: tc.channels.email,
            value: <span className="ltr">zakariamerabetayache@gmail.com</span>,
            desc: tc.channels.emailDesc,
            href: 'mailto:zakariamerabetayache@gmail.com',
            cta: tc.channels.emailCta,
            color: '#74b9ff',
            glow: 'rgba(116, 185, 255, 0.15)',
        },
    ];

    const details = [
        { icon: <Clock size={18} />, label: tc.meta.responseTime, value: tc.meta.responseTimeVal },
        { icon: <Globe size={18} />, label: tc.meta.availability, value: tc.meta.availabilityVal },
    ];

    /* ── Validation ── */
    function validate(): ErrorsType {
        const errs: ErrorsType = {};
        if (!form.name.trim()) errs.name = tf.validationRequired;
        if (!form.email.trim()) {
            errs.email = tf.validationRequired;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = tf.validationEmail;
        }
        if (!form.message.trim()) errs.message = tf.validationRequired;
        return errs;
    }

    /* ── Handle input ── */
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.currentTarget;
        const field = name as FormField;

        setForm(prev => ({
            ...prev,
            [field]: value,
        }));

        setErrors(prev => {
            if (!prev[field]) return prev;
            const copy = { ...prev };
            delete copy[field];
            return copy;
        });
    }

    /* ── Submit ── */
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setStatus('submitting');
        setErrors({});

        try {

        } catch (err) {

        }
    }

    /* ── Reset after success/error ── */
    function resetForm() {
        setStatus('idle');
        setErrors({});
    }

    return (
        <>
            {/* Hero */}
            <section className="contact-hero section">
                <div className="container">
                    <motion.span
                        className="section-label"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {tc.label}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {tc.heading}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {tc.desc}
                    </motion.p>
                </div>
            </section>

            {/* Contact Channels */}
            <section className="section contact-channels-section">
                <div className="container">
                    <div className="contact-channels">
                        {channels.map((ch: {
                            id: string,
                            icon: ReactNode, label: string,
                            value: ReactNode, desc: string, href: string,
                            cta: string, color: string, glow: string
                        }
                            , i: number) => (

                            <motion.a
                                key={ch.id}
                                href={ch.href}
                                target={ch.id !== 'phone' ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="contact-channel-card"
                                style={{ '--ch-color': ch.color, '--ch-glow': ch.glow } as any}
                                variants={fadeUp as any}
                                initial="hidden"
                                animate="visible"
                                custom={i as any}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            >
                                <div className="ch-icon-wrap">
                                    {ch.icon}
                                </div>
                                <div className="ch-label">{ch.label}</div>
                                <div className="ch-value">{ch.value}</div>
                                <p className="ch-desc">{ch.desc}</p>
                                <span className="ch-cta">
                                    {ch.cta} <ArrowUpRight size={15} />
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Meta info */}
                    <motion.div
                        className="contact-meta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {details.map(d => (
                            <div className="contact-meta-item" key={d.label}>
                                <span className="meta-icon">{d.icon}</span>
                                <div>
                                    <span className="meta-label">{d.label}</span>
                                    <span className="meta-value">{d.value}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── Contact Form ── */}
            <section className="section contact-form-section">
                <div className="container">
                    <motion.div
                        className="form-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">{tf.title}</span>
                        <h2 className="section-title">{tf.title}</h2>
                        <p className="section-subtitle">{tf.subtitle}</p>
                    </motion.div>

                    <motion.div
                        className="form-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    className="form-status form-success"
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="status-icon success-icon">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3>{tf.successTitle}</h3>
                                    <p>{tf.successDesc}</p>
                                    <button className="btn btn-secondary" onClick={resetForm}>
                                        {tf.sendAnother}
                                    </button>
                                </motion.div>
                            ) : status === 'error' ? (
                                <motion.div
                                    className="form-status form-error"
                                    key="error"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="status-icon error-icon">
                                        <AlertTriangle size={48} />
                                    </div>
                                    <h3>{tf.errorTitle}</h3>
                                    <p>{tf.errorDesc}</p>
                                    <button className="btn btn-primary" onClick={resetForm}>
                                        {tf.retry}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="contact-form"
                                >
                                    {/* Row: Name + Email */}
                                    <div className="form-row">
                                        <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                            <label htmlFor="cf-name">
                                                <User size={14} />
                                                {tf.name}
                                            </label>
                                            <input
                                                id="cf-name"
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder={tf.namePlaceholder}
                                                disabled={status === 'submitting'}
                                            />
                                            {errors.name && <span className="field-error">{errors.name}</span>}
                                        </div>
                                        <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                            <label htmlFor="cf-email">
                                                <AtSign size={14} />
                                                {tf.email}
                                            </label>
                                            <input
                                                id="cf-email"
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder={tf.emailPlaceholder}
                                                disabled={status === 'submitting'}
                                            />
                                            {errors.email && <span className="field-error">{errors.email}</span>}
                                        </div>
                                    </div>

                                    {/* Row: Phone + Subject */}
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="cf-phone">
                                                <PhoneCall size={14} />
                                                {tf.phone}
                                                <span className="optional-tag">{tf.optional}</span>
                                            </label>
                                            <input
                                                id="cf-phone"
                                                type="tel"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder={tf.phonePlaceholder}
                                                disabled={status === 'submitting'}
                                                className="ltr"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cf-subject">
                                                <FileText size={14} />
                                                {tf.subject}
                                                <span className="optional-tag">{tf.optional}</span>
                                            </label>
                                            <input
                                                id="cf-subject"
                                                type="text"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                placeholder={tf.subjectPlaceholder}
                                                disabled={status === 'submitting'}
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                                        <label htmlFor="cf-message">
                                            <MessageSquare size={14} />
                                            {tf.message}
                                        </label>
                                        <textarea
                                            id="cf-message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder={tf.messagePlaceholder}
                                            rows={5}
                                            disabled={status === 'submitting'}
                                        />
                                        {errors.message && <span className="field-error">{errors.message}</span>}
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary form-submit"
                                        disabled={status === 'submitting'}
                                    >
                                        {status === 'submitting' ? (
                                            <>
                                                <Loader2 size={18} className="spin" />
                                                {tf.sending}
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                {tf.send}
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}