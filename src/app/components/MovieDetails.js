import React from "react";
import Image from "next/image";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const MovieDetails = ({ movie, showPlayer, setShowPlayer, trailerURL }) => {

    const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <>
      <div className="container">
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 h-[80vh] justify-center lg:pb-12">
          <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
            <Image
              fill
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}`}
              className="object-cover"
              alt="movie poster"
            />
          </div>

          <h1 className="text-xl font-bold md:text-2xl lg:text-5xl pl-8">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="max-w-xs text-xs md:max-w-lg md:text-sm lg:max-w-2xl lg:text-lg pl-8  text-[#e4e2e2]">
            {movie?.overview}
          </p>

          <div className="flex space-x-3 pl-6">
            <button
              className="heroButton bg-white text-[#E50914]"
              onClick={() => {
                setShowPlayer(true);
              }}
            >
              <FaPlay className="h-2 w-3 text-[#E50914] md:h-5 md:w-5" />
              Play
            </button>

            {/* <button className="heroButton bg-[gray]/70 " >
              <IoIosInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
              More Info
            </button> */}
          </div>
        </div>

        <div
          className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
            showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
          }`}
        >
          <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
            <span className="font-semibold">Play Trailer</span>
            <div
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
              onClick={() => setShowPlayer(false)}
            >
              <AiOutlineClose className="h-5" />
            </div>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={trailerURL}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              controls={true}
              playing={showPlayer}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;