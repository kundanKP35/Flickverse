"use client"
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const ShowTrailer = ({ trailerURL }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="relative mt-4">
      <button
        className="py-2 px-3 flex gap-2 items-center bg-[#EF0914] text-white rounded-[4px]"
        onClick={() => setShowPlayer(true)}
      >
        <FaPlay className="h-2 w-2 text-white md:h-4 md:w-4" />
        Show Trailer
      </button>
      {showPlayer && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-10">
          <div className="relative w-full max-w-[800px]">
            <div className="absolute top-3 right-3 z-10 cursor-pointer text-white text-xl">
              <AiOutlineClose onClick={() => setShowPlayer(false)} />
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
      )}
    </div>
  );
};

export default ShowTrailer;


