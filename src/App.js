import React, { useState} from "react"
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";

import moviesData from './Components/MoviesData'
import MovieList from './Components/MovieList'
import AddList from "./Components/AddList";
import FilterList from './Components/FilterList'

const App = () => {
    //useState()
    const [movies, setMovieData] = useState(moviesData);
    const [SearchByName, setSearchByName] = useState("");
    const [SearchByRating, setSearchByRating] = useState(0)
    const filteredMovieName = (e) => {
    setSearchByName(e.target.value);
    };
    const filteredMovieRating = (e) => {
    setSearchByRating(e);
    };
    const Add = (NewMovie) => {
    setMovieData([...movies, NewMovie]);
    };
    return(
    <div className="App">
        <h1 style={{color:'black'}}> WELCOME WELCOME!</h1>
        
    <div className="Navbar">
           <Nav>
            <FilterList
            SearchByName={filteredMovieName}
            SearchByRating={filteredMovieRating}
            />
            <form class="form-inline">
               <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
           </Nav>
    </div>

    <MovieList movie={movies} Name={SearchByName} Rating ={SearchByRating} />
    <Nav.Link className="Added">
    <AddList Add={Add} />
    </Nav.Link>

     <footer>
    <hr/>
    <h5>MoviesApp-JARRAY @2021</h5>
    </footer>
</div>
    )
}
export default App