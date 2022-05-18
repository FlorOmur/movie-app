import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./popular.css"

const Popular = () => {

  const [hero, setHero] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setHero(res.data)
        setLoading(false)
      })
  }, [])
  console.log(hero)

  if (loading){
    return "loading"
  }

  return (
    <div className="popular">
      <div className="popular-box">
        <h3>Что популярно</h3>
        <div className="popular-nav">
          <button className="popular-btn">Streaming</button>
          <button className="popular-btn">On TV</button>
          <button className="popular-btn">For Rent</button>
          <button className="popular-btn">In Theatres</button>
        </div>
      </div>

      <div className="row">
        {
          hero.results.map((oneFilm, idx) => (
            <div className="film-box" key={idx}>
              <img className="oneFilm-img" src={`https://image.tmdb.org/t/p/w500/${oneFilm.poster_path}`} alt="img"/>
              <h4 className="title-box">{oneFilm.title}</h4>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Popular;