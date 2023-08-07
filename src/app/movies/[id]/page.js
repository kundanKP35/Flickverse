import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import { getMovieDetails, getSimilarMovies } from "@/utils/requests";

const MovieDetails = async ({ params }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";
  const movieDetails = await getMovieDetails(params.id);
  const similarMovies = await getSimilarMovies(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.single_card_section}>
        <div className={styles.movie_image}>
          <img
            src={IMAGE_BASE_URL + movieDetails.backdrop_path}
            alt={movieDetails.title}
          />
        </div>
        <div className={styles.movie_details}>
          <h3>{movieDetails.title}</h3>
          <div className={styles.genres_container}>
            {movieDetails.genres.map((genre) => {
              return <span key={genre.id}>{genre.name}</span>;
            })}
          </div>
          <p style={{ marginTop: "0.5rem" }}>{movieDetails.overview}</p>
        </div>
      </div>

      <div className={styles.similar_movies_container}>
        <h2>Similar Movies</h2>
        <div className={styles.similar_movies}>
          {similarMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <Link
                  href={"/movies/" + movie.id}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={IMAGE_BASE_URL + movie.poster_path}
                    alt={movie.title}
                    style={{ width: "100%", height: "200px" }}
                  />

                    <h5>{movie.title}</h5>
                </ Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
