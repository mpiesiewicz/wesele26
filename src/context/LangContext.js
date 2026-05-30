import React, { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const TRANSLATIONS = {
  pl: {
    nav: {
      home: 'Home',
      ceremony: 'Ceremonia',
      directions: 'Wesele',
      tables: 'Stoły',
      accommodation: 'Noclegi',
      afterparty: 'Poprawiny',
    },
    home: {
      subtitle: 'Zaproszenie na ślub i wesele',
      date: 'Sobota, 6 Czerwca 2026',
      names: ['Magdy', 'i', 'Radka'],
      welcome1: 'Dziękujemy że będziecie z nami w tym wyjątkowym dla nas dniu!',
      welcome2: 'Poniżej zamieszczamy garść przydatnych informacji ♡',
    },
    ceremony: {
      title: 'Ceremonia Ślubna',
      address: 'Parafia Św. Mikołaja, Wierzenicy',
      mapsLabel: 'Zobacz na mapie',
      mapError: 'Nie udało się załadować mapy',
      rows: [
        { label: 'Godzina', value: '16:00' },
        { label: 'Prośba', value: 'Prosimy o przybycie 15 minut wcześniej.' },
      ],
    },
    directions: {
      title: 'Wesele',
      venue: 'Siedem Drzew',
      address: 'Siedem Drzew — Krótka 24, 62-007 Biskupice',
      howToGet: 'Jak dojechać:',
      steps: [
        'Z autostrady A2 zjedź zjazdem Poznań Wschód,',
        'wjedź na trasę S5 w kierunku Bydgoszczy,',
        'zjedź zjazdem Kleszczewo,',
        'kieruj się na Biskupice (kierunek Środa Wielkopolska),',
        'w Biskupicach jedź ulicą Główną, następnie skręć w Aleję Siedmiu Drzew.',
      ],
      mapError: 'Nie udało się załadować mapy',
      mapErrorLink: 'Otwórz lokalizację w Google Maps',
    },
    accommodation: {
      title: 'Noclegi',
      rows: [
        { label: 'Zameldowanie', value: 'od godz. 14:00 — sobota 06.06' },
        { label: 'Wymeldowanie', value: 'do godz. 11:00 — niedziela 07.06' },
      ],
    },
    afterparty: {
      title: 'Poprawiny',
      rows: [
        { label: 'Kiedy', value: 'Niedziela, zaraz po wymeldowaniu' },
        { label: 'Gdzie', value: 'Letnia weranda w Siedmiu Drzewach' },
      ],
      giftsTitle: 'Prezenty',
      giftsText: 'Wasza obecność jest dla nas najpiękniejszym prezentem. Jeśli chcielibyście nas dodatkowo obdarować — prosimy o kopertę zamiast kwiatów i wina.',
    },
    tables: {
      title: 'Plan Stołów',
      searchLabel: 'znajdź swoje miejsce',
      placeholder: 'Wpisz imię…',
      searchBtn: 'Szukaj',
      topZone: '✦ Stół Prezydialny ✦',
      bottomZone: '✦ Parkiet ✦',
      h: ['Stół 1', 'Stół 2', 'Stół 3'],
      left: '← lewa', right: 'prawa →',
      leg1: 'Stół 1 — lewa', leg2: 'Stół 2 — środek', leg3: 'Stół 3 — prawa',
      legSide: '← lewa / prawa → = strona stołu',
      notFound: 'Nie znaleziono — sprawdź pisownię.',
      result: (name, stol, side) => `${name} → Stół ${stol}, strona ${side}`,
      sideWord: { lewa: 'lewa', prawa: 'prawa' },
    },
  },
  en: {
    nav: {
      home: 'Home',
      ceremony: 'Ceremony',
      directions: 'Reception',
      tables: 'Tables',
      accommodation: 'Stay',
      afterparty: 'After-party',
    },
    home: {
      subtitle: 'Wedding invitation',
      date: 'Saturday, June 6, 2026',
      names: ['Magda', '&', 'Radek'],
      welcome1: 'Thank you for celebrating this special day with us!',
      welcome2: 'Below you\'ll find a few useful details ♡',
    },
    ceremony: {
      title: 'Wedding Ceremony',
      address: 'St. Nicholas Parish, Wierzenicy',
      mapsLabel: 'View on map',
      mapError: 'Could not load the map',
      rows: [
        { label: 'Time', value: '4:00 PM' },
        { label: 'Note', value: 'We\'d love for you to arrive 15 minutes early.' },
      ],
    },
    directions: {
      title: 'Reception',
      venue: 'Siedem Drzew',
      address: 'Siedem Drzew — Krótka 24, 62-007 Biskupice',
      howToGet: 'How to get there:',
      steps: [
        'Exit the A2 motorway at Poznań Wschód,',
        'join the S5 expressway towards Bydgoszcz,',
        'exit at Kleszczewo,',
        'follow signs to Biskupice (towards Środa Wielkopolska),',
        'in Biskupice follow the main street, then turn into Aleja Siedmiu Drzew.',
      ],
      mapError: 'Could not load the map',
      mapErrorLink: 'Open location in Google Maps',
    },
    accommodation: {
      title: 'Accommodation',
      rows: [
        { label: 'Check-in', value: 'from 2:00 PM — Saturday, June 6' },
        { label: 'Check-out', value: 'by 11:00 AM — Sunday, June 7' },
      ],
    },
    afterparty: {
      title: 'After-party',
      rows: [
        { label: 'When', value: 'Sunday, right after check-out' },
        { label: 'Where', value: 'Summer veranda at Siedem Drzew' },
      ],
      giftsTitle: 'Gifts',
      giftsText: 'Your presence is the most beautiful gift. If you\'d like to give something extra, we\'d appreciate an envelope rather than flowers and wine.',
    },
    tables: {
      title: 'Seating Plan',
      searchLabel: 'find your seat',
      placeholder: 'Enter your name…',
      searchBtn: 'Search',
      topZone: '✦ Head Table ✦',
      bottomZone: '✦ Dance Floor ✦',
      h: ['Table 1', 'Table 2', 'Table 3'],
      left: '← left', right: 'right →',
      leg1: 'Table 1 — left', leg2: 'Table 2 — centre', leg3: 'Table 3 — right',
      legSide: '← left / right → = side of the table',
      notFound: 'Not found — please check the spelling.',
      result: (name, stol, side) => `${name} → Table ${stol}, ${side} side`,
      sideWord: { lewa: 'left', prawa: 'right' },
    },
  },
  de: {
    nav: {
      home: 'Home',
      ceremony: 'Zeremonie',
      directions: 'Hochzeitsfeier',
      tables: 'Tische',
      accommodation: 'Unterkunft',
      afterparty: 'Nachfeier',
    },
    home: {
      subtitle: 'Einladung zur Hochzeit',
      date: 'Samstag, 6. Juni 2026',
      names: ['Magda', '&', 'Radek'],
      welcome1: 'Danke, dass ihr diesen besonderen Tag mit uns feiert!',
      welcome2: 'Hier findet ihr einige nützliche Informationen ♡',
    },
    ceremony: {
      title: 'Hochzeitszeremonie',
      address: 'Pfarrei St. Nikolaus, Wierzenicy',
      mapsLabel: 'Auf Karte anzeigen',
      mapError: 'Karte konnte nicht geladen werden',
      rows: [
        { label: 'Uhrzeit', value: '16:00 Uhr' },
        { label: 'Bitte', value: 'Wir bitten euch, 15 Minuten früher zu erscheinen.' },
      ],
    },
    directions: {
      title: 'Hochzeitsfeier',
      venue: 'Siedem Drzew',
      address: 'Siedem Drzew — Krótka 24, 62-007 Biskupice',
      howToGet: 'Wegbeschreibung:',
      steps: [
        'Verlassen Sie die A2 an der Ausfahrt Poznań Wschód,',
        'fahren Sie auf die S5 in Richtung Bydgoszcz,',
        'verlassen Sie die S5 an der Ausfahrt Kleszczewo,',
        'folgen Sie den Schildern nach Biskupice (Richtung Środa Wielkopolska),',
        'in Biskupice folgen Sie der Hauptstraße, dann biegen Sie in die Aleja Siedmiu Drzew ein.',
      ],
      mapError: 'Karte konnte nicht geladen werden',
      mapErrorLink: 'Ort in Google Maps öffnen',
    },
    accommodation: {
      title: 'Unterkunft',
      rows: [
        { label: 'Check-in', value: 'ab 14:00 Uhr — Samstag, 6. Juni' },
        { label: 'Check-out', value: 'bis 11:00 Uhr — Sonntag, 7. Juni' },
      ],
    },
    afterparty: {
      title: 'Nachfeier',
      rows: [
        { label: 'Wann', value: 'Sonntag, gleich nach dem Check-out' },
        { label: 'Wo', value: 'Sommerveranda in Siedem Drzew' },
      ],
      giftsTitle: 'Geschenke',
      giftsText: 'Eure Anwesenheit ist das schönste Geschenk. Wenn ihr uns zusätzlich beschenken möchtet, bitten wir um einen Umschlag statt Blumen und Wein.',
    },
    tables: {
      title: 'Sitzplan',
      searchLabel: 'finden Sie Ihren Platz',
      placeholder: 'Name eingeben…',
      searchBtn: 'Suchen',
      topZone: '✦ Haupttisch ✦',
      bottomZone: '✦ Tanzfläche ✦',
      h: ['Tisch 1', 'Tisch 2', 'Tisch 3'],
      left: '← links', right: 'rechts →',
      leg1: 'Tisch 1 — links', leg2: 'Tisch 2 — Mitte', leg3: 'Tisch 3 — rechts',
      legSide: '← links / rechts → = Seite des Tisches',
      notFound: 'Nicht gefunden — bitte Schreibweise prüfen.',
      result: (name, stol, side) => `${name} → Tisch ${stol}, ${side} Seite`,
      sideWord: { lewa: 'links', prawa: 'rechts' },
    },
  },
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('pl');
  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
