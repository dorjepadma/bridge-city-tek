import React from 'react';


import Bridge from '../../assets/images/portlandBridge.jpeg'
import BwBridge from '../../assets/images/BlackandWhiteBridge.png'

import './home.styles.scss'

const HomePage = () => {
  return (
 
  <div className='homeContainer'> 
      <div variant='h1' className="homeTitle">
      Bridge City Tech
      </div>
    <div className='bridge'>
      <div variant="h4" className="bridgesCard">
      Bridges connect ideas, people, goods and services together. Here at Bridge City Tech we exist to help you connect with others. Whether it is an idea or business, we are here to help you communicate with the world. Bringing the power of technology to the people around you.
      </div>  
    </div>

    <div variant='h3' className="App-header">
    contact: dorje@bridgecitytek.com 
    </div> 

  </div>
  
  );}

  export default HomePage;
