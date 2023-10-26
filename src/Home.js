import MovieCard from "./components/cards/MovieCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import getData from "./api/api";
import Pagination from "./components/Pagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(`https://swapi.dev/api/people?page=${page}`);
        console.log(res);
        setMovies(res.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const onNextPage = () => {
    console.log(page);
    setLoading(true);
    const currentPage=page+1
    setPage(currentPage);
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setLoading(true);
      const currentPage=page-1
      setPage(currentPage);
    }
  };
  return (
    <div className={`App ${loading ? "loading" : ""}`}>
      <div className=" top-0">
        <Header />
      </div>
      {loading ? (
        <div className="movie-card-container bg-transparent flex items-center justify-center max-h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      ) : (
        <div className="movie-card-container flex justify-center flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie, index) => (
              <MovieCard
                key={page.toString() + index.toString()}
                movie={movie}
              />
            ))}
          </div>
          <Pagination
        
            page={page}
            onNext={onNextPage}
            onPrevious={onPreviousPage}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
