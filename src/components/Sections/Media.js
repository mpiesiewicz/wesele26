import React from 'react';

const Media = () => {
  return (
    <section id="media">
      <h2>Zdjęcia i filmy</h2>
      <p>Prześlijcie nam koniecznie wszystkie zdjęcia i filmy za pomocą kodu QR lub <a href="https://photos.app.goo.gl/jAbxXd4tNqScAKf76" target="_blank" rel="noopener noreferrer">Linku</a></p>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src="/img/qr-code.png" alt="Kod QR" style={{ maxWidth: '235px', height: 'auto' }} />
      </div>
      <p>Będziemy bardzo wdzięczni! ♡</p>
    </section>
  );
};

export default Media;