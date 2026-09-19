import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useLang } from '../context/LanguageContext.js';
import cvFile from '../assets/Zakaria_Merabet_Ayache_ATS_CV_DEV.pdf';
import './Footer.css';

export default function Footer() {
    const { t, lang } = useLang();
    const footer: any = t('footer');
    const linkedinUrl = "https://www.linkedin.com/in/zakaria-merabet-ayache/";
    const githubUrl = "https://github.com/zakaria-merabet";
    const emailAddr = "zakariamerabetayache@gmail.com";
    const name = lang === 'ar' ? 'زكريا مرابط عياش' : 'ZAKARIA MERABET AYACHE';
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="navbar-logo" style={{ fontSize: '1.5rem' }}>{name}</Link>
                        <p>{footer?.brandDesc}</p>
                    </div>

                    <div className="footer-col">
                        <h4>{footer.col1Title}</h4>
                        <Link to="/services">{footer.links.services}</Link>
                        <Link to="/products">{footer.links.products}</Link>
                        <Link to="/work">{footer.links.work}</Link>
                        <Link to="/about">{footer.links.about}</Link>
                    </div>

                    <div className="footer-col">
                        <h4>{footer.col2Title}</h4>
                        <Link to="/services">{footer.links.businessSites}</Link>
                        <Link to="/services">{footer.links.webApps}</Link>
                        <Link to="/services">{footer.links.managementSystems}</Link>
                        <Link to="/contact">{footer.links.custom}</Link>
                    </div>

                    <div className="footer-col">
                        <h4>{footer.col3Title}</h4>
                        <a href={`mailto:${emailAddr}`}>{footer.links.email}</a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={cvFile} download="Zakaria_Merabet_Ayache_CV.pdf">
                            <Download size={14} style={{ display: 'inline', marginInlineEnd: 6 }} />
                            {footer.links.downloadCv}
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Merabet Ayache Zakaria. {footer.rights}</p>
                    <div className="footer-socials">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        <a href={`mailto:${emailAddr}`} aria-label="Email"><Mail size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
