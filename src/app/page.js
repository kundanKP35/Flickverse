import HeroSection from "@/app/components/HeroSection";
import { getActionMovies, getTrendingMovies, getTrendingShows, getComedyMovies, getHorrorMovies,getRomanceMovies, getMoviePosters } from "@/utils/requests";
import Row from "./components/Row";

const Home = async() => {
  const moviePosters = await getMoviePosters();
  const trendingMovies = await getTrendingMovies();
  const trendingShows = await getTrendingShows();
  const actionMovies = await getActionMovies();
  const romanceMovies = await getRomanceMovies();
  const comedyMovies = await getComedyMovies();
  const horrorMovies = await getHorrorMovies();

  return (
    <>
      <main className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
      <HeroSection moviePosters={moviePosters}/>

      <section>
        <Row title="Trending Movies" movies={trendingMovies} category="movies" />
        <Row title="Trending Shows" movies={trendingShows} category="shows" />
        <Row title="Action Movies" movies={actionMovies} category="movies" />
        <Row title="Romance Movies" movies={romanceMovies} category="movies" />
        <Row title="Comedy Movies" movies={comedyMovies} category="movies" />
        <Row title="Horror Movies" movies={horrorMovies} category="movies" />
      </section>
      </main>

    </>
  );
};


export default Home;
