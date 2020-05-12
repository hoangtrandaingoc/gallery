import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import {SearchProvider} from './components/Contexts/SearchContext';

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <NavBar/>
        <Gallery/>
        <Footer/>
      </div>
    </SearchProvider> 
  );
}

export default App;
