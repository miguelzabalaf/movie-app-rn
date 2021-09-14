import React, { Suspense } from "react";
import useControllers from "../../../controllers";
import useComponents from "../../components";
import useSkeletons from "../../skeletons";

const SearchScreen = () => {
  // Views
  const { MovieResultSearch } = useComponents();
  const { MovieResultSearchSkeleton } = useSkeletons();
  // Controllers
  const { useScreenHooks } = useControllers();
  const { useSearchScreen } = useScreenHooks();
  const { movies } = useSearchScreen();

  return (
    <Suspense fallback={<MovieResultSearchSkeleton />}>
      <MovieResultSearch movies={movies} />
    </Suspense>
  );
};

export default SearchScreen;
