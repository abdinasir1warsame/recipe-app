import { useState, useEffect } from 'react';
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
  Sparkles,
  shareIcon,
  addRecipeIcon,
  planIcon,
} from '../shared/icons';
export default function AiPage() {
  const [filtersState, setFiltersState] = useState({
    diet: [],
    intolerance: [],
    dishType: [],
    cuisine: [],
    time: [],
    difficulty: [],
    rating: [],
  });
  const handleFilterChange = (filterCategory, option) => {
    setFiltersState((prevState) => {
      const newState = { ...prevState };
      const filterList = newState[filterCategory];
      if (filterList.includes(option)) {
        newState[filterCategory] = filterList.filter((item) => item !== option);
      } else {
        newState[filterCategory] = [...filterList, option];
      }
      return newState;
    });
  };
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };
  console.log(filtersState);
  return (
    <>
      <div className="flex-1 space-y-16 bg-base-300 text-base-content px-2 lg:px-28 py-8 ml-0 lg:ml-64 min-h-screen">
        {/* Search Bar */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl">Describe your desired recipe</h1>
          </div>

          <div className="flex items-center w-full md:w-auto gap-2 pb-2">
            <input
              type="text"
              placeholder="e.g., Spicy vegan pasta with creamy..."
              className="input input-bordered w-full md:w-80"
            />
            <button className="btn btn-ghost btn-square">{searchIcon}</button>
            <button
              className="btn btn-outline btn-sm px-2 flex gap-3"
              onClick={toggleFilters} // Toggle filters on button click
            >
              {filterIcon}
              Filter
              {showFilters ? chevronUp : chevronDown} {/* Dynamic icon */}
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4">
              {[
                {
                  label: 'Diet',
                  icon: favoritesIcon,
                  category: 'diet', // Add the category key here
                  options: [
                    'Vegetarian',
                    'Vegan',
                    'Gluten-Free',
                    'Keto',
                    'Paleo',
                    'Low-Carb',
                    'Lacto-Vegetarian',
                    'Ovo-Vegetarian',
                    'Primal',
                    'Whole30',
                  ],
                },
                {
                  label: 'Intolerance',
                  icon: tagsIcon,
                  category: 'intolerance', // Add the category key here
                  options: [
                    'Vegetarian',
                    'Gluten-Free',
                    'Dairy-Free',
                    'Vegan',
                    'Paleo',
                    'Keto',
                    'Low-Carb',
                    'Nut-Free',
                    'Egg-Free',
                    'High-Protein',
                    'Low-Sodium',
                    'Whole30',
                  ],
                },
                {
                  label: 'Dish Type',
                  icon: cookbookIcon,
                  category: 'dishType', // Add the category key here
                  options: [
                    'Main Course',
                    'Side Dish',
                    'Dessert',
                    'Salad',
                    'Appetizer',
                    'Soup',
                    'Breakfast',
                  ],
                },
                {
                  label: 'Cuisine',
                  icon: cuisineIcon,
                  category: 'cuisine', // Add the category key here
                  options: [
                    'Italian',
                    'Mexican',
                    'Indian',
                    'Chinese',
                    'Japanese',
                    'French',
                    'Mediterranean',
                    'American',
                    'Spanish',
                    'Greek',
                    'Thai',
                    'Middle Eastern',
                  ],
                },
                {
                  label: 'Time',
                  icon: totalTimeIcon,
                  category: 'time', // Add the category key here
                  options: [
                    'Under 15 Minutes',
                    'Under 30 Minutes',
                    'Under 45 Minutes',
                    '1 Hour',
                    '1-2 Hours',
                    '2+ Hours',
                  ],
                },
                {
                  label: 'Difficulty',
                  icon: difficultyIcon,
                  category: 'difficulty', // Add the category key here
                  options: ['Easy', 'Medium', 'Hard'],
                },
                {
                  label: 'Rating',
                  icon: ratingIcon,
                  category: 'rating', // Add the category key here
                  options: [
                    '4 Stars & Up',
                    '3 Stars & Up',
                    '2 Stars & Up',
                    '1 Star & Up',
                  ],
                },
              ].map((filter, index) => (
                <div key={index} className="dropdown group dropdown-hover">
                  <label
                    tabIndex={index}
                    className="btn btn-outline btn-sm flex gap-1"
                  >
                    {filter.icon}
                    {filter.label}
                  </label>
                  <ul
                    tabIndex={index}
                    className="dropdown-content z-50 mt-2 menu p-2 bg-base-100 bg-opacity-100 shadow rounded-box w-52 group-hover:block hidden"
                  >
                    {filter.options.map((option, idx) => (
                      <li key={idx}>
                        <label className="cursor-pointer">
                          <input
                            type="checkbox"
                            className="mr-2"
                            checked={filtersState[filter.category]?.includes(
                              option
                            )}
                            onChange={
                              () => handleFilterChange(filter.category, option) // Use the category
                            }
                          />{' '}
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <button
                className="btn hover:border-white shadow-md btn-sm  bg-gray-800 hover:bg-gray-700"
                onClick={() => setFiltersState({})} // Reset filtersState to an empty object
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
        {/* generate button section */}
        <div className="hero  ">
          <div className="hero-content text-center">
            <div className="space-y-2 max-w-md">
              <button className="btn btn-2xl h-20 w-20 btn-outline border-primary  ">
                {Sparkles}
              </button>
              <h1 className="text-xl font-bold">AI Powered Recipe Generator</h1>
              <p className=" text-lg pb-2 ">
                Let Recipe Ai Generate A Suitable Recipe For You.
              </p>
              <button className="btn btn-primary shadow-md text-gray-300 text-lg px-5 ">
                Generate Recipe With AI
              </button>
              <h1 className="text-lg pt-2 ">Discover Recipes</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
