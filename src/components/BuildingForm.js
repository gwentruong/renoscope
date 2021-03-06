import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const BuildingForm = ({info}) => {
    const [address, setAddress] = useState(info.street_fi + ' ' + info.building_number + ', ' + info.postal_code)
    const [buildYear, setBuildYear] = useState(info.build_year)
    const [floorArea, setFloorArea] = useState(info.total_floor_area)
    const [rooms, setRooms] = useState('3h + k + s + p')
    const [propertyType, setPropertyType] = useState(info.property_type)
    const [floors, setFloors] = useState(info.floors)
    const [heating, setHeating] = useState(info.heating_dist)
    const [heatSource, setHeatSource] = useState(info.heating_source)
    const [material, setMaterial] = useState(info.building_material)
    const [sauna, setSauna] = useState(true)

    const addressChange = (e) => {
        setAddress(e.target.value)
    }
    const buildYearChange = (e) => {
        setBuildYear(e.target.value)
    }
    const floorAreaChange = (e) => {
        setFloorArea(e.target.value)
    }
    const roomsChange = (e) => {
        setRooms(e.target.value)
    }
    const propertyTypeChange = (e) => {
        setPropertyType(e.target.value)
    }
    const floorsChange = (e) => {
        setFloors(e.target.value)
    }
    const heatingChange = (e) => {
        setHeating(e.target.value)
    }
    const heatSourceChange = (e) => {
        setHeatSource(e.target.value)
    }
    const materialChange = (e) => {
        setMaterial(e.target.value)
    }
    const saunaChange = (e) => {
        setSauna(e.target.checked)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newInfo = {
            "address": address,
            "build_year" : buildYear,
            "floorArea": floorArea,
            "rooms": rooms,
            "property_type": propertyType,
            "floors": floors,
            "heating_dist": heating,
            "heating_source": heatSource,
            "building_material": material,
            "sauna": sauna
        }

        info = {...info, ...newInfo}
        console.log(JSON.stringify(info))
    }

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }),
    );

    const classes = useStyles();

    return (
        <Paper>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <TextField
                                required id="address"
                                label="Address"
                                defaultValue={address}
                                onChange={addressChange}
                                fullWidth />
                        </Grid>
                        <Grid item xs={7}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="build-year"
                                label="Build year"
                                defaultValue={buildYear}
                                onChange={buildYearChange}
                                fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="floor-area"
                                label="Floor area (m2)"
                                defaultValue={floorArea}
                                onChange={floorAreaChange} />
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="number-of-rooms"
                                label="Number of rooms"
                                defaultValue={rooms}
                                onChange={roomsChange}
                                fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="floors-number"
                                label="Number of floors"
                                defaultValue={floors}
                                onChange={floorsChange} />
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="property-type"
                                label="Property Type"
                                defaultValue={propertyType}
                                onChange={propertyTypeChange}
                                fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="building-material"
                                label="Building material"
                                defaultValue={material}
                                onChange={materialChange} />
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <TextField
                                id="heating"
                                label="Heating system"
                                defaultValue={heating}
                                onChange={heatingChange}
                                fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="heat-source"
                                label="Heat source"
                                defaultValue={heatSource}
                                onChange={heatSourceChange}/>
                        </Grid>
                        <Grid item xs={4}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <FormControlLabel
                                control={<Checkbox checked={sauna} name="sauna" onChange={saunaChange} />}
                                label="Sauna"
                            />
                        </Grid>
                        <Grid item xs={7}></Grid>

                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary" type="submit">
                                Verify
                            </Button>
                        </Grid>
                        <Grid item xs={7}></Grid>
                    </Grid>
                </form>
            </Box>
        </Paper>
    );
}

export default BuildingForm;
