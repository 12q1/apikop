import React from 'react';
import './App.css';
import lowpolyape from './assets/lowpolyape.png';
import ParticlesContainer from './Components/ParticlesContainer';
import TextScrambler from './Components/TextScrambler';


function App() {
  return (
    <div className="App">
      <img src={lowpolyape} alt="Low poly ape" className="lowpolyape" />
      <div className="mainText">
        <h1 className="companyName">APIKOP</h1>
        <TextScrambler/>
      </div>
      <ParticlesContainer />
    </div>
  );
}

export default App;
