import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const accessToken = 'pk.eyJ1IjoidXllbnRydW9uZyIsImEiOiJjanVjcGN0b3IwaG5xNDNwZHJ3czRlNmJhIn0.u7o0VUuXY5f-rs4hcrwihA';
const bbox = '24.782813,60.128574, 25.254512,60.29785'

const Search = (props) => {
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
            let coords = response.data.features[0].center
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
        props.action()
      }
    }

    const titleFontTheme = createMuiTheme({
      typography: {
        fontFamily: [
          'Wallpoet',
          'cursive',
        ].join(','),
      },});

    const buttonColorTheme = createMuiTheme({
      palette: {
        primary: {
          main: '#e05297',
        },
        secondary: {
          main: '#ea86b6',
        },
      },
    });

    return (
      <React.Fragment>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Container maxwidth="sm" className="search-container">
            <ThemeProvider theme={titleFontTheme}>
              <Typography variant="h3" component="h2" gutterBottom align="center" className="renoscope-title">
                RenoScope
              </Typography>
            </ThemeProvider>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <i>Gaze into the crystal! Ooh, tell me the details of the next renovations at...</i>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="15vh"
            >
              <Box width={400} >
                <TextField
                  id="input-with-icon-textfield"
                  type="search"
                  variant="outlined"
                  onChange={handleAddressChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Box>
              <Box m={2}>
                <ThemeProvider theme={buttonColorTheme}>
                  <Button className="tell-me-button" variant="contained" color="primary"
                          onClick={() => {submitAddress()}}>
                    Tell me
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
          </Container>
        </Box>
      </React.Fragment>
      
    );
  }
  
  export default Search;
