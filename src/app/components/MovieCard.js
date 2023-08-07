import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const MovieCard = ({movie}) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <>
      <div className={styles.movie_card}>
        <Link href={"/movies/" + movie.id} style={{textDecoration:"none"}}>
          <div className={styles.movie_card_image}>
            <img
              src={IMAGE_BASE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className={styles.movie_card_data}>
             <h2>{movie.title.substring(0,20)}</h2>
                    <p>{`${movie.overview.substring(0,70)}...`}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
