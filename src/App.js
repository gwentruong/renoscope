import React from 'react'
import Search from './views/Search'
import BuildingForm from './components/BuildingForm'
import Renovations from './components/Renovations';
import Recomendations from './components/Recomendations';
import Map from './components/Map'
import './App.css'
import MapInfo from './components/MapInfo';
import References from './components/References';
import VerifyBuilding from './views/VerifyBuilding';

const App = () => {
  return (
    <VerifyBuilding addressCoords={[24.865098, 60.243748]} />
  )
}

export default App;