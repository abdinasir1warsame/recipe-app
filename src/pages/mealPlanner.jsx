import { searchIcon } from '../shared/icons';
import { useState } from 'react';
export default function MealPlanner() {
  const days = [
    { name: 'Sunday', date: 'Jan 5' },
    { name: 'Monday', date: 'Jan 6' },
    { name: 'Tuesday', date: 'Jan 7' },
    { name: 'Wednesday', date: 'Jan 8' },
    { name: 'Thursday', date: 'Jan 9' },
    { name: 'Friday', date: 'Jan 10' },
    { name: 'Saturday', date: 'Jan 11' },
  ];
  const recipes = [
    {
      title: 'Chicken Salmon',
      image:
        'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbiUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Chickpea Delight',
      image:
        'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2twZWElMjBkZWxpZ2h0fGVufDB8fDB8fHww',
    },
    {
      title: 'Chinese Cuisine',
      image:
        'https://plus.unsplash.com/premium_photo-1661600135596-dcb910b05340?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbmVzZSUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Sizzling Kung Pao Chicken',
      image:
        'https://media.istockphoto.com/id/1166032915/photo/close-up-view-traditional-kung-pao-chicken-pan-asian-food-spicy-stir-fried-chinese-dish-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=buUX43RWzvSshMMQFlRSgvNe9emvHoZNj6bYxXJ_4xE=',
    },
    {
      title: 'Zesty Citrus Chicken and Salmon Skewers',
      image:
        'https://media.istockphoto.com/id/612401230/photo/roasted-salmon-skewers-with-bacon-and-lime.webp?a=1&b=1&s=612x612&w=0&k=20&c=nxP5MPudlhD1yab9braunXW1gkgcV0U58czNrgfmwaw=',
    },
  ];
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };
  return (
    <div className="flex-1 space-y-5 bg-base-300 text-base-content px-2 lg:px-10 xl:px-14 2xl:px-28 py-4 md-py-8 ml-0 lg:ml-64 min-h-screen mb-14 mt-9 lg:mt-0 lg:mb-0">
      <h1 className="text-3xl">Meal Plan</h1>
      <div className="space-y-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex bg-base-100  justify-between items-center border-[1px]  border-gray-500 shadow shadow-lg rounded-lg p-4"
          >
            {/* Day and Date */}
            <div className="flex gap-4 ">
              <span className="block text-2xl font-bold">{day.name}</span>
              <span className="text-gray-400 text-xl">{day.date}</span>
            </div>

            {/* Plan Button */}
            {/* Plan Button and Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="px-4 py-2 text-lg font-semibold btn btn-md  rounded-lg transition flex gap-3"
              >
                <span>+</span> Plan
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

                  {/* Recipe List */}
                  <ul className="p-4 space-y-3">
                    {recipes.length > 0 ? (
                      recipes.map((recipe, i) => (
                        <li
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
