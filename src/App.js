
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header.component.jsx';
import theme from './components/ui/Theme.js';
import Button from '@mui/material/Button';

import Bridge from './assets/images/portlandBridge.jpeg'

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Header />
      <div className="App-header">
      <h1>
      Bridge City Tech
      </h1>
      </div>
      <img className= 'bridge' src={Bridge} alt="A view of the Portland Bridge" />
      <div className="App-header">
      Web development based in Portland, Oregon. 
      </div>  
      <div className="App-header">
      contact: dorje@bridgecitytek.com 
      </div> 
      <Button color="secondary" variant="contained"> Color Test</Button>
    </ThemeProvider>
  );
}

export default App;
