import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../styles/Sections/Directions.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  maxWidth: '600px'
};

const center = {
  lat: 52.360576, // Replace with your actual coordinates
  lng: 17.078766  // Replace with your actual coordinates
};

const Directions = () => {
  return (
    <section id="directions">
      <h2>Dojazd</h2>
      <p><a href="https://maps.app.goo.gl/GY9usFmmW4E5TvHC6" target="_blank" rel="noopener noreferrer">Siedem Drzew, Krótka 24, 62-007 Biskupice</a></p>
      <br />
      <p>Jeśli planujecie podróż samochodem, najwygodniej będzie skorzystać z autostrady A2. Najlepiej zjechać węzłem Poznań Wschód. Następnie wjeżdżamy na trasę S5 i wybieramy zjazd Kleszczewo. Dalej kierujemy się na drogę prosto do Biskupic, kierunek Swarzędz/Rawicz/Środa Wielkopolska.</p>
      <br />
      
      <div className="map-container">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      
      <div className="directions-text">
        <h3>Jak dojechać:</h3>
        <ul>
          <li>Z autostrady A2 zjedź zjazdem Poznań Wschód</li>
          <li>Wjedź na trasę S5 w kierunku Wrocławia</li>
          <li>Zjedź zjazdem Kleszczewo</li>
          <li>Kieruj się na Biskupice (kierunek Środa Wielkopolska)</li>
          <li>W Biskupicach jedź ulicą Krótką</li>
        </ul>
      </div>
    </section>
  );
};

export default Directions;