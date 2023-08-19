"use client"
import React, { useState, useEffect } from "react";

const AddToList = ({ movieId }) => {
  const [isInMyList, setIsInMyList] = useState(false);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    setIsInMyList(savedMovies.includes(movieId));
  }, [movieId]);

  const handleToggleMyList = () => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    if (isInMyList) {
      const updatedList = savedMovies.filter((id) => id !== movieId);
      localStorage.setItem("myList", JSON.stringify(updatedList));
    } else {
      const updatedList = [...savedMovies, movieId];
      localStorage.setItem("myList", JSON.stringify(updatedList));
    }
    setIsInMyList(!isInMyList);
  };

  return (
    <div>
      <button onClick={handleToggleMyList}>
        {isInMyList ? "Remove from My List" : "Add to My List"}
      </button>
    </div>
  );
};

export default AddToList;
