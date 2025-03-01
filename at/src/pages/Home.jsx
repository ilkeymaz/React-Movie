import { useState } from "react";
import MovieCard from "../components/MovieCard"

function Home(){

    const [searchQuery , setSearchQuery] = useState("");

    const movies= [
        {id:1, title: "Coco", release_date: "2020"},
        {id:2, title: "Wicked", release_date: "2025"},
        {id:3, title: "Avatar", release_date: "2023"},
        {id:4, title: "Terminator", release_date: "2020"}
    ];

const handleSearch = (e) => {
    e.preventDefault()// so that the written name wont get erased by the update
    
} 
    return( 
        <div className="home">
             <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="search for movie..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
                <button type="submit" className="search-form"> Search! </button> 

            </form>

            <div className="movies.grid">
                {movies.map(movie => (
                    // movie.title.toLowerCase().startsWith(searchQuery) && 
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}
export default Home;