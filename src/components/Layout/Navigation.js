import React from 'react';
import { useScroll } from '../../hooks/useScroll';
import '../../styles/Components/Navigation.css';

const Navigation = () => {
  const { scrollToSection } = useScroll();

  return (
    <nav>
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
      <a href="#directions" onClick={(e) => scrollToSection(e, 'directions')}>Dojazd</a>
      <a href="#plan" onClick={(e) => scrollToSection(e, 'plan')}>Plan dnia</a>
      <a href="#tables" onClick={(e) => scrollToSection(e, 'tables')}>Rozkład stołów</a>
      <a href="#afterparty" onClick={(e) => scrollToSection(e, 'afterparty')}>Poprawiny</a>
      <a href="#accommodation" onClick={(e) => scrollToSection(e, 'accommodation')}>Noclegi</a>
      <a href="#media" onClick={(e) => scrollToSection(e, 'media')}>Zdjecia</a>
    </nav>
  );
};

export default Navigation;