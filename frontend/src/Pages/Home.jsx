import MovieCard from '../Components/MovieCard'
import { useState, useEffect } from 'react'
import { getPopularMovies, getSearchMovie } from '../services/Api'
import '../css/Home.css'
function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        console.log(err)
        setError('Failed to load movies...')
      } finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    if (loading) return
    setLoading(true)
    try {
      const SearchResults = await getSearchMovie(searchQuery)
      setMovies(SearchResults)
      setError(null)
    } catch (error) {
      console.log(error)
      setError('Failed to search movies...')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input
          type="Text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button className="search-btn">Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  )
}
export default Home
