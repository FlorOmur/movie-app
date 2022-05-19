import React from 'react';
import Hero from "../Hero";
import Popular from "../Popular";


const HomePage = () => {
  return (
    <div className="homePage">
      <Hero/>
      <div className="container">
      {<Popular/>}
      </div>
    </div>
  );
};

export default HomePage;