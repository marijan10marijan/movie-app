import React from "react";
import MovieCard from "./MovieCard";
import NoMovies from "./NoMovies";
import Loading from "./Loading"; 

const DisplayMovies = ({ movies, isLoading, page, setPage }) => {
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      {movies ? (
        <>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
              <div className="w-full flex items-center justify-between my-10">
                <button
                  onClick={prevPage}
                  className="py-2 px-4 font-semibold rounded-md bg-purple-900 text-white disabled:bg-gray-500 hover:bg-black transition duration-300"
                  disabled={page == 1}
                >
                  {"<< Prev"}
                </button>
                <button
                  onClick={nextPage}
                  className="py-2 px-4 font-semibold rounded-md bg-purple-900 text-white disabled:bg-gray-500 hover:bg-black transition duration-300"
                >
                  {"Next >>"}
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <NoMovies />
      )}
    </>
  );
};

export default DisplayMovies;
