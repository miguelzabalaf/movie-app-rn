const useMovieTypes = () => {
  const GET_MOVIES_NOW_PLAYING_DATA = 'GET_MOVIES_NOW_PLAYING_DATA';
  const GET_POPULAR_MOVIES_DATA = 'GET_POPULAR_MOVIES_DATA';
  return {
    GET_MOVIES_NOW_PLAYING_DATA,
    GET_POPULAR_MOVIES_DATA,
  };
};

export default useMovieTypes;