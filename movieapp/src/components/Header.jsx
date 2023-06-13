import { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Header = () => {
   const [popularMovies, setPopularMovies] = useState([])

   useEffect(() => {
      const getData = async () => {
         const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
         const data = await response.json()
         setPopularMovies(data.results)

         console.log(data.results)

      }
      getData()
   }, [])

   return (
      <>
         <div className="poster">
            <Carousel
               showThumbs={false}
               autoPlay={true}
               transitionTime={3}
               infiniteLoop={true}
               showStatus={false}
            >
               {
                  popularMovies.map((movie, id) => (
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


         </div>
      </>
   )
};

export default Header;
