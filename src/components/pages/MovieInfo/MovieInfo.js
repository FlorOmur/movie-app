import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import "./MovieInfo.css"

const MovieInfo = () => {

  const {id} = useParams()
  const [film, setFilm] = useState({})
  const [credits, setCredits] = useState([])
  const [filmLoader, setFilmLoader] = useState(true);
  const [creditLoader, setCreditLoader] = useState(true);

  console.log(film)
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?language=ru&api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setFilm(res.data)
        setFilmLoader(false)
      })
    axios(`https://api.themoviedb.org/3/movie/${id}/credits?language=ru&api_key=08461d9c0888c7c07b11dcd7fda95b8d`)
      .then((res) => {
        setCredits(res.data)
        setCreditLoader(false)
      })
  }, [id])

  if (filmLoader || creditLoader) {
    return 'Loading.....'
  }

  const dateRelease = (date) => date.split('-').reverse().join('/')
  const genres = (movieGenres) => movieGenres.map((item) => (item.name)).join(', ')

  const time = (number) => {
    return number.toString().split('').length-1 < 9
   
  }
   console.log(time(film.runtime))

  return (
    <div>
      <nav className="movie-info-nav">
        <li>Overview</li>
        <li>Media</li>
        <li>Fandom</li>
        <li>Share</li>
      </nav>
      <div className="out-movie-info">
        <div className="movieInfo" style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/${film.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "-200px top"
        }}>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="movie-info-img">
                  <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${film.poster_path}`} alt="img"/>
                  <div className="movie-info-img-btn">
                    <button>
                      <img src={`https://www.themoviedb.org/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg`} alt="img"/>
                      <div className="title-btn">
                        <h3>Now Streaming</h3>
                        <h2>Watch Now</h2>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div>
                  <div className="movie-info-title"><span className="title-film">{film.title} <span
                    className="film-title-year">(2022)</span></span>
                    {/*<span>{time(film.runtime)}</span>*/}
                  </div>
                  <div>
                    <span>{dateRelease(film.release_date)}</span>
                    <span>{genres(film.genres)}</span>
                    <span>{film.runtime}</span>
                  </div>
                </div>
                <div className="movie-info-description">{film.overview}</div>
                <div className="">{credits.id}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;