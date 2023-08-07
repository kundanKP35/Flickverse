import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";
import Link from "next/link";
import { getTrendingMovies } from "@/utils/requests";

const Movies = async ({ searchParams }) => {

//   const totalMovie = 100;
//   const moviePerPage = 8;

//   const totalPages = Math.ceil(totalMovie / moviePerPage);

//   let currentPage = 1;
//   if (Number(searchParams.page) >= 1) {
//     currentPage = Number(searchParams.page);
//   }

//   let offset = (currentPage - 1) * moviePerPage;

  const movies = await getTrendingMovies();

//   const url = `https://netflix54.p.rapidapi.com/search/?query=stranger&offset=${offset}&limit_titles=${moviePerPage}&limit_suggestions=20&lang=en`;

//   let pageNumbers = [];

//   for (let i = currentPage - 3; i <= currentPage + 3; i++) {
//     if (i < 1) continue;
//     if (i > totalPages) break;

//     pageNumbers.push(i);
//   }

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
      {/* <div className={styles.pagination_container}>
        {currentPage - 1 >= 1 && (
          <>
            <Link href="/movies?page=1">{"<<"}</Link>
          </>
        )}
        {pageNumbers.map((page) => (
          <Link
            style={{ color: "#E50914" }}
            key={page}
            href={`/movies?page=${page}`}
          >
            {page}
          </Link>
        ))}
        {currentPage + 1 <= totalPages && (
          <>
            <Link href={`/movies?page=${totalPages}`}>{">>"}</Link>
          </>
        )}
      </div> */}
    </>
  );
};

export default Movies;
