const movieInitialStates = () => {

  const initialStateMovies = () => ({
    movies: [],
    page: null,
    totalPages: null
  });

  const initialStateMovieSelected = () => ({
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: null,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: null,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: null,
    vote_count: null
  });

  const initialStateGenres = () => ({
    genres: []
  });

  const initialStateCredits = () => ({
    credits: []
  });

  const initialStatePersonSelected = () => ({
    adult: false,
    also_known_as: [],
    biography: "",
    birthday: "",
    deathday: null,
    gender: null,
    homepage: "",
    id: null,
    imdb_id: "",
    known_for_department: "",
    name: "",
    place_of_birth: "",
    popularity: null,
    profile_path: ""
  });

  return {
    initialStateMovies,
    initialStateMovieSelected,
    initialStateGenres,
    initialStateCredits,
    initialStatePersonSelected,
  };
};

export default movieInitialStates;