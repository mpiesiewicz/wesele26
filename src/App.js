import React from 'react';
import { LangProvider } from './context/LangContext';
import Header from './components/Layout/Header';
import Home from './components/Sections/Home';
import Ceremony from './components/Sections/Ceremony';
import Directions from './components/Sections/Directions';
import Tables from './components/Sections/Tables';
import Accommodation from './components/Sections/Accommodation';
import Afterparty from './components/Sections/Afterparty';
import Footer from './components/Layout/Footer';
import './styles/Global.css';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Header />
        <main>
          <Home />
          <Ceremony />
          <Directions />
          <Tables />
          <Accommodation />
          <Afterparty />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
