import { createContext, useContext, useState, useEffect } from 'react';
import translations from '../local/translation';

type language = "ar" | "en";
type LanguageContextType = {
  lang: language;
  toggleLang: () => void;
  changeLanguage: (newLang: language) => void;
  translate: (key: string) => string;
  t: (key: string) => any;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);



export function LanguageProvider({ children }: { children: React.ReactNode }) {








  const [lang, setLang] = useState<language>(() => {
    return localStorage.getItem('portfolio-lang') as language || 'en';
  });

  const changeLanguage = (newLang: language) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const translate = (key: string) => {
    try {
      const keys = key.split('.');
      let current = translations[lang];
      for (const k of keys) {
        if (
          current === undefined ||
          current === null ||
          typeof current !== 'object' ||
          !(k in current)
        ) {
          current = undefined;
          break;
        }

        current = (current as Record<string, unknown>)[k];
      }
      if (current !== undefined) return current;

      // Fallback to English
      let fallback = translations.en;
      for (const k of keys) {
        if (fallback === undefined) break;
        fallback = fallback[k];
      }

      if (fallback !== undefined) return fallback;

      return key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => changeLanguage(lang === 'en' ? 'ar' : 'en');

  return (
    <LanguageContext.Provider value={{
      lang,
      toggleLang,
      changeLanguage,
      translate,
      t: translate,
      isRTL: lang === 'ar'
    } as LanguageContextType}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
