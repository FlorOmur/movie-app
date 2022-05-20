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
                  </div>
                  <div className="film-info-box">
                    <span>{dateRelease(film.release_date)}</span>
                    <span className="film-class">{genres(film.genres)}</span>
                    <span>{film.runtime} min</span>
                    <div className="film-score">
                      <div className="film-score-rating"><span>75%</span></div>
                      <h5>User<br/>Score</h5>
                      <div className="film-add">
                        <div><span className="icon-glyphicons-basic-159-thumbnails-list-white-c260ea972eebf812289fd3c41d0d2c1dff33ecbcd62be13fba8eeaf9de173789"></span></div>
                        <div><span className="icon-glyphicons-basic-13-heart-white-28d2cc2d6418c5047efcfd2438bfc5d109192671263c270993c05f130cc4584e"></span></div>
                        <div><span className="icon-glyphicons-basic-73-bookmark-white-432e98d550b7e4c80b06272c49475b0db85a60f6fae450420713004b3c9d3ffd"></span></div>
                        <div><span className="icon-glyphicons-basic-49-star-white-5c85220678b312aea9599d5f12ad858a9e7df226de51ef8b6b699023ffeda5fa"></span></div>
                        <div><span className="icon-glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07"></span></div>
                      </div>
                    </div>
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