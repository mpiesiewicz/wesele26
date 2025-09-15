import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Sections/Directions.css';

const Directions = () => {
  const mapRef = useRef(null);
  const [mapError, setMapError] = useState('');
  const mapInitialized = useRef(false);

  useEffect(() => {
    function initializeMap() {
      if (mapInitialized.current || !mapRef.current) return;

      try {
        console.log("✅ Initializing map...");
        mapInitialized.current = true;

        const defaultLocation = { lat: 52.4576549, lng: 17.1804501 };

        const map = new window.google.maps.Map(mapRef.current, {
          center: defaultLocation,
          zoom: 10,
          styles: [
            {
              featureType: 'all',
              stylers: [{ saturation: 0 }, { lightness: 23 }],
            },
          ],
        });

        const marker = new window.google.maps.Marker({
          map,
          position: defaultLocation,
          title: 'Siedem Drzew',
          animation: window.google.maps.Animation.DROP,
        });

        const infowindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 8px 0; color: #8a6d3b;">Siedem Drzew</h3>
              <p style="margin: 0;">Krótka 24, 62-007 Biskupice</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });

        setTimeout(() => {
          infowindow.open(map, marker);
        }, 1000);
      } catch (error) {
        console.error('❌ Error initializing Google Map:', error);
        setMapError('Błąd podczas ładowania mapy');
      }
    }

    // Helper to wait until google.maps is ready
    function waitForGoogleMaps(callback) {
      const check = setInterval(() => {
        if (window.google && window.google.maps && window.google.maps.Map) {
          clearInterval(check);
          callback();
        }
      }, 50);
      setTimeout(() => clearInterval(check), 5000); // Stop trying after 5s
    }

    if (mapInitialized.current) return;

    const mapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    if (!mapsApiKey) {
      console.error('Google Maps API key is missing.');
      setMapError('Brak klucza API Google Maps');
      return;
    }

    if (window.google && window.google.maps && window.google.maps.Map) {
      initializeMap();
      return;
    }

    const scriptId = 'google-maps-script';
    if (document.getElementById(scriptId)) {
      console.log("⏳ Google Maps script already loading, waiting...");
      waitForGoogleMaps(initializeMap);
      return;
    }

    console.log("📥 Loading Google Maps script...");
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}&libraries=places&v=weekly&loading=async`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('✅ Google Maps script loaded successfully, waiting for maps object...');
      waitForGoogleMaps(initializeMap);
    };

    script.onerror = () => {
      console.error('❌ Failed to load Google Maps script');
      setMapError('Nie udało się załadować Google Maps');
    };

    document.head.appendChild(script);

    return () => {
      mapInitialized.current = false;
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
          className="directions-link"
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
        <div
          ref={mapRef}
          id="map"
          className="wedding-map"
          style={{ minWidth: '400px', maxHeight: '600px', maxWidth: '400px' }}
        >
          {mapError && (
            <div className="map-error">
              <p>{mapError}</p>
              <p>
                <a
                  href="https://maps.app.goo.gl/GY9usFmmW4E5TvHC6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  Otwórz lokalizację w Google Maps
                </a>
              </p>
            </div>
          )}
        </div>
      </div>


            {/* ✅ Restored directions section */}
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
