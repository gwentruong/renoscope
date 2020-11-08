import React from 'react'
import Search from './components/Search'
import BuildingForm from './components/BuildingForm'
import Renovations from './components/Renovations';
import Recomendations from './components/Recomendations';
import Map from './components/Map'
import './App.css'
import MapInfo from './components/MapInfo';
import References from './components/References';

const App = () => {
  return (
    <Map addressCoords={[24.865098, 60.243748]} />
  )
}

export default App;