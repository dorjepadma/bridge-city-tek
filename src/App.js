
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { ThemeProvider, Typography } from '@mui/material';
import Header from './components/Header/Header.component.jsx';
import HomePage from './pages/Home/home.component.jsx';
import theme from './components/ui/Theme.js';
import Button from '@mui/material/Button';

import Bridge from './assets/images/portlandBridge.jpeg'

function App() {
  return (
    <ThemeProvider theme={theme}> 
    <BrowserRouter>
      <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/services' component={() => <div>services</div>} />
        <Route exact path='/customSoftware' component={() => <div>Custom Software</div>} />
        <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>} />
        <Route exact path='/websites' component={() => <div>Websites</div>} />
        <Route exact path='/seo' component={() => <div>Search Engine Enhancment</div>} />
        <Route exact path='/blog' component={() => <div>Blog</div>} />
        <Route exact path='/about' component={() => <div>About Us</div>} />
        <Route exact path='/contact' component={() => <div>Contact</div>} />
        <Route exact path='/estimates' component={() => <div>Estimates</div>} />
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
