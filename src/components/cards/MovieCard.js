import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieDetail from "../modal/MovieDetail";

const MovieCard = ({ movie }) => {
    const url= movie.url
    const id = url.split("/")[5]
    
  

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-5">
      <div className="px-5 flex flex-col h-full relative">
        <h5 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white pt-6">
          {movie.name}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {movie.height} cm
          </span>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="text-blue-100 text-xl font-semibold mr-2 px-2.5 py-0.5 rounded">
            {movie.birth_year}
          </span>
        </div>

        <div className="absolute bottom-0 right-0 mr-2 mb-2">
          <Link
            to={{
              pathname: "/detail/"+id,
              movie: movie,
            }}
            key={id}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;