const useMovieTypes = () => {

  const GET_MOVIES_NOW_PLAYING_DATA = 'GET_MOVIES_NOW_PLAYING_DATA';
  const GET_POPULAR_MOVIES_DATA = 'GET_POPULAR_MOVIES_DATA';
  const GET_UPCOMING_MOVIES_DATA = 'GET_UPCOMING_MOVIES_DATA';
  const SET_MOVIE_SELECTED = 'SET_MOVIE_SELECTED';
  const REMOVE_MOVIE_SELECTED = 'REMOVE_MOVIE_SELECTED';
  const GET_MOVIE_GENRES = 'GET_MOVIE_GENRES';
  const GET_MOVIE_CREDITS = 'GET_MOVIE_CREDITS';
  const REMOVE_MOVIE_CREDITS = 'REMOVE_MOVIE_CREDITS';
  const GET_INFO_PERSON = 'GET_INFO_PERSON';
  const REMOVE_INFO_PERSON = 'REMOVE_INFO_PERSON';

  return {
    GET_MOVIES_NOW_PLAYING_DATA,
    GET_POPULAR_MOVIES_DATA,
    GET_UPCOMING_MOVIES_DATA,
    SET_MOVIE_SELECTED,
    REMOVE_MOVIE_SELECTED,
    GET_MOVIE_GENRES,
    GET_MOVIE_CREDITS,
    REMOVE_MOVIE_CREDITS,
    GET_INFO_PERSON,
    REMOVE_INFO_PERSON,
  };
};

export default useMovieTypes;