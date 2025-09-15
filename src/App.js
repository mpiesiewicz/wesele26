import React from 'react';
import Header from './components/Layout/Header';
import Home from './components/Sections/Home';
import Directions from './components/Sections/Directions';
import Plan from './components/Sections/Plan';
import Tables from './components/Sections/Tables';
import Afterparty from './components/Sections/Afterparty';
import Accommodation from './components/Sections/Accommodation';
import Media from './components/Sections/Media';
import Footer from './components/Layout/Footer';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Directions />
        {/* <Plan /> */}
        {/* <Tables /> */}
        {/* <Afterparty /> */}
        {/* <Accommodation /> */}
        {/* <Media /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;