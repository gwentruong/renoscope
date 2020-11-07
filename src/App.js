import React from 'react'
import Search from './components/Search'
import BuildingForm from './components/BuildingForm'
import Renovations from './components/Renovations';
import Recomendations from './components/Recomendations';
import Map from './components/Map'
import './App.css'

const App = () => {
  return (
    <BuildingForm info={
      {
        "build_year": 1985,
        "building_material": "concrete",
        "building_number": "6",
        "cadastral_building_id": "09103302320003",
        "co2": 29936.2,
        "elec": 156915,
        "elec_id": 48929,
        "facade_material": "brick",
        "floors": 2,
        "heating_dist": "central_water",
        "heating_source": "district",
        "national_building_id": "100924340V",
        "ogc_fid": 1373,
        "postal_code": "00410",
        "property_type": "Peruskoulut; lukiot ja muut",
        "street_fi": "Puustellintie",
        "street_se": "Boställsvägen",
        "total_area": 3815,
        "total_floor_area": 3662
      }
    } />
  );
}

export default App;
