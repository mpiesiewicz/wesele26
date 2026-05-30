import React from 'react';
import { useLang } from '../../context/LangContext';
import '../../styles/Sections/Home.css';

const Home = () => {
  const { t } = useLang();

  return (
    <section id="home">
      <div id="home-container">
        <p className="home-subtitle">{t.home.subtitle}</p>
        <div id="names-title">
          <h1>
            <span>{t.home.names[0]}</span>
            <span className="names-ampersand">{t.home.names[1]}</span>
            <span>{t.home.names[2]}</span>
          </h1>
        </div>
        <p className="home-date">{t.home.date}</p>
        <div className="home-divider"><span>♡</span></div>
        <div className="home-welcome">
          <p>{t.home.welcome1}</p>
          <p>{t.home.welcome2}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
