import React from "react";
import { useState } from "react";

import { useEffect } from "react";
import SearchMovies from "../components/SearchMovies";
import DisplayMovies from "../components/DisplayMovies";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [input, setInput] = useState("");
  const API_KEY = import.meta.env.VITE_MOVIES_DB_API_KEY;

  const getMovies = async (searchQuery, pageNumber) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}&page=${pageNumber}`
      );
      const data = await response.json();
      setMovies(data.Search);
    } catch (err) {
      setIsError(true);
      throw new Error(err);
    }
    setIsLoading(false);
  };

  const startingInputs = [
    "anna",
    "spiderman",
    "superman",
    "luke",
    "lik",
    "maja",
    "neda",
    "eva",
    "beckham",
    "ronaldo",
    "longoria",
    "rihanna",
    "musk",
    "science",
    "programming",
    "web",
    "health",
    "food",
    "zagreb",
  ];

  useEffect(() => {
    if (input === "") {
      const random = Math.floor(Math.random() * startingInputs.length);
      getMovies(startingInputs[random], page);
      setInput(startingInputs[random]);
    } else {
      getMovies(input, page);
    }
  }, [page]);

  return (
    <div className="w-full h-min-screen bg-indigo-600 font-serif text-white">
      <div className="max-w-[1024px] py-10 px-4 w-full mx-auto min-h-screen bg-indigo-600">
        <h1 className="text-center text-4xl md:text-5xl italic font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-red-900">
          <Link to={"/"}>Movielly</Link>
        </h1>
        <p className="text-gray-100 text-center mb-1 text-lg">
          Find information about any movie. 👌
        </p>
        {isError ? (
          <div className="flex flex-col gap-2 justify-center items-center pt-6">
            <h1 className="font-bold text-xl">Failed to get data.</h1>
            <h2 className="text-red-200 font-semibold uppercase text-2xl">
              Network error.
            </h2>
            <p className="text-gray-300">Try later</p>
          </div>
        ) : (
          <>
            <SearchMovies
              getMovies={getMovies}
              input={input}
              setInput={setInput}
            />
            <DisplayMovies
              movies={movies}
              isLoading={isLoading}
              page={page}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
