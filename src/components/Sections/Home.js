import React from 'react';
import '../../styles/Sections/Home.css';

const Home = () => {
  return (
    <section id="home">
      <div id="home-container">
        <h4>SOBOTA, 6 CZERWCA 2026</h4>
        <div id="names-title">
          <h1>
            <p>Magda</p>
            <p>i</p>
            <p>Radek</p>
          </h1>
        </div>
        <div className="bended">
          <h4>Dziękujemy że jesteście z nami w tym wyjątkowym dla nas dniu!</h4>
          <h4>Poniżej zamieszczamy garść przydatnych informacji ♡</h4>
        </div>
      </div>
    </section>
  );
};

export default Home;