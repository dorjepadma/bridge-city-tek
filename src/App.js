
import './App.css';
import { ThemeProvider, Typography } from '@mui/material';
import Header from './components/Header/Header.component.jsx';
import theme from './components/ui/Theme.js';
import Button from '@mui/material/Button';

import Bridge from './assets/images/portlandBridge.jpeg'

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Header />
      <div className="App-header">
      <Typography variant='h2' className="App-header">
      Bridge City Tech
      </Typography>
      </div>
      <img className= 'bridge' src={Bridge} alt="A view of the Portland Bridge" />
      <Typography variant="h4" className="App-header">
      Web development based in Portland, Oregon. 
      </Typography>  
      <Typography variant='h3' className="App-header">
      contact: dorje@bridgecitytek.com 
      </Typography> 
      <Button color="secondary" variant="contained"> Color Test</Button>
    </ThemeProvider>
  );
}

export default App;
