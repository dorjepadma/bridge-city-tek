import React from 'react';
import { ThemeProvider, Typography } from '@mui/material';

import theme from '../../components/ui/Theme.js';

import Bridge from '../../assets/images/portlandBridge.jpeg'

import './home.styles.scss'

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
     
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
  </ThemeProvider>)}

  export default HomePage;
