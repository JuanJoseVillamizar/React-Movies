import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContexts'
import MovieCard from '../Components/MovieCard'
function Favorites() {
  const { favorites } = useMovieContext()
  if (favorites) {
    return (
      <div className="favorites">
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="favorites-empty">
        <h2>No favorite movies yep!</h2>
        <p>Start adding movies to your favorites and they will appear here </p>
      </div>
    </>
  )
}
export default Favorites
