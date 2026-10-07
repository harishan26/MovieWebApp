import '../css/MovieCard.css'
// import { CiHeart } from "react-icons/ci";
import { useMovieContext } from '../contexts/MovieContext';
function MovieCard({movie}){
    const {isFavorite,addToFavorites,removeFromFavorites} = useMovieContext()
    const  favorite = isFavorite(movie.id)
    function onFavoriteClick(e)  {
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return(
        <>
        {/* main div - 01 */}
        <div className="movie-card">
            {/* sub div - 01 */}
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" :""}`} onClick={onFavoriteClick}>♡</button>
                </div>
            </div>
            {/* sub div - 02 */}
             <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
        
        </>
    )
}
export default MovieCard