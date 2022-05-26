import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./ToWatch.css"
import {Link} from "react-router-dom";


const ToWatch = () => {

  const [popular, setPopular] = useState({})
  const [loading, setLoading] = useState(true)
  const [mediaType, setMediaType] = useState('day')

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/trending/all/${mediaType}?language=ru-RUS&sort_by=popularity.desc&api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setPopular(res.data.results)
        setLoading(false)
      })
  }, [mediaType])


  // const formatDate = (date) => {
  //   const month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
  //   const reversedDate = date.split('-').reverse()
  //   reversedDate[1] = month[reversedDate[1] - 1]
  //   return reversedDate.join(' ')
  // }



  if (loading) {
    return "loading"
  }
  return (
    <div className="popular" style={{
      backgroundImage: `url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg)`,
      backgroundSize: "cover",
      backgroundPositionY: "74px"
    }}>
      <div className="popular-box">
        <h3>Trending</h3>
        <div className="popular-nav">
          <button className="popular-btn" type="button" onClick={() => setMediaType('day')}>To day</button>
          <button className="popular-btn" type="button" onClick={() => setMediaType('week')}>This week</button>
        </div>
      </div>
      <div className="scroller">
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
              {/*<span className="film-year">{formatDate(oneFilm.release_date)}</span>*/}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ToWatch;