import bannerImg from '../assets/images/food.avif';
import Navbar from './nav';
export default function Banner() {
  return (
    <div
      className="relative w-full h-screen  bg-cover bg-center bg-black/80 "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40 "></div>
      {/* nav  */}
      <Navbar />
      <div className="relative z-10 text-gray-200 h-5/6 flex flex-col justify-center gap-4 lg:gap-10 pl-20  ">
        <h1 className="text-7xl font-bold  leading-none w-2/5 ">
          Never make a bad meal again{' '}
        </h1>

        <div className=" flex w-2/3 text-black ">
          <input
            className="w-4/5 rounded-3xl h-16 backdrop-blur-lg bg-white/30 relative z-10 text-xl px-10 font-semibold placeholder-black"
            type="text"
            placeholder="Search by dish, ingredient of cuisine"
          />
          <button className="button-custom bg-white h-16  px-9 py-2 rounded-full relative z-10 border-white absolute right-20  text-lg font-semibold text-gray-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-7 text-xl relative z-10 ">
          <div className="button-custom text-white rounded-3xl   backdrop-blur-lg bg-white/30 px-4 py-1">
            All Recipes
          </div>
          <div className="button-custom text-white rounded-3xl   backdrop-blur-lg bg-white/30 px-4 py-1">
            All Meal Plans
          </div>
        </div>
      </div>
    </div>
  );
}
