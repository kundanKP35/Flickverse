import React from "react";
import Link from "next/link";
import { getShowDetails, getSimilarShows,getShowTrailerURL } from "@/utils/requests";
import TrailerPlayer from "@/app/components/ShowTrailer";
import AddToList from "@/app/components/AddToList";

const ShowDetails = async ({ params }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/original";
  const showDetails = await getShowDetails(params.id);
  const similarShows = await getSimilarShows(params.id);
  const trailerURL = await getShowTrailerURL(params.id);

  return (
    <div className="px-4 md:px-10 mt-[6rem]">
      <div className="flex flex-col md:flex-row md:justify-start items-center">
        <div className="w-full md:w-[60%] md:h-full">
          <img
            src={IMAGE_BASE_URL + showDetails.backdrop_path}
            alt={showDetails.name}
            className="w-full h-auto md:h-full"
          />
        </div>
        <div className="md:pl-8 md:w-[40%] md:mt-0 mt-4">
          <h3 className="text-xl md:text-[1.5rem]">{showDetails.name}</h3>
          <div className="mt-4">
            {showDetails.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-red-600 text-white px-2 py-1 mr-2 mb-2 rounded"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm">{showDetails.overview}</p>
          <div className="flex justify-start items-center">
            <TrailerPlayer trailerURL={trailerURL} />
            <AddToList movieDetails={showDetails} />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center md:text-left text-2xl font-semibold">
          Similar Shows
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between mt-4">
          {similarShows.map((show) => (
            <div
              key={show.id}
              className="overflow-hidden w-[11rem] my-4 mx-3 transition-transform transform hover:-translate-y-1"
            >
              <Link href={"/shows/" + show.id}>
                <div className="h-60 overflow-hidden cursor-pointer">
                  <img
                    className="object-cover w-full h-full"
                    src={IMAGE_BASE_URL + show.poster_path}
                    alt={show.name}
                  />
                </div>
                <div className="text-sm">
                  <h2 className="text-sm font-normal text-white mt-1">
                    {show.name.substring(0, 20)}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
