import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const accessToken = 'pk.eyJ1IjoidXllbnRydW9uZyIsImEiOiJjanVjcGN0b3IwaG5xNDNwZHJ3czRlNmJhIn0.u7o0VUuXY5f-rs4hcrwihA';
const bbox = '24.782813,60.128574, 25.254512,60.29785'

const Search = () => {
    const [address, setAddress] = useState('')
    const [coordinates, setCoordinates] = useState([])

    const handleAddressChange = (event) => {
      console.log(event.target.value)
      setAddress(event.target.value)
    }

    const geocode = () => {
      let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?type=address&bbox=${bbox}&access_token=${accessToken}`
      
      axios.get(url)
        .then(
          response => {
            console.log(response.data)
            let coords = response.data.center
            setCoordinates(coords)
          },
          error => {
            console.log('Error in finding address')
          }
        );
    }

    const submitAddress = () => {
      if (address) {
        console.log(address)
        geocode()
      }
    }

    return (
      <React.Fragment>
        <Container maxwidth="sm">
          <Typography variant="h3" component="h2" gutterBottom>
            RenoScope
          </Typography>
          <Typography variant="h5" gutterBottom>
            Gaze into the crystal! Ooh, tell me the details of the next renovations at...
          </Typography>
          <TextField
            id="input-with-icon-textfield"
            type="search"
            onChange={handleAddressChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <div>
            <Button variant="contained" color="primary"
                    onClick={() => {submitAddress()}}>
              Search
            </Button>
          </div>
        </Container>
      </React.Fragment>
      
    );
  }
  
  export default Search;