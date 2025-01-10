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
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [filtersState, setFiltersState] = useState({
    diet: [],
    intolerance: [],
    dishType: [],
    cuisine: [],
    time: [],
    difficulty: [],
    rating: [],
  });
  const navigate = useNavigate();
  const apiKey = '09f77a001bc540d4999c4f79fc69106f';
  const [showFilters, setShowFilters] = useState(false); // Track filter visibility
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };
  // api call for searched recipes
  async function fetchRecipeData(query, filters) {
    const filterParams = [];

    // Loop through each filter category in filtersState and build the query string
    Object.keys(filters).forEach((category) => {
      filters[category].forEach((option) => {
        // Add each selected filter option to the query params
        filterParams.push(`${category}=${encodeURIComponent(option)}`);
      });
    });

    // Create the filter query string if any filters are selected
    const filterQuery =
      filterParams.length > 0 ? `&${filterParams.join('&')}` : '';

    // Build the final URL with the query and any filters
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true&number=20${filterQuery}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Unable to fetch data', error);
    }
  }

  // param for api call
  const search = async () => {
    const query = searchParam.trim() || ''; // If no query, use an empty string

    // Fetch the recipe data, passing both query and filters
    const data = await fetchRecipeData(query, filtersState);

    if (data) {
      navigate('/recipes', {
        state: { recipeData: data, searchParam: query }, // Pass empty query if no query provided
      });
    }

    setSearchParam(''); // Reset the search parameter after searching
  };

  // api triggered by category click
  const handleCategoryClick = async (category) => {
    try {
      const data = await fetchRecipeData(category); // Use the clicked category as the query
      if (data) {
        navigate('/recipes', {
          state: { recipeData: data, searchParam: category }, // Pass the category name as the searchParam
        });
      }
    } catch (error) {
      console.error('Error executing search:', error);
    }
  };
  useEffect(() => {
    const fetchPopularRecipes = async () => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&sort=popularity&number=200&addRecipeInformation=true`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch popular recipes');
        }
        const data = await response.json();

        if (Array.isArray(data.results)) {
          // Shuffle the recipes array randomly
          const shuffledRecipes = data.results.sort(() => Math.random() - 0.5);
          setPopularRecipes(shuffledRecipes); // Set shuffled recipes in the state
        } else {
          console.error(
            'API response does not contain an array of recipes:',
            data.results
          );
        }
      } catch (error) {
        console.error('Error fetching popular recipes:', error);
      }
    };

    fetchPopularRecipes();
  }, []); // Run only on component mount
  // filter functions

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
  console.log(filtersState);
  return (
    <div className=" ">
      {/* Main Content */}
      <div className="flex-1 space-y-5 bg-base-200 text-gray-300 px-2 lg:px-10 xl:px-14 2xl:px-28 py-4 md-py-8 ml-0 lg:ml-64 min-h-screen mb-14 mt-7 lg:mt-0 lg:mb-0">
        <div className="space-y-7 md:space-y-10 items-center bg-base-200 text-gray-300 p-4 rounded-lg shadow-md">
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
            {/* Show Filters */}
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
                                () =>
                                  handleFilterChange(filter.category, option) // Use the category
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
        </div>

        {/* categories  */}
        <div className="space-y-6">
          <h1 className="text-3xl">Categories</h1>
          <div className=" grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
            {Recipes.sort().map((recipe, index) => (
              <div
                key={recipe.id}
                className=" mb-4 w-20 md:w-28"
                onClick={() => handleCategoryClick(recipe.name)}
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
              </div>
            ))}
          </div>
        </div>

        {/* most popular */}
        <div className="space-y-6">
          <h1 className="text-3xl">Most Popular Recipes</h1>
          <div className="grid grid-cols-3 sm-grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-8 ">
            {popularRecipes.slice(0, 8).map((recipe, index) => (
              <div key={recipe.id} className=" shadow-md space-y-1 ">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-2xl h-24 md:h-32  hover:opacity-75 cursor-pointer"
                />
                <p className="text-lg md:text-xl ">{recipe.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
