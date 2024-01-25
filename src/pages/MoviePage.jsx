import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleMovie from "../components/SingleMovie";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [singleMovie, setSingleMovie] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  const API_KEY = import.meta.env.VITE_MOVIES_DB_API_KEY;

  const getMovie = async (movieId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`
      );
      const data = await response.json();
      setSingleMovie(data);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
      throw new Error(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <div className="w-full h-min-screen bg-indigo-600 font-serif text-white">
      <div className="max-w-[1024px] py-10 px-4 w-full mx-auto min-h-screen bg-indigo-600 relative">
        <h1 className="text-center text-4xl md:text-5xl italic font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-red-900">
          <a href="/">Movielly</a>
        </h1>
        <p className="text-gray-100 mb-6 text-center">
          Let's see some movie data. 👌
        </p>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {isError ? (
              <div className="flex flex-col gap-2 justify-center items-center pt-6">
                <h1 className="font-bold text-xl">Failed to get data.</h1>
                <h2 className="text-red-200 font-semibold uppercase text-2xl">
                  Network error.
                </h2>
                <p className="text-gray-300">Try later</p>
              </div>
            ) : (
              <SingleMovie singleMovie={singleMovie} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MoviePage;
