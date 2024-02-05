import { useState } from "react";
import { getImgUrl } from "../../utils/cinema-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectMovie, setSelectMovie] = useState(null);

	const handleModalClose = () => {
		setSelectMovie(null);
		setShowModal(false)
	}

	const handleMovieSelect = (movie) => {
		setSelectMovie(movie)
		setShowModal(true)
	}


	return (
		<>
			{showModal && <MovieDetailsModal
				movie={selectMovie}
				handleModalClose={handleModalClose}

			></MovieDetailsModal>}

			<a onClick={() => handleMovieSelect(movie)}>
				<figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">

					<img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
					<figcaption className="pt-4">
						<h3 className="text-xl mb-1">{movie.title}</h3>
						<p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

						<div className="flex items-center space-x-1 mb-5">
							<Rating value={movie.rating}></Rating>
						</div>
						<button className="bg-primary rounded-lg py-2 w-full px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
							<img src="./assets/tag.svg" alt="" />
							<span>${movie.price} | Add to Cart</span>
						</button>
					</figcaption>

				</figure>
			</a>
		</>

	);
};

export default MovieCard;