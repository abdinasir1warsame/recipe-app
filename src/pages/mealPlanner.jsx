import { useEffect, useState } from 'react';
import {
  getDocs,
  onSnapshot,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { database } from '../assets/googleSignin/config'; // Adjust the path to your config file
import { userAuth } from '../context/AuthContext';
import { showMoreIcon2, searchIcon } from '../shared/icons';
import { useNavigate } from 'react-router-dom';
export default function MealPlanner() {
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  const [randomRecipes, setRandomRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [next7Days, setNext7Days] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const [planner, setPlanner] = useState([]);
  const [groupedPlanner, setGroupedPlanner] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const { user } = userAuth();

  // Generate the next 7 days
  const getNext7Days = () => {
    const days = [];
    const options = { weekday: 'long', month: 'short', day: 'numeric' };

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date.toLocaleDateString('en-US', options));
    }

    return days;
  };

  // Initialize and update next 7 days
  useEffect(() => {
    setNext7Days(getNext7Days());
  }, []);

  // Fetch suggested recipes and planner data from Firestore
  useEffect(() => {
    if (user) {
      const unsubscribeSuggested = onSnapshot(
        collection(database, 'suggestedRecipes'),
        (querySnapshot) => {
          const suggestedList = [];
          querySnapshot.forEach((doc) => {
            suggestedList.push({ id: doc.id, ...doc.data() });
          });

          setSuggestedRecipes(suggestedList);
          setRandomRecipes(getRandomRecipes(suggestedList));
        }
      );

      const unsubscribePlanner = onSnapshot(
        collection(database, 'planner'),
        (querySnapshot) => {
          const plannerList = [];
          querySnapshot.forEach((doc) => {
            plannerList.push({ id: doc.id, ...doc.data() });
          });

          setPlanner(plannerList);
        }
      );

      return () => {
        unsubscribeSuggested();
        unsubscribePlanner();
      };
    }
  }, [user]);

  // Group planner items by date whenever planner changes
  useEffect(() => {
    const groupByDate = () => {
      const days = getNext7Days();
      const grouped = {};

      // Initialize grouped object with the next 7 days
      days.forEach((day) => {
        grouped[day] = [];
      });

      // Populate grouped object with planner data
      planner.forEach((plan) => {
        if (!grouped[plan.date]) {
          grouped[plan.date] = [];
        }
        grouped[plan.date].push(plan);
      });

      return grouped;
    };

    setGroupedPlanner(groupByDate());
  }, [planner, next7Days]);

  const getRandomRecipes = (recipes) => {
    const shuffledRecipes = [...recipes];
    for (let i = shuffledRecipes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledRecipes[i], shuffledRecipes[j]] = [
        shuffledRecipes[j],
        shuffledRecipes[i],
      ];
    }
    return shuffledRecipes.slice(0, 5);
  };

  const addToPlanner = async () => {
    if (!user) return;
    setSelectedMeal('');

    try {
      const plannerDoc = {
        date: selectedDate,
        meal: selectedMeal,
        recipe: selectedRecipe,
        userId: user.uid,
        createdAt: new Date(),
      };

      await addDoc(collection(database, 'planner'), plannerDoc);
      document.getElementById('my_modal_3').close();
    } catch (error) {
      console.error('Error adding planner:', error);
    }
  };

  const openModal = (recipe) => {
    document.getElementById('my_modal_3').showModal();
    setSelectedRecipe(recipe);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };
  const meals = ['Breakfast', 'Brunch', 'Lunch', 'Dinner'];

  const handleMealClick = (recipeId) => {
    console.log('Recipe clicked:', recipeId); // Add this to debug
    navigate('/recipes/recipe', { state: { recipe: recipeId } });
  };

  const handleDeleteMeal = async (plannerId) => {
    try {
      // Reference the Firestore document
      const plannerDoc = doc(database, 'planner', plannerId);

      // Delete the document from Firestore
      await deleteDoc(plannerDoc);

      // Update the local state to remove the deleted plan
      setPlanner((prevPlanner) =>
        prevPlanner.filter((plan) => plan.id !== plannerId)
      );

      console.log('Meal deleted:', plannerId);
    } catch (error) {
      console.error('Error deleting meal:', error);
    }
  };
  return (
    <div className="flex-1 space-y-5 bg-base-200 text-base-content px-2 lg:px-10 xl:px-14 2xl:px-28 py-7 md-py-8 ml-0 lg:ml-64 min-h-screen mb-14 mt-9 lg:mt-0 lg:mb-0">
      <h1 className="text-3xl">Meal Plan</h1>
      <div className="space-y-4">
        {Object.keys(groupedPlanner).map((date, index) => (
          <div
            key={index}
            className="flex bg-base-100 justify-between items-center border-[1px] border-gray-500 shadow shadow-lg rounded-lg p-4"
          >
            {/* Day and Date */}
            <div>
              <div className="flex gap-4 ">
                <span className="block text-2xl font-bold">{date}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-5">
                {groupedPlanner[date]?.length > 0 ? (
                  groupedPlanner[date]
                    .sort(
                      (a, b) => meals.indexOf(a.meal) - meals.indexOf(b.meal)
                    ) // Sort meals chronologically
                    .map((plan, idx) => (
                      <div key={idx} className="meal-item ">
                        <div className="flex justify-between items-center ">
                          <h2 className="text-xl py-2 mt-1">{plan.meal}</h2>
                          <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="m-1">
                              {showMoreIcon2}
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content gap-1 menu backdrop-blur-md bg-black/40 z-50 border border-gray-300 rounded-lg shadow-lg p-2"
                            >
                              <li onClick={() => handleDeleteMeal(plan.id)}>
                                <a>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div
                          onClick={() => handleMealClick(plan.recipe.id)}
                          className="flex justify-center items-center gap-2 shadow-md p-2 border border-gray-300 rounded-xl hover:cursor-pointer"
                        >
                          <img
                            src={plan.recipe?.image || 'placeholder-image-url'} // Fallback if image is undefined
                            alt={plan.recipe?.title || 'Recipe Image'}
                            className="h-16 w-16 rounded-2xl"
                          />
                          <p className=" font-bold">
                            {plan.recipe?.title
                              ? plan.recipe.title.length > 29
                                ? `${plan.recipe.title.slice(0, 27)}...`
                                : plan.recipe.title
                              : 'Untitled Recipe'}
                          </p>
                        </div>
                      </div>
                    ))
                ) : (
                  <p>No meals planned for this day.</p>
                )}
              </div>
            </div>

            {/* Plan Button */}
            <div className="relative px-3">
              <button
                onClick={() => toggleDropdown(index)}
                className=" px-4 py-2 text-lg font-semibold btn btn-md  rounded-lg transition flex gap-3"
              >
                <span>+</span>
              </button>

              {activeDropdown === index && (
                <div className="absolute right-0 mt-2 w-80 backdrop-blur-md bg-black/40 z-50 border border-gray-300 rounded-lg shadow-lg max-h-[calc(100vh-10rem)] overflow-auto">
                  {/* Search Input */}
                  <div className="flex items-center p-4 border-b border-gray-200">
                    {searchIcon}
                    <input
                      type="text"
                      placeholder="Search by title, ingredients or content..."
                      className="w-full ml-3 bg-transparent text-gray-400 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  {/* modal */}
                  <dialog
                    id="my_modal_3"
                    className="modal backdrop-blur bg-black/20"
                  >
                    <div className="modal-box backdrop-blur-md bg-black/40 z-2 border border-gray-300 h-[65%] overflow-visible">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <h2 className="font-bold text-xl text-white">
                        Organize your Meals
                      </h2>
                      <h3>Choose a date and category for this recipe</h3>

                      <div className="py-3 space-y-2 text-white mt-7 text-xl ">
                        <h2>Date</h2>
                        <div className="dropdown w-full">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn m-1 backdrop-blur-md bg-black/40 w-full text-white text-lg "
                          >
                            {date}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-200 rounded-box z-[10] w-52 p-2 shadow w-full text-white text-lg "
                          >
                            {/* {next7Days.map((day, index) => (
                              <li key={index}>
                                <a
                                  onClick={() => {
                                    setSelectedDate(day);
                                    document.activeElement?.blur();
                                  }}
                                >
                                  {day}
                                </a>
                              </li>
                            ))} */}
                          </ul>
                        </div>
                      </div>

                      <div className="py-3 space-y-2  text-white text-lg ">
                        <h2>Meal type</h2>
                        <div className="dropdown w-full text-white ">
                          <div
                            tabIndex={0}
                            role="button"
                            placeholder="choose Meal"
                            className="btn m-1 backdrop-blur-md bg-black/40 w-full text-white text-lg "
                          >
                            {selectedMeal ? selectedMeal : 'Choose a category'}
                          </div>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[10] w-52 p-2 shadow w-full text-white text-lg "
                          >
                            {meals
                              .filter(
                                (meal) =>
                                  !groupedPlanner[selectedDate]?.some(
                                    (plan) => plan.meal === meal
                                  )
                              )
                              .map((meal, index) => (
                                <li
                                  onClick={() => {
                                    setSelectedMeal(meal);
                                    document.activeElement?.blur();
                                  }}
                                  key={index}
                                >
                                  <a>{meal}</a>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex justify-center ">
                        <button
                          onClick={addToPlanner}
                          className="btn  btn-outline  text-lg text-white mt-8"
                        >
                          Add to Planner
                        </button>
                      </div>
                    </div>
                  </dialog>

                  {/* Recipe List */}
                  <ul className="p-4 space-y-3">
                    {randomRecipes.length > 0 ? (
                      randomRecipes.map((recipe, i) => (
                        <li
                          onClick={() => {
                            openModal(recipe), setSelectedDate(date);
                          }}
                          key={i}
                          className="flex items-center gap-4 p-2 hover:bg-gray-800 cursor-pointer rounded-lg"
                        >
                          {recipe.image ? (
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-14 h-14 rounded-lg object-cover"
                            />
                          ) : (
                            <div className="w-14 h-14 bg-gray-200 flex items-center justify-center rounded-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="w-6 h-6 text-gray-500"
                              >
                                <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM7.25 4.5h1.5v4h-1.5v-4Zm.25 5.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" />
                              </svg>
                            </div>
                          )}
                          <span className="text-lg font-medium text-base-content">
                            {recipe.title}
                          </span>
                        </li>
                      ))
                    ) : (
                      <li className="text-center text-gray-500">
                        No recipes found. Try a different search!
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
