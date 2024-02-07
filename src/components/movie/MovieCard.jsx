import { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cinema-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import tag from '../../assets/tag.svg'
import { MovieContex } from "../../contex/contex";

const MovieCard = ({ movie }) => {
	const [showModal, setShowModal] = useState(false);
	const [selectMovie, setSelectMovie] = useState(null);

	const { cartData, setCartData } = useContext(MovieContex)

	const handleModalClose = () => {
		setSelectMovie(null);
		setShowModal(false)
	}

	const handleMovieSelect = (movie) => {
		setSelectMovie(movie)
		setShowModal(true)
	}
	const handleAddToCart = (movie, event) => {
		event.stopPropagation()
		const foundMovie = cartData.find(item => item.id === movie.id);
		if (!foundMovie) {
			setCartData([...cartData, movie])
		}
		else{
			console.error(`The movie ${movie.title } is already added.`)
		}

	}


	return (
		<>
			{showModal && <MovieDetailsModal
				movie={selectMovie}
				handleModalClose={handleModalClose}
				handleAddToCart={handleAddToCart}

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
						<button className="bg-primary rounded-lg py-2 w-full px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
							onClick={(event) => handleAddToCart(movie, event)}>
							<img src={tag} alt="" />
							<span>${movie.price} | Add to Cart</span>
						</button>
					</figcaption>

				</figure>
			</a>
		</>

	);
};

export default MovieCard;