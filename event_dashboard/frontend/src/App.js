import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Metrics from './components/Metrics';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid container spacing={{ xs: 2 }} xs={12}>
          <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                  Event Dashboard
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </Grid>
        <Grid xs={12} container spacing={2} style={{ width: "100%" }}>
          <Metrics />
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
