import { getImgUrl } from "../../utils/cinema-utils";

const MovieDetailsModal = ({handleModalClose,movie}) => {
    return (
        <div
            class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm"
        >
            <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto"
            >
                <div
                    class="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden"
                >
                    <img
                        class="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
                        src={getImgUrl(movie.cover)}
                        alt=""
                    />
                    <div class="p-5 lg:p-11">
                        <div class="">
                            <h2 class="text-3xl lg:text-[50px] mb-2 font-bold">{movie.title}</h2>
                            <span
                                class="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">{movie.genre}</span>
                            <div></div>
                        </div>
                        <p class="text-sm lg:text-base mb-8 lg:mb-16">
                            {movie.description}
                        </p>
                        <div class="grid lg:grid-cols-2 gap-2">
                            <a
                                class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                href="#"
                            >
                                <img src="./assets/tag.svg" alt="" />
                                <span>${movie.price} | Add to Cart</span>
                            </a>
                            <a onClick={handleModalClose}
                                class="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                                href="#"
                            >
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsModal;