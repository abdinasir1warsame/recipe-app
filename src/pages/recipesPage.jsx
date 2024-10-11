import Recipes from '../data/recipeCategories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarRegular,
} from '@fortawesome/free-solid-svg-icons';

export default function RecipesPage() {
  return (
    <>
      <div className="">
        <div className=" flex backdrop-blur-lg bg-black/20 bg-black h-[40vh] lg:px-40 lg:py-5">
          <div className="h-1/4  items-center">
            <div className="flex justify-center items-center">
              <img
                className=" rounded-[100%] h-40 w-40 object-center object-cover hover:cursor-pointer"
                src={Recipes[0].img}
                alt=""
              />
            </div>

            <h3 className="text-center text-lg px-5 font-medium mt-5 ">
              FEATURED RECIPE
            </h3>
            <h4 className="text-center text-xl px-5 font-medium ">
              BAKED TORTELLINI WITH SAUSAGE
            </h4>
          </div>
          <div className="flex flex-col gap-10 py-3  px-5  w-3/5  ">
            <div className="flex gap-5">
              <div className="backdrop-blur-xxl bg-black/20 px-4 py-1 text-lg rounded-xl">
                HOME
              </div>

              <div className="backdrop-blur-xxl bg-black/20 px-4 py-1 text-lg rounded-xl">
                RECIPES
              </div>

              <div className="  px-4 py-1 text-lg bg-[#F9C06A] rounded-xl">
                DINNER
              </div>
            </div>
            <div>
              <h1 className="text-5xl">DINNER RECIPES</h1>
              <p className="text-lg mt-5">
                "What's for dinner?" Gah! That question! Whether it's coming
                from your own tired brain or a family full of hungry askers,
                let's help you get that question answered!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-14 lg:py-20  mb-5 px-10 lg:px-40 w-screen min-h-screen">
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-clicker font-bold">Choose a Dish</p>
            <p className="text-3xl font-bold">DINNER RECIPES MADE FOR YOU</p>
          </div>
          <div className="   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10   ">
            {Recipes.map((recipe, index) => (
              <div className="h-full h-[20rem] flex-col flex justify-between gap-1">
                <div
                  className=" hover:cursor-pointer hover:scale-105 hover:shadow-lg shadow-black h-full  backdrop-blur-lg bg-black/10 rounded-2xl px-8 py-8 flex flex-col justify-between items-center"
                  style={{
                    backgroundImage: `url(${recipe.img})`,
                    backgroundSize: 'cover', // or 'contain' depending on your preference
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <div className="flex justify-between mt-2">
                  {' '}
                  <div className="text-lg font-bold">4.5 average rating:</div>
                  <div className="text-yellow-300">
                    <FontAwesomeIcon icon={faStar} />{' '}
                    <FontAwesomeIcon icon={faStar} />{' '}
                    <FontAwesomeIcon icon={faStar} />{' '}
                    <FontAwesomeIcon icon={faStarHalfAlt} />{' '}
                  </div>
                </div>
                <div className="text-2xl font-medium">
                  Creamy Garlic Roasted Red Pepper Pasta
                </div>
              </div>
            ))}{' '}
          </div>
          <div className="flex justify-center ">
            {' '}
            <button className=" hover:cursor-pointer hover:scale-105 hover:shadow-lg shadow-black backdrop-blur-lg bg-black/30 text-white rounded-3xl py-3 px-6 text-medium xl:px-10 xl:text-xl ">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
