const API_KEY = '6d97b70bf9b22a14e38a147696b744f3'
const Api_url = 'https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  const response = await fetch(`${Api_url}/movie/popular?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export const getSearchMovie = async (query) => {
  const response = await fetch(
    `${Api_url}/search/movie?query=${encodeURIComponent(query)} &api_key=${API_KEY}`,
  )
  const data = await response.json()
  return data.results
}
