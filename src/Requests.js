const API_KEY =  "6883819cdbb71822e4ecc18fd7844c26";

//endpoints

const requests = {
    fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&lenguage=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    getTvPopular: `tv/popular?api_key=${API_KEY}&with_networks=213`,
    getTopRatedTv: `tv/top_rated?api_key=${API_KEY}&with_networks=213`,
    fetchActionSeries: `discover/tv?api_key=${API_KEY}&with_genres=10759&with_networks=213`,
    fetchComedySeries: `discover/tv?api_key=${API_KEY}&with_genres=35&with_networks=213`,
    fetchMisterySeries: `discover/tv?api_key=${API_KEY}&with_genres=9648&with_networks=213`,
    fetchFantasySeries: `discover/tv?api_key=${API_KEY}&with_genres=10765&with_networks=213`,
    fetchRealitySeries: `discover/tv?api_key=${API_KEY}&with_genres=10764&with_networks=213`,
};

export default requests;