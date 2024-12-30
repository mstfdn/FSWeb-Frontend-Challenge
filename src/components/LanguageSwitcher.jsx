
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../locale/lang';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const currentLanguage = LANGUAGES[language];

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
    >
      {currentLanguage.button}
    </button>
  );
};

export default LanguageSwitcher;
