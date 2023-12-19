import React from 'react';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}
const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  enum LanguageEnum {
    RUSSIAN = 'ru',
    ENGLISH = 'en',
  }

  return (
    <select name='lan' id='lan' onChange={toggle}>
      {Object.values(LanguageEnum).map((language) => {
        return (
          <option key={language} value={language}>{t(language)}</option>
      )
      })}
    </select>
  );
};
export default LangSwitcher;
