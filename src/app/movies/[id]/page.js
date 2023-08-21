
import React from "react";
import Link from "next/link";
import { getMovieDetails, getSimilarMovies,getTrailerURL } from "@/utils/requests";
import TrailerPlayer from "@/app/components/ShowTrailer";
import AddToList from "@/app/components/AddToList";

const MovieDetails = async ({ params }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/original";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);


  const trailerURL = await getTrailerURL(params.id);


  return (
    <div className="px-4 md:px-10 mt-[6rem]">
      <div className="flex flex-col md:flex-row md:justify-start items-center">
        <div className="w-full md:w-[60%] md:h-full">
          <img
            src={IMAGE_BASE_URL + movieDetails.backdrop_path}
            alt={movieDetails.title}
            className="w-full h-auto md:h-full"
          />
        </div>
        <div className="md:pl-8 md:w-[40%] md:mt-0 mt-4">
          <h3 className="text-xl md:text-[1.5rem]">{movieDetails.title}</h3>
          <div className="mt-4">
            {movieDetails.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-red-600 text-white px-2 py-1 mr-2 mb-2 rounded"
              >
                {genre.name}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm">{movieDetails.overview}</p>
          <div className="flex justify-start items-center">
          <TrailerPlayer trailerURL={trailerURL} />
          <AddToList movieDetails={movieDetails} />
          </div>
        </div>

      </div>
      <div className="mt-20">
        <h2 className="text-center md:text-left text-2xl font-semibold">
          Similar Movies
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between mt-4">
          {similarMovies.map((movie) => (
            <div
              key={movie.id}
              className="overflow-hidden w-[11rem] my-4 mx-3 transition-transform transform hover:-translate-y-1"
            >
              <Link href={"/movies/" + movie.id}>
                <div className="h-60 overflow-hidden cursor-pointer">
                  <img
                    className="object-cover w-full h-full"
                    src={IMAGE_BASE_URL + movie.poster_path}
                    alt={movie.title}
                  />
                </div>
                <div className="text-sm">
                  <h2 className="text-sm font-normal text-white mt-1">
                    {movie.title.substring(0, 20)}
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

export default MovieDetails;
