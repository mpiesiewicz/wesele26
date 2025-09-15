import React, { useEffect, useRef } from 'react';
import '../../styles/Sections/Directions.css';

const CONFIGURATION = {
  defaultTravelMode: "DRIVING",
  distanceMeasurementType: "METRIC",
  mapOptions: {
    center: { lat: 52.4576401, lng: 17.1804761 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 10,
    zoomControl: true,
    maxZoom: 20,
    mapId: "",
  },
  mapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
};

// Commutes class implementation
function Commutes(configuration) {
  const mapOptions = configuration.mapOptions;
  const map = new google.maps.Map(document.querySelector('.map-view'), mapOptions);

  // Add additional functionality here if needed
  console.log("Commutes initialized with configuration:", configuration);
}

const Directions = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${CONFIGURATION.mapsApiKey}&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_commutes_v3_c`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.initMap = () => {
      new Commutes(CONFIGURATION);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="directions">
      <h2>Dojazd</h2>
      <p>
        <a
          href="https://maps.app.goo.gl/GY9usFmmW4E5TvHC6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Siedem Drzew, Krótka 24, 62-007 Biskupice
        </a>
      </p>
      <br />
      <p>
        Jeśli planujecie podróż samochodem, najwygodniej będzie skorzystać z
        autostrady A2. Najlepiej zjechać węzłem Poznań Wschód. Następnie
        wjeżdżamy na trasę S5 i wybieramy zjazd Kleszczewo. Dalej kierujemy się
        na drogę prosto do Biskupic, kierunek Swarzędz/Rawicz/Środa Wielkopolska.
      </p>
      <br />
      <div className="map-container">
        <div ref={mapRef} className="map-view" style={{ height: '400px', width: '100%' }}></div>
      </div>
      
      <div className="directions-text">
        <h3>Jak dojechać:</h3>
        <ul>
          <li>Z autostrady A2 zjedź zjazdem Poznań Wschód,</li>
          <li>wjedź na trasę S5 w kierunku Wrocławia,</li>
          <li>zjedź zjazdem Kleszczewo,</li>
          <li>kieruj się na Biskupice (kierunek Środa Wielkopolska),</li>
          <li>w Biskupicach jedź ulicą Krótką.</li>
        </ul>
      </div>
    </section>
  );
};

export default Directions;