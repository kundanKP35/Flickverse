"use client";
import React, { useState, useEffect } from "react";
import { getMovieDetails } from "@/utils/requests";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const MyList = () => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/original";

  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    setSavedMovies(savedMovies);
  }, []);

  const removeFromListHandler = (movieId) => {
    const updatedList = savedMovies.filter((movie) => movie.id !== movieId);
    setSavedMovies(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
    toast.success("Removed from collection!");
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-between min-h-[80vh] mt-[6rem] px-[2.5rem]">
      {savedMovies.map((item) => {
        const isMovie = "title" in item;
        const name = isMovie ? item.title : item.name;
        const linkPrefix = isMovie ? "/movies" : "/shows";

        return (
          <div
            key={item.id}
            className="overflow-hidden w-[11rem] my-4 mx-3 transition-transform transform hover:-translate-y-1"
          >
            <Link href={`${linkPrefix}/${item.id}`}>
              <div className="h-60 overflow-hidden cursor-pointer">
                <img
                  className="object-cover w-full h-full"
                  src={IMAGE_BASE_URL + item.poster_path}
                  alt={name}
                />
              </div>
            </Link>
            <div className="flex gap-4 items-center">
              <h2 className="text-sm font-normal text-white mt-1">
                {name.substring(0, 20)}
              </h2>

              <button
                onClick={() => removeFromListHandler(item.id)}
                className="text-red-500 "
              >
                <MdDelete className="text-xl" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyList;
