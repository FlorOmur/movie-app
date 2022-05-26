import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Hero.css"


const Hero = () => {

  const [hero, setHero] = useState({})
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/movie/day?language=ru-RUS&sort_by=popularity.desc&api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setHero(res.data)
        setLoading(false)
      })
  }, [])


  console.log(hero.backdrop_path)

  if (loading) {
    return "loading"
  }

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-title">Welcome.</h1>
        <h3 className="hero-sub-title">Millions of movies, TV shows and people to discover. Explore now.</h3>
      </div>
      <div className="hero-search">
        <input className="input-search"
               type="text"
               placeholder="Search for a movie, tv show, person......"
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
};

export default Hero;