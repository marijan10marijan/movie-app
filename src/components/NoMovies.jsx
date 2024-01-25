import React from "react";

function NoMovies() {
  return (
    <div>
      <h1 className="text-center mb-4 text-2xl md:text-3xl">
        Ooops.. Try different search.
      </h1>
      <p className="text-red-400 text-center font-semibold">
        No more available movies!
      </p>
      <a
        href="/"
        className="py-2 px-4 font-semibold rounded-md bg-purple-900 text-white disabled:bg-gray-500 hover:bg-black transition duration-300 block w-fit mx-auto mt-6"
      >
        Go Home
      </a>
    </div>
  );
}

export default NoMovies;
