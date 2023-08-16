const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const BASE_URL = process.env.TMDB_BASE_URL;

export const getMoviePosters = async () => {
    const res =  await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`);
    const data = await res.json();
    return data.results
}

export const getTrendingMovies = async () => {
    const res =  await fetch(`${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results
}

export const getTrendingShows = async () => {
    const res =  await fetch(`${BASE_URL}/trending/tv/day?language=en-US&api_key=${API_KEY}`);
    const data = await res.json();
    return data.results
}

export const getActionMovies = async () => {
    const res =  await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`);
    const data = await res.json();
    return data.results
}

export const getComedyMovies = async () => {
    const res =  await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`);
    const data = await res.json();
    return data.results
}

export const getHorrorMovies = async () => {
    const res =  await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`);
    const data = await res.json();
    return data.results
}

export const getRomanceMovies = async () => {
    const res =  await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`);
    const data = await res.json();
    return data.results
}

export const getMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await res.json();
    return data.results;
}

export const getMovieDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
}

export const getShowDetails = async (id) => {
    const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
    const data = await res.json();
    return data;
}

export const getSimilarMovies = async (id) => {
    const res = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}

export const getSimilarShows = async (id) => {
    const res = await fetch(`${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
}


export const getTrailerURL = async(movieId) => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
  
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const trailerIndex = data.videos.results.findIndex(
          (element) => element.type === 'Trailer'
        );
  
        return `https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`;
      });
  }

export const getShowTrailerURL = async(movieId) => {
    const apiUrl = `https://api.themoviedb.org/3/tv/${movieId}?api_key=${API_KEY}&language=en-US&append_to_response=videos`;
  
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const trailerIndex = data.videos.results.findIndex(
          (element) => element.type === 'Trailer'
        );
  
        return `https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`;
      });
  }