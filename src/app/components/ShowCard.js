import Link from "next/link";

const ShowCard = ({ show }) => {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

  return (
    <div className="overflow-hidden shadow-md w-[12rem]">
      <Link href={"/shows/" + show.id}>
        <div className="h-70 overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-1">
          <img
            className="object-cover w-full h-full"
            src={IMAGE_BASE_URL + show.poster_path}
            alt={show.name}
          />
        </div>
        <div className="text-sm">
          <h2 className="text-lg font-semibold text-white mb-2 mt-1">{show.name.substring(0, 20)}</h2>
          <p className="text-gray-400">{`${show.overview.substring(0, 70)}...`}</p>
        </div>
      </Link>
    </div>
  );
};

export default ShowCard;
