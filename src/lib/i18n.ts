// i18n configuration for Arabic and English support
export const languages = {
  en: 'English',
  ar: 'العربية',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      webDevelopment: 'Web Development',
      cybersecurity: 'Cybersecurity',
      backend: 'Back-End',
      desktopApps: 'Desktop Apps',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    // Common
    common: {
      readMore: 'Read More',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      phone: 'Phone',
      email: 'Email',
      facebook: 'Facebook',
      allRightsReserved: 'All rights reserved',
    },
    // Blog
    blog: {
      title: 'OrcaTech Blog',
      description: 'Tutorials, insights, and guides on cybersecurity, web development, and backend systems.',
      noArticles: 'No articles found',
    },
  },
  ar: {
    // Navigation
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      webDevelopment: 'تطوير الويب',
      cybersecurity: 'الأمن السيبراني',
      backend: 'الخادم الخلفي',
      desktopApps: 'تطبيقات سطح المكتب',
      portfolio: 'المحفظة',
      blog: 'المدونة',
      contact: 'اتصل بنا',
    },
    // Common
    common: {
      readMore: 'اقرأ المزيد',
      contactUs: 'اتصل بنا',
      learnMore: 'تعرف على المزيد',
      getStarted: 'ابدأ الآن',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      facebook: 'فيسبوك',
      allRightsReserved: 'جميع الحقوق محفوظة',
    },
    // Blog
    blog: {
      title: 'مدونة OrcaTech',
      description: 'دروس ورؤى وأدلة حول الأمن السيبراني وتطوير الويب والأنظمة الخلفية.',
      noArticles: 'لم يتم العثور على مقالات',
    },
  },
} as const;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
