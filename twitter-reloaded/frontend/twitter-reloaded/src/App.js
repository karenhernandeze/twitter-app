import './App.css';
import Dashboard from './components/Dashboard';
import { Grid } from '@mui/material';
import NewTweet from './components/NewTweet';

function App() {
  return (
    <Grid container spacing={2} className='App'>
      <Grid item xs={12}>
        <NewTweet />
      </Grid>
      <Grid item xs={12}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;
