import React from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const App = () => {
  return (
    <React.Fragment>
      <Container className="App" maxwidth="sm">
        <Typography variant="h3" component="h2" gutterBottom>
          RenoScope
        </Typography>
        <Typography variant="h5" gutterBottom>
          Gaze into the crystal! Ooh, tell me the details of the next renovations at...
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          type="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <div>
          <Button variant="contained" color="primary">
            Search
          </Button>
        </div>
      </Container>
    </React.Fragment>
    
  );
}

export default App;
