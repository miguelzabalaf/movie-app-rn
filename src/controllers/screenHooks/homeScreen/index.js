import { useEffect } from "react";
import useApi from "../../../api";
import useModels from "../../../models";
import useGeneralHooks from "../../generalHooks";

const useHomeScreen = () => {

  // Controllers
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // API
  const { useActions } = useApi();
  const { dispatch, useMovieActions } = useActions();
  const { actGetMogetMoviesNowPlaying } = useMovieActions();


  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { moviesNowPlayingSelector } = useMovieSelectors();
  const moviesNowPlaying = useSelector(moviesNowPlayingSelector);

  useEffect(() => {
    // dispatch(actGetMogetMoviesNowPlaying(() => console.log('Response Success')));
  }, []);

  // const [resp, setResp] = useState({});

  // useEffect(() => {
  //   getMoviesNowPlayingProvider()
  //     .then((data) => {
  //       // console.log(JSON.stringify(data.data, null, 4));
  //       console.log('RESP OK');
  //       setResp(data);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  return {
    navigateTo,
    moviesNowPlaying
  };
};

export default useHomeScreen;