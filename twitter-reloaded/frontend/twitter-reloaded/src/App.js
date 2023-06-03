import './App.css';
import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import { Box, Grid } from '@mui/material';
import NewTweet from './components/NewTweet';
import ManageTweetsService from './service/ManageTweetsService';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data){
      if (data.length === 0) {
        ManageTweetsService.retrieveAllTweets()
          .then(response => {
            setData(response.data);
          })
      }
    }
  }, [data]);

  const updateData = () => {
    ManageTweetsService.retrieveAllTweets()
      .then(response => { setData(response.data) })
  }
  
  return (
    <Grid container spacing={2} className='App'>
      <Grid item xs={12}>
        <Box color="primary" sx={{
          height: 70,
          backgroundColor: 'primary.dark'
        }} />
      </Grid>
      <Grid item xs={12}>
        <NewTweet dataUpdated={updateData} />
      </Grid>
      <Grid item xs={12}>
        <Dashboard tweets={data}/>
      </Grid>
    </Grid>
  );
}

export default App;
