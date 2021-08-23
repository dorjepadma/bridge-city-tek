
import './App.css';

import Bridge from './assets/images/portlandBridge.jpeg'

function App() {
  return (
    <div className="App">
      <div className="App-header">

      <h1>
      Bridge City Tech
      </h1>
      </div>
      <img className= 'bridge' src={Bridge} className="App-image" alt="A view of the Portland Bridge" />
      <div className="App-header">
      
      Web development based in Portland, Oregon. 
      </div>  
      <div className="App-header">
      contact: dorje@bridgecitytek.com 
      </div> 
    </div>
  );
}

export default App;
