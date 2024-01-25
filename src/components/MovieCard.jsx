import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`movies/${movie.imdbID}`}
      className="pt-8 rounded-md bg-orange-50 text-gray-900 shadow-md hover:scale-105 transition duration-300 ease-in relative overflow-hidden flex flex-col justify-between"
    >
      {movie.Type === "movie" ? (
        <p className="absolute  top-0 right-0 p-1 bg-green-500 text-white">
          {movie.Type}
        </p>
      ) : (
        <p className="absolute  top-0 right-0 p-1 bg-red-500 text-white">
          {movie.Type}
        </p>
      )}
      <h2 className="font-semibold text-xl mb-2 px-4 text-gray-700 leading-5">
        {movie.Title}
      </h2>
      <p className="mb-4 px-4 text-gray-500 text-sm">{movie.Year}</p>
      {movie.Poster !== "N/A" ? (
        <img
          src={movie.Poster}
          alt={`${movie.Title} image`}
          className="object-cover w-full rounded-b-md max-h-[320px]"
        />
      ) : (
        <div className="h-[320px] w-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-800 text-sm font-semibold text-center ">
            Image for this movie not available.
          </p>
        </div>
      )}
    </Link>
  );
};

export default MovieCard;
