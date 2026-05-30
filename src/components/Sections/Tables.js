import React, { useState, useEffect } from 'react';
import { useLang } from '../../context/LangContext';
import '../../styles/Components/Tables.css';

const GUESTS = {
  1: {
    lewa: [
      "Małgorzata P.","Anna B.","Andrzej B.","Ola B.",
      "Natalia B.","Nikodem W.","Natalia G.","Paweł G.",
      "Zbigniew P.","Ala P.","Witold P."
    ],
    prawa: [
      "Renata G.","Marcin G.","Przemek G.","Asia Z.",
      "Martyna G.","Mateusz N.","Eliza G.","Oliwia G.",
      "Andrzej P.","Iwona P."
    ]
  },
  2: {
    lewa: [
      "Magda P.","Alex K.","Yaren D.","Ghislaine B.",
      "Moritz T.","Phillip S.","Anna O.","Łukasz K.",
      "Kasia R.","Radek R.","Ada K.","Jan Kr.",
      "Kacper R.","Kasia S.","Jadzia B.","Patryk U."
    ],
    prawa: [
      "Ola T.","Ola S.","Vincent S.","Nathie S.",
      "Henry G.","Johanna F.","Paulina J.","Michał J.",
      "Aga D.","Marcin B.","Korneli Z.","Klaudyna C.",
      "Klaudia K.","Maciej K.","Hania M.","Krzysztof L."
    ]
  },
  3: {
    lewa: [
      "Basia M.","Marcin M.","Tomek K.","Jan Ka.",
      "Eryk S.","Hania S.","Iza S.","Tomek S.",
      "Ala K.","Wojtek K."
    ],
    prawa: [
      "Mirella K.","Piotr K.","Arek S.","Kinga J.",
      "Stanisław G.","Jola J.","Robert D.","Ania S.","Alfred S."
    ]
  }
};

function norm(s) {
  return s.toLowerCase()
    .replace(/ą/g,'a').replace(/ć/g,'c').replace(/ę/g,'e')
    .replace(/ł/g,'l').replace(/ń/g,'n').replace(/ó/g,'o')
    .replace(/ś/g,'s').replace(/ź/g,'z').replace(/ż/g,'z')
    .replace(/ğ/g,'g').replace(/ş/g,'s').replace(/ı/g,'i');
}

const Tables = () => {
  const { lang, t } = useLang();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [highlighted, setHighlighted] = useState(new Set());

  useEffect(() => {
    setQuery('');
    setResults([]);
    setHighlighted(new Set());
  }, [lang]);

  const handleSearch = (q) => {
    setQuery(q);
    if (!q.trim()) {
      setHighlighted(new Set());
      setResults([]);
      return;
    }
    const found = [];
    [1, 2, 3].forEach(n => {
      ['lewa', 'prawa'].forEach(side => {
        GUESTS[n][side].forEach(name => {
          if (norm(name).includes(norm(q.trim()))) {
            found.push({ name, stol: n, strona: side });
          }
        });
      });
    });
    setHighlighted(new Set(found.map(f => f.name)));
    setResults(found);
  };

  const tt = t.tables;

  const resultText = query.trim()
    ? results.length === 0
      ? tt.notFound
      : results.map(f => tt.result(f.name, f.stol, tt.sideWord[f.strona])).join(' | ')
    : '';

  return (
    <section id="tables" className="tables-section">
      <h2>{tt.title}</h2>

      <div className="ts-search-wrap">
        <label className="ts-search-label" htmlFor="ts-input">{tt.searchLabel}</label>
        <div className="ts-search-box">
          <input
            id="ts-input"
            type="text"
            placeholder={tt.placeholder}
            value={query}
            onChange={e => handleSearch(e.target.value)}
            onKeyDown={e => { if (e.key === 'Escape') handleSearch(''); }}
          />
          <button onClick={() => handleSearch(query)}>{tt.searchBtn}</button>
        </div>
        {resultText && <div className="ts-search-result">{resultText}</div>}
      </div>

      <div className="ts-sala">
        <div className="ts-dancefloor">{tt.topZone}</div>

        <div className="ts-tables-row">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className={`ts-table-card${n === 2 ? ' ts-t2' : ''}`} id={`ts-card-${n}`}>
              <div className="ts-table-header">{tt.h[i]}</div>
              <div className="ts-table-body">
                {['lewa', 'prawa'].map(side => (
                  <div key={side} className="ts-side">
                    <span className="ts-side-label">{side === 'lewa' ? tt.left : tt.right}</span>
                    {GUESTS[n][side].map(name => (
                      <span
                        key={name}
                        className={`ts-guest${highlighted.has(name) ? ' highlight' : ''}`}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ts-legend">
          <span><span className="ts-dot ts-dot-s1"></span><span>{tt.leg1}</span></span>
          <span><span className="ts-dot ts-dot-s2"></span><span>{tt.leg2}</span></span>
          <span><span className="ts-dot ts-dot-s3"></span><span>{tt.leg3}</span></span>
          <span className="ts-leg-note">{tt.legSide}</span>
        </div>

        <div className="ts-dancefloor" style={{ marginTop: '0.8rem' }}>{tt.bottomZone}</div>
      </div>
    </section>
  );
};

export default Tables;
