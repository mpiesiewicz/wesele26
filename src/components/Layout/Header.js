import React from 'react';
import Navigation from './Navigation';
import weddingImage from '../../img/wedding2.jpeg'; // Correct path from src folder
import '../../styles/Components/Header.css';

const Header = () => {
  return (
    <header>
      <Navigation />
      <img src={weddingImage} alt="Magda i Radek" id="top-photo" />
    </header>
  );
};

export default Header;