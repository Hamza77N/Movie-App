import "../styles/Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
   return <header className="header">
      <ul className="headerLeft">
         <li><Link to={"/"}> <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link></li>
         <li> <Link to={"/top_rated"} > Top Rated </Link> </li>
         <li><Link to={"/upcoming"}> Upcoming </Link> </li>
      </ul>

   </header>
};

export default Navbar;
