import useControllers from "../..";
import useApi from "../../../api";
import useModels from "../../../models";

const useHomeScreen = () => {

  // Controllers
  const { useGeneralHooks } = useControllers();
  const { useNavigation } = useGeneralHooks();
  const { navigateTo } = useNavigation();

  // API
  const { useProviders } = useApi();
  const { useMovieProviders } = useProviders();
  const { getMoviesNowPlayingProvider } = useMovieProviders();

  // Models
  const { useSelectors } = useModels();
  const { useSelector, useMovieSelectors } = useSelectors();
  const { moviesNowPlayingSelector } = useMovieSelectors();
  const moviesNowPlaying = useSelector(moviesNowPlayingSelector);

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