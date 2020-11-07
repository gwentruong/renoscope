import React from 'react'
import Search from './components/Search'
import BuildingDetails from './components/BuildingDetails'
import Renovations from './components/Renovations';
import Recomendations from './components/Recomendations';
import Map from './components/Map'
import './App.css'

const App = () => {
  return (
    <Map addressCoords={[24.865098, 60.243748]} />
  );
}

export default App;
