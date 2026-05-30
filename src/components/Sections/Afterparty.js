import React from 'react';
import { useLang } from '../../context/LangContext';

const Afterparty = () => {
  const { t } = useLang();
  const ta = t.afterparty;

  return (
    <section id="afterparty">
      <h2>{ta.title}</h2>
      <div className="info-card">
        {ta.rows.map((row, i) => (
          <div key={i} className="info-card-row">
            <span className="info-card-label">{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
      <div className="info-card">
        <div className="info-card-header">{ta.giftsTitle}</div>
        <div className="info-card-row">
          <span>{ta.giftsText}</span>
        </div>
      </div>
    </section>
  );
};

export default Afterparty;
