import React from 'react';
import { useLang } from '../../context/LangContext';

const CHURCH_MAPS_URL = 'https://www.google.com/maps/place/Kościół+św.+Mikołaja/@52.4637041,17.0667568,602m/data=!3m1!1e3!4m6!3m5!1s0x47045dd73efc547f:0x5500019cf62ccc7b!8m2!3d52.4634815!4d17.0689237!16s%2Fg%2F122g3ywg';

const Ceremony = () => {
  const { t } = useLang();
  const tc = t.ceremony;

  return (
    <section id="ceremony">
      <h2>{tc.title}</h2>
      <a
        href={CHURCH_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="venue-pill-link"
      >
        {tc.address}
      </a>
      <div className="info-card">
        {tc.rows.map((row, i) => (
          <div key={i} className="info-card-row">
            <span className="info-card-label">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
      <div className="map-container">
        <iframe
          className="wedding-map"
          src="https://maps.google.com/maps?q=52.4634815,17.0689237&z=15&output=embed"
          title="Kościół Św. Mikołaja"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Ceremony;
