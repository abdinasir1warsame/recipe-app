import Recipes from '../data/recipeCategories';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/vegan.avif';
import {
  searchIcon,
  filterIcon,
  chevronUp,
  chevronDown,
  favoritesIcon,
  tagsIcon,
  cookbookIcon,
  cuisineIcon,
  difficultyIcon,
  ratingIcon,
  totalTimeIcon,
} from '../shared/icons';

export default function NewHome() {
  const [searchParam, setSearchParam] = useState('');
  const [recipeData, setRecipeData] = useState('');
  const navigate = useNavigate();
  const apiKey = '09f77a001bc540d4999c4f79fc69106f';
  const [showFilters, setShowFilters] = useState(false); // Track filter visibility
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  async function fetchRecipeData(query) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&type=dessert&intolerances=gluten,dairy&addRecipeInformation=true&number=20`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('network response not ok');
      }
      const data = await response.json();
      setRecipeData(data);
      return data;
    } catch (error) {
      console.error('unable to fetch data', error);
    }
  }

  const search = async () => {
    if (searchParam.trim()) {
      const data = await fetchRecipeData(searchParam);
      if (data) {
        navigate('/recipes', {
          state: { recipeData: data, searchParam: searchParam },
        });
      }
      setSearchParam('');
    }
  };
  return (
    <div className=" ">
      {/* Main Content */}
      <div className="flex-1 bg-base-300 text-base-content px-2 lg:px-10 xl:px-14 2xl:px-28 py-4 md-py-8 ml-0 lg:ml-64 min-h-screen mb-12 md:mb-0">
        {/* Search Bar */}
        <div className="space-y-7 md:space-y-10 items-center bg-base-300 text-base-content p-4 rounded-lg shadow-md">
          {/* Search Bar */}
          <div className="space-y-6 ">
            <div>
              <h1 className="text-4xl">Search Your Recipe</h1>
            </div>

            <div className="flex items-center w-full md:w-auto gap-2 pb-2">
              <input
                type="text"
                value={searchParam}
                onChange={(ev) => {
                  setSearchParam(ev.target.value);
                }}
                placeholder="Search by title, ingredients or content..."
                className="input input-bordered w-full md:w-80"
              />
              <button onClick={search} className="btn btn-ghost btn-square">
                {searchIcon}
              </button>
              <button
                className="btn btn-outline btn-sm px-2 flex gap-3"
                onClick={toggleFilters} // Toggle filters on button click
              >
                {filterIcon}
                Filter
                {showFilters ? chevronUp : chevronDown} {/* Dynamic icon */}
              </button>
            </div>
            {/* Filter Buttons */}
            {showFilters && (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
                <div className="dropdown group dropdown-hover">
                  <label
                    tabIndex={0}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {favoritesIcon} Diet
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-50 mt-2 menu p-2 bg-base-100 bg-opacity-100 shadow rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Vegetarian
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Vegan
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Gluten-Free
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Keto
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Paleo
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Low-Carb
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Lacto-Vegetarian
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Ovo-Vegetarian
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Primal
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Whole30
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="dropdown group dropdown-hover">
                  <label
                    tabIndex={1}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {tagsIcon}
                    Intolerance
                  </label>
                  <ul
                    tabIndex={1}
                    className="dropdown-content z-50 mt-2 menu p-2 bg-base-100 bg-opacity-100 shadow rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Vegetarian
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Gluten-Free
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Dairy-Free
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Vegan
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Paleo
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Keto
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Low-Carb
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Nut-Free
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Egg-Free
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        High-Protein
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Low-Sodium
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Whole30
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="dropdown group dropdown-hover">
                  <label
                    tabIndex={2}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {cookbookIcon} Dish Type
                  </label>
                  <ul
                    tabIndex={2}
                    className="dropdown-content z-50 mt-2 menu p-2 bg-base-100 bg-opacity-100 shadow rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Main Course
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Side Dish
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Dessert
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Salad
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Appetizer
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Soup
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Breakfast
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="dropdown group dropdown-hover">
                  <label
                    tabIndex={3}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {cuisineIcon}
                    Cuisine
                  </label>
                  <ul
                    tabIndex={3}
                    className="dropdown-content z-50 mt-2 menu p-2 shadow bg-base-100 rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Italian
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Mexican
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Indian
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Chinese
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Japanese
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        French
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Mediterranean
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        American
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Spanish
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Greek
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Thai
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Middle Eastern
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="dropdown  group dropdown-hover dropdown-hover">
                  <label
                    tabIndex={6}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {totalTimeIcon}
                    Time
                  </label>
                  <ul
                    tabIndex={6}
                    className="dropdown-content z-50 mt-2 menu p-2 shadow bg-base-100 rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Under 15 Minutes
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Under 30 Minutes
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Under 45 Minutes
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />1 Hour
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        1-2 Hours
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        2+ Hours
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="dropdown group dropdown-hover">
                  <label
                    tabIndex={4}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {difficultyIcon}
                    Difficulty
                  </label>
                  <ul
                    tabIndex={4}
                    className="dropdown-content z-50 mt-2 menu p-2 shadow bg-base-100 rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Easy
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Medium
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />
                        Hard
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="dropdown group dropdown-hover dropdown-hover">
                  <label
                    tabIndex={5}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {ratingIcon}
                    Rating
                  </label>
                  <ul
                    tabIndex={5}
                    className="dropdown-content z-50 mt-2 menu p-2 shadow bg-base-100 rounded-box w-52 group-hover:block hidden"
                  >
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />4 Stars & Up
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />3 Stars & Up
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />2 Stars & Up
                      </label>
                    </li>
                    <li>
                      <label className="cursor-pointer">
                        <input type="checkbox" className="mr-2" />1 Star & Up
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* categories  */}
        <div className="space-y-6">
          <h1 className="text-3xl">categories</h1>
          <div className=" grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
            {Recipes.sort().map((recipe, index) => (
              <Link
                to={'./recipes'}
                key={recipe.id}
                className=" mb-4 w-20 md:w-28"
              >
                <div className="flex w-20 md:w-28 ">
                  <img
                    className="button-custom rounded-[100%] h-20 w-20 md:w-28 md:h-28 object-center object-cover hover:cursor-pointer"
                    src={recipe.img}
                    alt=""
                  />
                </div>

                <h3 className=" text-lg text-center font-medium mt-2">
                  {recipe.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* most popular */}
        <div className="space-y-6">
          <h1 className="text-3xl">Most Popular Recipes</h1>
          <div className="grid grid-cols-3 sm-grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-8 ">
            {Recipes.sort().map((recipe, index) => (
              <div className=" shadow-md space-y-1 ">
                <img
                  src={img}
                  alt=""
                  className="rounded-2xl h-24 md:h-32  hover:opacity-75 cursor-pointer"
                />
                <p className="text-lg md:text-xl ">Vegan Soup</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
