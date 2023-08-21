"use client"
import React, { useState, useEffect } from "react";
import {BsBookmarkPlus,BsFillBookmarkCheckFill} from "react-icons/bs";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToList = ({movieDetails }) => {

  const [isInMyList ,setInMyList] = useState(false);

  useEffect(() =>{
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    const isPresent = savedMovies.find(x => x.id === movieDetails.id);
    if(isPresent){
      setInMyList(true);
    }
    
  },[])

  const handleToggleMyList = () => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    const isPresent = savedMovies.find(x => x.id === movieDetails.id);
    if(!isPresent){
      const updatedList = [...savedMovies, movieDetails];
      localStorage.setItem("myList", JSON.stringify(updatedList));
      setInMyList(true);
      toast.success("Succesfully addes to your collection");
         }
    else{
      toast.warning("Already exists in your collection");
    }
  };

  return (
 <>
     <div>
      <button onClick={handleToggleMyList}>
        {isInMyList ? <BsFillBookmarkCheckFill className="text-red-500 text-xl mt-6 ml-4"/> : <BsBookmarkPlus className="text-red-500 text-xl mt-6 ml-4"/>}
      </button>
    </div>
 </>
  );
};

export default AddToList;
