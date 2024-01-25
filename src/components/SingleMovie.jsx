import React from "react";

const SingleMovie = ({ singleMovie }) => {
  return (
    <div className="py-10 max-w-[620px] w-full mx-auto">
      <div className="flex flex-col justify-center items-center gap-2 mb-10 md:mb-14">
        <h1 className="text-2xl md:text-3xl font-bold italic text-green-500">
          {singleMovie.Title}
        </h1>
        {singleMovie.Director !== "N/A" ? (
          <p className="text-sm font-semibold">{singleMovie.Director}</p>
        ) : (
          <p>Director unknown</p>
        )}
      </div>
      <div className="flex  items-center  gap-2 justify-between mb-6 md:mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="yellow"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        {singleMovie.Awards !== "N/A" ? (
          <p>{singleMovie.Awards}</p>
        ) : (
          <p>{singleMovie.Title} movie didn't recive any award.</p>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="yellow"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </div>
      <p className="text-gray-200 leading-6 mb-4">
        <span className="underline text-xl">Movie description:</span>{" "}
        {singleMovie.Plot !== "N/A" ? (
          <>{singleMovie.Plot}</>
        ) : (
          <>Descriptions for this movie is not available.</>
        )}
      </p>
      <div className="bg-green-500 p-4 rounded-md font-semibold w-fit mb-12">
        {singleMovie.Genre}
      </div>
      {singleMovie.Poster !== "N/A" ? (
        <img
          src={singleMovie.Poster}
          alt={singleMovie.Title}
          className=" w-full  object-cover h-full"
        />
      ) : (
        <div className="w-full h-[200px] bg-gray-400 flex items-center justify-center">
          <p className="font-semibold">Image not available for this movie</p>
        </div>
      )}
      <p className="pt-10 md:pt-16 pb-4">
        <span className="underline text-xl">Actors:</span>
        {singleMovie.Actors !== "N/A" ? (
          <>&nbsp;{singleMovie.Actors}</>
        ) : (
          <>&nbsp;Actors names are not included.</>
        )}
      </p>
      <p className="uppercase font-semibold">{singleMovie.Country}</p>
    </div>
  );
};

export default SingleMovie;
