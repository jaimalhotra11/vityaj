import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'Français' },
  { code: 'sw', name: 'Kiswahili' },
  { code: 'ha', name: 'Hausa' },
  { code: 'am', name: 'አማርኛ' }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
        <Globe className="w-5 h-5" />
        <span>{currentLanguage.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-rose-50 dark:hover:bg-gray-700 transition-colors ${
              i18n.language === lang.code 
                ? 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-gray-700' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;