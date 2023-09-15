import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';

function App() {
  const [names, setNames] = useState(["FirstName:Mohit", "SecondName:Rahul", "ThirdName:Chinkal", "FourthName:Krishan", "FifthName:Radha"]);
  
  return (
    <div className="App">
      <Home names={names} />
    </div>
  );
}

export default App;