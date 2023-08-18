"use client"
import React, { useRef, useState, useEffect } from "react";
import { searchMoviesAndShows } from "@/utils/requests";
import styles from "@/app/styles/common.module.css";
import MovieCard from "./MovieCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchPage = () => {
  const searchNameRef = useRef();
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const name = searchNameRef.current.value;
      const result = await searchMoviesAndShows(name);
      console.log(result);
      setMovies(result);

      if (result.length === 0) {
        toast.error("No movies found");
      }
    } catch (error) {
      toast.error("An error occurred while searching for movies");
    }
  };



  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center h-[20vh] pt-20 bg-black">
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
            <input
              type="text"
              ref={searchNameRef}
              placeholder="Search for movies and TV shows"
              className="bg-transparent outline-none px-2 py-1 w-64 md:w-96 text-black"
            />
            <button
              onClick={handleSearch}
              className="bg-red-600 text-white rounded-full px-4 py-1 ml-2"
            >
              Search
            </button>
          </div>
        </div>
        {movies.length > 0 ? (
          <div className={styles.container}>
            <h1 className={styles.movie_heading}>Search Results</h1>
            <div className={styles.card_section}>
              {movies.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
          </div>
        ) : (
          <div className="h-[80vh]"></div>
        )}
      </div>
      <ToastContainer /> {/* Place ToastContainer here */}
    </>
  );
};

export default SearchPage;
