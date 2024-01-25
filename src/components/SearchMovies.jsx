import React from "react";

const SearchMovies = ({ getMovies, input, setInput }) => {
  const searchMovie = (e) => {
    e.preventDefault();
    getMovies(input);
  };

  return (
    <form
      onSubmit={searchMovie}
      className="max-w-[720px] w-full mx-auto px-4 relative bg-inherit mb-12"
    >
      <input
        type="text"
        autoFocus={true}
        placeholder="search movies..."
        className="py-2 px-4 text-semibold w-full bg-indigo-600 text-white placeholder:text-white border border-white rounded-md outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="absolute top-[50%] translate-y-[-50%] right-8"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchMovies;
