import Recipes from '../data/recipeCategories';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default function RecipesPage() {
  const location = useLocation();
  const Navigate = useNavigate();
  const { recipeData, searchParam } = location.state || {};
  const dish = searchParam.toUpperCase();
  const recipes = recipeData.results;
  const [showMore, SetShowMore] = useState(null);
  const [recipeId, setRecipeId] = useState(null);

  // Function to convert Spoonacular Score to a score out of 5
  const convertSpoonacularScoreToFive = (spoonacularScore) => {
    return (spoonacularScore / 100) * 5;
  };
  const seeMore = () => {
    if (showMore === null) {
      SetShowMore(true);
    }
  };

  // const navigateToRecipe = () => {
  //      if (!recipeId === null) {
  //     Navigate('/recipe', { state: { recipe: recipeId } });
  //   }
  // }
  useEffect(() => {
    if (recipeId !== null) {
      Navigate('./recipe', { state: { recipe: recipeId } });
      console.log(recipeId);
    }
  }, [recipeId]);
  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        {/* <div className="flex bg-gray h-[40vh] lg:px-40 lg:py-5">
          <div className="h-1/4 items-center text-black d">
            <div className="flex justify-center items-center">
              <img
                className="rounded-[100%] h-40 w-40 object-center object-cover hover:cursor-pointer"
                src={recipes[0].image}
                alt=""
              />
            </div>

            <h3 className="text-center text-lg px-5 font-bold mt-5">
              FEATURED RECIPE
            </h3>
            <h4 className="text-center text-xl px-5 font-bold ">
              {recipes[0].title}
            </h4>
          </div>
          <div className="flex flex-col gap-10 py-3 px-5 w-3/5">
            <div className="flex gap-5">
              <div className="backdrop-blur-xxl bg-black/20 px-4 py-1 text-lg rounded-xl">
                HOME
              </div>

              <div className="backdrop-blur-xxl bg-black/20 px-4 py-1 text-lg rounded-xl">
                RECIPES
              </div>

              <div className="px-4 py-1 text-lg bg-[#F9C06A] rounded-xl">
                {dish}
              </div>
            </div>
            <div>
              <h1 className="text-5xl">{dish} RECIPES</h1>
              <p className="text-lg mt-5">
                "What's for dinner?" Gah! That question! Whether it's coming
                from your own tired brain or a family full of hungry askers,
                let's help you get that question answered!
              </p>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col gap-14 py-10 lg:py-20 mb-5 px-10 lg:px-40 w-screen min-h-screen">
          <div className="flex flex-col gap-2">
            <p className=" text-5xl lg:text-4xl font-clicker font-bold">
              Choose a Dish
            </p>
            <p className="text-3xl font-bold">{dish} RECIPES MADE FOR YOU</p>
          </div>
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 lg:gap-10">
            {recipes
              .slice(0, showMore === null ? 10 : 19)
              .map((recipe, index) => {
                // Calculate the converted score
                const scoreOutOfFive = convertSpoonacularScoreToFive(
                  recipe.spoonacularScore
                );

                // Get whole and half stars
                const wholeStars = Math.floor(scoreOutOfFive);
                const halfStar = scoreOutOfFive % 1 >= 0.5 ? 1 : 0; // 1 if there's a half star, 0 otherwise
                const emptyStars = 5 - wholeStars - halfStar; // Fill the remaining with empty stars

                return (
                  <div
                    key={index}
                    className=" flex-col flex justify-between gap-1"
                  >
                    <div
                      className="hover:cursor-pointer hover:scale-105 h-80  lg:h-[10rem]  hover:shadow-lg shadow-black  backdrop-blur-lg bg-black/10 rounded-2xl  flex flex-col justify-between items-center"
                      onClick={() => setRecipeId(recipe.id)}
                      style={{
                        backgroundImage: `url(${recipe.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                    <div className="flex justify-between mt-2">
                      <div className="text-lg font-bold">
                        {scoreOutOfFive.toFixed(1)} average rating:
                      </div>
                      <div className="text-yellow-300">
                        {Array(wholeStars).fill(
                          <FontAwesomeIcon icon={faStar} />
                        )}
                        {halfStar === 1 && (
                          <FontAwesomeIcon icon={faStarHalfAlt} />
                        )}
                        {Array(emptyStars).fill(
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ opacity: 0.3 }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="text-2xl font-medium h-auto lg:h-[4rem]">
                      {recipe.title}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center">
            <button
              onClick={seeMore}
              className="hover:cursor-pointer hover:scale-105 hover:shadow-lg shadow-black backdrop-blur-lg bg-black/30 text-white rounded-3xl py-3 px-6 text-medium xl:px-10 xl:text-xl "
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
