import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const BuildingDetails = () => {
    const [address, setAddress] = useState("Maerinne 11 A1, 02160, Espoo")
    const [buildYear, setBuildYear] = useState(1980)
    const [floorArea, setFloorArea] = useState(100)
    const [rooms, setRooms] = useState('3h + k + s + p')
    const [propertyType, setPropertyType] = useState('Rivitalo')
    const [floors, setFloors] = useState(2)
    const [heating, setHeating] = useState('Vesikeskuslämmitys')
    const [heatSource, setHeatSource] = useState('Kevyt polttoöljy')
    const [material, setMaterial] = useState('Concrete')
    const [sauna, setSauna] = useState(1)

    return (
        <div>
            <div>
                <TextField 
                    required id="address" 
                    label="Address"
                    defaultValue={address} />
            </div>
            <div>
                <TextField
                    id="build-year"
                    label="Build year"
                    defaultValue={buildYear} />
                <TextField
                    id="floor-area"
                    label="Floor area"
                    defaultValue={floorArea} />
            </div>
            <div>
                <TextField
                    id="number-of-rooms"
                    label="Number of rooms"
                    defaultValue={rooms} />
                <TextField
                    id="floors-number"
                    label="Number of floors"
                    defaultValue={floors} /> 
            </div>
            <div>
                <TextField
                    id="property-type"
                    label="Property Type"
                    defaultValue={propertyType} />
                <TextField
                    id="building-material"
                    label="Building material"
                    defaultValue={material} />
            </div>
            <div>
                <TextField
                    id="heating"
                    label="Heating system"
                    defaultValue={heating} /> 
                <TextField
                    id="heat-source"
                    label="Heat source"
                    defaultValue={heatSource} />
            </div>
            <div>
                <FormControlLabel
                    control={<Checkbox checked="sauna" name="sauna" />}
                    label="Sauna"
                />
            </div>  
        </div>
    );
}

export default BuildingDetails;