import MovieCard from '../Components/MovieCard'
import { useState } from 'react'
import '../css/Home.css'
function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const movies = [
    { id: 1, title: 'Terminator', release_date: '1998' },
    { id: 2, title: 'John Wick', release_date: '2014' },
    { id: 3, title: 'Ted', release_date: '2015' },
  ]
  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
  }
  const MovieFilter = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )
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

      <div className="movie-grid">
        {MovieFilter.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  )
}
export default Home
