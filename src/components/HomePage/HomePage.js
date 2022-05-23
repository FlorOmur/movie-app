import React from 'react';
import Hero from "../Hero";
import ToWatch from "../ToWatch";
import Popular from "../Popular";


const HomePage = () => {
  return (
    <div className="homePage">
      <Hero/>
      <div className="container">
        {<Popular/>}
        {<ToWatch/>}
      </div>
    </div>
  );
};

export default HomePage;