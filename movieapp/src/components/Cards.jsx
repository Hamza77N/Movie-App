import "../styles/card.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Cards = () => {




   const [popularMovies, setPopularMovies] = useState([])



   useEffect(() => {
      const getData = async () => {
         const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
         const data = await response.json()
         setPopularMovies(data.results)


      }
      getData()
   }, [])



   return (
      <div>
         {
            popularMovies.map((movie, id) => (
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
   )

};

export default Cards;

