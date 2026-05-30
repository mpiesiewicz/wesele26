import React from 'react';
import { useLang } from '../../context/LangContext';

const Accommodation = () => {
  const { t } = useLang();
  const ta = t.accommodation;

  return (
    <section id="accommodation">
      <h2>{ta.title}</h2>
      <div className="info-card">
        {ta.rows.map((row, i) => (
          <div key={i} className="info-card-row">
            <span className="info-card-label">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accommodation;
