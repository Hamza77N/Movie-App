
import { useEffect, useState } from "react"
import "../styles/home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Navbar from "./Navbar"


const TopRated = () => {


   const [TopMovies, setTopMovies] = useState([])

   useEffect(() => {
      const getData = async () => {
         const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
         const data = await response.json()
         setTopMovies(data.results)

         console.log(data.results)

      }
      getData()
   }, [])

   return (
      <>
      <Navbar/>
         <div className="poster">
            <Carousel
               showThumbs={false}
               autoPlay={true}
               transitionTime={3}
               infiniteLoop={true}
               showStatus={false}
            >
               {
                  TopMovies.map((movie, id) => (
                     <Link key={id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                        <div className="posterImage">
                           <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">
                           <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                           <div className="posterImage__runtime">
                              {movie ? movie.release_date : ""}
                              <span className="posterImage__rating">
                                 {movie ? movie.vote_average : ""}
                                 <i className="fas fa-star" />{" "}
                              </span>
                           </div>
                           <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                     </Link>
                  ))
               }
            </Carousel>
            <h1>Top Rated Movie</h1>

            <div>
               {
                  TopMovies.map((movie, id) => (
                     <Link key={id} to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                        <div className="cards" > <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" />
                           <div className="cards__overlay">
                              <div className="card__title">{movie ? movie.original_title : ""}</div>
                              <div className="card__runtime">
                                 {movie ? movie.release_date : ""}
                                 <span className="card__rating">{movie ? movie.vote_average : ""}<i className="fas fa-star" /></span>
                              </div>
                              <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>

                           </div>
                        </div>

                     </Link>
                  ))
               }
            </div>


         </div>
      </>
   )
};

export default TopRated;
