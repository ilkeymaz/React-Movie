import '../css/MovieCard.css'
function MovieCard({movie}){

    function onHeartClick(){
        alert('clicked!')
    }

    return <div className= "movie-card" >
        <div className="movie-poster">
            
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie.title"/>
            
            
            <button className="favourite-button" onClick={onHeartClick}> 
                    FAV BUTON 
                </button>
            <div className="movie-info">
                <h3> {movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p> //splitting from the first - to not show the month and day
                

            </div>
        </div>

    </div>
}

export default MovieCard;
