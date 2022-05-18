import React from 'react';
import Hero from "../Hero";
import Popular from "../Popular";

const HomePage = () => {
  return (
    <div className="homePage">
      {<Hero />}
      {<Popular/>}
    </div>
  );
};

export default HomePage;