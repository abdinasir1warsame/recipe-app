import Recipes from '../data/recipeCategories';
import img from '../assets/images/vegan.avif';

import { useLocation, Navigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
export default function NewRecipePage() {
  const location = useLocation();
  const { recipe } = location.state || {};
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    console.log('useEffect triggered');
    const apiKey = '09f77a001bc540d4999c4f79fc69106f';
    const url = `https://api.spoonacular.com/recipes/${recipe}/information?apiKey=${apiKey}&includeNutrition=true`;

    async function fetchRecipeData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        const data = await response.json();
        setRecipeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (recipe) {
      fetchRecipeData();
    } else {
      console.log('recipeId is invalid');
    }
  }, []);

  const method = recipeData?.analyzedInstructions?.[0]?.steps || [];
  const ingredients = recipeData?.extendedIngredients || [];

  console.log(recipeData);

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 bg-base-200 text-gray-300 px-2  lg:px-32 ml-0 lg:ml-64">
        {/* top section */}
        <div className="  px-2 lg:px-8 py-8 flex justify-between">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md flex gap-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
            CookBook
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            Share
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
            Plane
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
        {/* middle section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-2 lg:p-8">
          {/* Recipe Image */}
          <div className="lg:col-span-1">
            <img
              src={recipeData.image}
              alt="Recipe Image"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Recipe Details */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-4xl font-bold">{recipeData.title}</h1>
              <div className="flex gap-2">
                <button className="btn btn-sm btn-warning">Share</button>
                <button className="btn btn-sm btn-warning">Plan</button>
              </div>
            </div>
            <div className="text-lg py-2 pb-6">
              <p>
                {recipeData.summary && recipeData.summary.length > 303 ? (
                  <>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: recipeData.summary.substring(0, 303),
                      }}
                    />
                    <span className="text-gray-500"> ... </span>
                    <button
                      className="btn btn-outline btn-sm ml-2 text-lg m-3 hover:text-white hover:opacity-80"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      Read More
                    </button>
                  </>
                ) : (
                  <span
                    dangerouslySetInnerHTML={{ __html: recipeData.summary }}
                  />
                )}
              </p>
            </div>
            <div className="flex items-center gap-4 mb-4 text-lg">
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2">0 Ratings</span>
              </div>
              <div className="text-lg">
                <strong>Author:</strong> Taron Timothée
              </div>
            </div>

            <div className="flex items-center gap-4  mb-4">
              <span className="badge badge-outline text-md px-3 py-4 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Prep: 4 mins
              </span>
              <span className="badge badge-outline text-md px-3 py-4 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cook: 10 mins
              </span>
              <span className="badge badge-outline text-md px-3 py-4 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12h3l3 8 4-16 3 8h4"
                  />
                </svg>
                Nutrients
              </span>
            </div>
          </div>

          {/* Ingredients & Steps */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            {/* Ingredients */}
            <div className="card  shadow-md p-4  text-xl ">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <div className="flex items-center gap-5 mb-8 text-2xl">
                <span>{recipeData.servings} serving</span>
                <button className="btn btn-xs text-xl text-center btn-outline">
                  -
                </button>
                <button className="btn btn-xs text-xl btn-outline">+</button>
              </div>
              <ul className="list-disc list-inside flex flex-col gap-4">
                {ingredients &&
                Array.isArray(ingredients) &&
                ingredients.length > 0 ? (
                  ingredients.map((ingredient) => (
                    <li className="flex gap-4">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox checkbox-primary"
                      />
                      {ingredient.original.split(' ').slice(0, 5).join(' ')}
                    </li>
                  ))
                ) : (
                  <p>No ingredients available.</p> // Fallback content if ingredients is empty or undefined
                )}
              </ul>
            </div>

            {/* Steps */}
            <div className="card shadow-md p-4 text-xl">
              <h2 className="text-2xl font-bold mb-4">Cooking Steps</h2>
              {method.length > 0 ? (
                method.map((step, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-semibold text-2xl mb-4">
                      Step {step.number}
                    </h3>
                    <p>{step.step}</p>
                  </div>
                ))
              ) : (
                <p>No method instructions available.</p> // Fallback content
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </div>
  );
}
