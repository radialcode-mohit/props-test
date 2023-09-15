// src/Components/Home.js

import React, { useState } from 'react';

function Home(props) {
  const { names } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  return (
    <div className="home-container">
      <h1 className="center-horizontally top-vertically">{names[currentIndex]}</h1>
      <div style={{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}><button  onClick={handleNextClick}>
        Next
      </button></div>
    </div>
  );
}

export default Home;
