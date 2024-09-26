import * as k from "../styles/basic/mainPageBasicStyle";
import { useState } from 'react';

function LanguageSelect() {
  const [selectedLanguage, setSelectedLanguage] = useState('ko');

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <k.languageBox>
      <button
        className={`ko ${selectedLanguage === 'ko' ? 'active' : ''}`}
        onClick={() => handleLanguageClick('ko')}
      >
        한국어
      </button>
      <button
        className={`en ${selectedLanguage === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageClick('en')}
      >
        English
      </button>
    </k.languageBox>
  );
}

export default LanguageSelect;