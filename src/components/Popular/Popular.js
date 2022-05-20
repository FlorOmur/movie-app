import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./popular.css"
import {Link} from "react-router-dom";

const Popular = () => {

  const [popular, setPopular] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/popular?api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setPopular(res.data.results)
        setLoading(false)
      })
  }, [])

  const formatDate = (date) => {
    const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    const reversedDate = date.split('-').reverse()
    reversedDate[1] = month[reversedDate[1] - 1]
    return reversedDate.join(' ')
  }



  if (loading) {
    return "loading"
  }

  return (
    <div className="popular">
      <div className="popular-box">
        <h3>What's Popular</h3>
        <div className="popular-nav">
          <button className="popular-btn">Streaming</button>
          <button className="popular-btn">On TV</button>
          <button className="popular-btn">For Rent</button>
          <button className="popular-btn">In Theatres</button>
        </div>
      </div>
      <div className="popular-scroller">

        {
          popular.map((oneFilm, idx) => (
            <div className="film-box" key={idx}>
              <div className="film-img">
                <Link to={`/movieInfo/${oneFilm.id}`}>
                  <img className="oneFilm-img"
                       src={`https://www.themoviedb.org/t/p/w440_and_h660_face${oneFilm.poster_path}`} alt="img"/>
                </Link>
                <div className="consensus">
                  <span>50%</span>
                </div>
              </div>
              <Link to={`/movieInfo/${oneFilm.id}`}>
                <h4 className="title-box">{oneFilm.title}</h4>
              </Link>
              <span className="film-year">{formatDate(oneFilm.release_date)}</span>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Popular;