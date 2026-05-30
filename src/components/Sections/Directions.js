import React from 'react';
import { useLang } from '../../context/LangContext';
import '../../styles/Sections/Directions.css';

const VENUE_MAPS_URL = 'https://maps.app.goo.gl/GY9usFmmW4E5TvHC6';

const Directions = () => {
  const { t } = useLang();
  const td = t.directions;

  return (
    <section id="directions">
      <h2>{td.title}</h2>
      <a
        href={VENUE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="directions-address-card"
      >
        {td.address}
      </a>

      <div className="map-container">
        <iframe
          className="wedding-map"
          src="https://maps.google.com/maps?q=52.4576549,17.1804501&z=15&output=embed"
          title="Siedem Drzew"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="directions-steps">
        <div className="directions-steps-header">{td.howToGet}</div>
        <ol>
          {td.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Directions;
