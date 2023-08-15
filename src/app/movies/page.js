import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
import Link from "next/link";
import { getTrendingMovies } from "@/utils/requests";

const Movies = async ({ searchParams }) => {


  const movies = await getTrendingMovies();

  return (
    <>
        <div className={styles.container}>
          <h1 className={styles.movie_heading}>Top Trending Movies</h1>
          <div className={styles.card_section}>
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
    </>
  );
};

export default Movies;
