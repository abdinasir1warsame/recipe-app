import dinnerImg from '../assets/images/dinner.png';
import { Link } from 'react-router-dom';
import Recipes from '../data/recipeCategories';

export default function Categories() {
  return (
    <div className="h-full w-full lg:h-full px-6 sm:px-12 lg:px-20 py-8 flex flex-col  gap-8  mt-10">
      <div className="flex flex-col gap-2">
        <p className="text-4xl font-clicker font-bold">Choose a Category</p>
        <p className="text-3xl font-bold">SIMPLE RECIPES MADE FOR YOU</p>
      </div>
      <div className=" h-4/5 lg:h-[60%]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  py-4  mb-5">
        {Recipes.slice(0, 4).map((recipe, index) => (
          <Link
            to={'./recipes'}
            key={recipe.id}
            className=" hover:cursor-pointer relative backdrop-blur-lg bg-black/60 rounded-2xl px-8 py-8 flex flex-col justify-between items-center "
          >
            <img className="h-2/3" src={recipe.img} alt="" />
            <p className="h-1/3 flex justify-center items-center text-xl text-center text-white">
              {recipe.description}
            </p>

            <div className="absolute text-white bottom-[-30px] rounded-2xl backdrop-blur-lg bg-black/70 px-8 text-4xl py-2">
              {recipe.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8">
        {Recipes.sort().map((recipe, index) => (
          <Link
            to={'./recipes'}
            key={recipe.id}
            className="h-1/4 w-full items-center"
          >
            <div className="flex justify-center items-center">
              <img
                className="button-custom rounded-[100%] h-28 w-28 object-center object-cover hover:cursor-pointer"
                src={recipe.img}
                alt=""
              />
            </div>

            <h3 className="text-center text-3xl px-5 font-medium mt-2">
              {recipe.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
