
import './App.css';

import Bridge from './assets/images/portlandBridge.jpeg'

function App() {
  return (
    <div className="App">
      <img className= 'bridge' src={Bridge} className="App-image" alt="A view of the Portland Bridge" />
      <div className="App-header">
      Welcome to Bridge City Tech! 
      Web and Software based in Portland, Oregon. 
      </div>  
    </div>
  );
}

export default App;
