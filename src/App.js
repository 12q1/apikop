import React from 'react';
import './App.css';
import lowpolyape from './assets/lowpolyape.png';
import ParticlesContainer from './Components/ParticlesContainer';


function App() {
  return (
    <div className="App">
      <ParticlesContainer/>
      <img src={lowpolyape} alt="Low poly ape" className="lowpolyape"/>
    </div>
  );
}

export default App;
