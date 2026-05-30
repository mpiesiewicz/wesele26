import React from 'react';
import { useScroll } from '../../hooks/useScroll';
import { useLang } from '../../context/LangContext';
import '../../styles/Components/Navigation.css';

const Navigation = () => {
  const { scrollToSection } = useScroll();
  const { lang, setLang, t } = useLang();

  return (
    <nav>
      <div className="nav-links">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t.nav.home}</a>
        <a href="#ceremony" onClick={(e) => scrollToSection(e, 'ceremony')}>{t.nav.ceremony}</a>
        <a href="#directions" onClick={(e) => scrollToSection(e, 'directions')}>{t.nav.directions}</a>
        <a href="#tables" onClick={(e) => scrollToSection(e, 'tables')}>{t.nav.tables}</a>
        <a href="#accommodation" onClick={(e) => scrollToSection(e, 'accommodation')}>{t.nav.accommodation}</a>
        <a href="#afterparty" onClick={(e) => scrollToSection(e, 'afterparty')}>{t.nav.afterparty}</a>
      </div>
      <div className="nav-lang">
        {['pl', 'en', 'de'].map(l => (
          <button
            key={l}
            className={`nav-lang-btn${lang === l ? ' active' : ''}`}
            onClick={() => setLang(l)}
          >
            {l === 'pl' ? '🇵🇱' : l === 'en' ? '🇬🇧' : '🇩🇪'}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
