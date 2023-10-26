import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../../api/api";
const MovieDetail = (props) => {
  const [loading, setLoading] = useState(true);
  // console.log(location)
  console.log(props);
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  console.log("id num" + id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(`https://swapi.dev/api/people/${id}`);
        console.log(res);
        setMovie(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="movie-card-container bg-transparent flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" bg-gray-200   rounded-lg pt-6 max-w-5xl border border-gray-300 shadow-lg">
            <div className="mb-4 text-center pl-24 pr-24">
              <h2 className="text-3xl font-bold">{movie?.name}</h2>
            </div>
            <div className="mb-8 pl-12">
              <p className="text-lg mb-3">
                <span className="font-semibold">Height:</span> {movie.height} cm
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Mass:</span> {movie.mass} Kg
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Hair Color:</span>{" "}
                {movie.hair_color}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Skin Color:</span>{" "}
                {movie.skin_color}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Eye Color:</span>{" "}
                {movie.eye_color}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Birth Year:</span>{" "}
                {movie.birth_year}
              </p>
              <p className="text-lg mb-3">
                <span className="font-semibold">Eye Gender:</span>{" "}
                {movie.gender}
              </p>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
