"use client"
import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Thumbnail from "./Thumbnail";

const Row = ({ title, movies,category }) => {

  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>
      <h2 className="w-56 mt-6 cursor-pointer text-sm font-semibold text-[#fff] transition duration-300 md:text-xl">
        {title}
      </h2>

      <div className="group relative md:ml-2">
        <BiChevronLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("left")}
        />

        <div
          className="flex items-center space-x-0.5 md:space-x-2.5 md:p-2"
          ref={rowRef}
          style={{
            overflowX: "scroll",
            scrollbarWidth: "none", // Hide default scrollbar in Firefox
            "-ms-overflow-style": "none", // Hide default scrollbar in IE and Edge
          }}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} category={category} />
          ))}
        </div>

        <BiChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;
