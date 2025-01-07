export default function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <div className="hidden lg:block fixed w-64 bg-neutral text-neutral-content h-screen px-4 py-4 flex flex-col">
        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="rounded-full w-10 h-10 flex items-center justify-center">
            <img src="https://img.icons8.com/color/50/000000/food.png" alt="" />
          </div>
          <h1 className="text-2xl font-bold">Flavor Layer</h1>
        </div>

        {/* Navigation Links */}
        <div className="space-y-6">
          {/* Primary Section */}
          <div>
            <h2 className="text-md font-bold mb-2">My section</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Home Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2 7-7 7 7 2 2M5 12v9a2 2 0 002 2h3m10-11l2 2v9a2 2 0 01-2 2h-3m0-9l-7-7-7 7"
                    />
                  </svg>
                  Recipes
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Shopping Cart Icon */}
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
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  Shopping list
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Calendar Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3M16 7V3M3 7h18M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  Meal planner
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Book Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21l-7-5-7 5V5l7-5 7 5v16z"
                    />
                  </svg>
                  Cookbooks
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Tag Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 6h8m-8 4h8m-8 4h8m-8 4h8"
                    />
                  </svg>
                  Tags
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* User Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  Profile
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v14m7-7H5"
                    />
                  </svg>
                  Add recipe
                </button>
              </li>
            </ul>
          </div>

          {/* Secondary Section */}
          <div>
            <h2 className="text-md font-bold mb-2">More</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Explore Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 11l-5 5-5-5m0 0l5-5 5 5M3 12h18"
                    />
                  </svg>
                  Discover
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Search Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-4a8 8 0 10-8 8 8 8 0 008-8z"
                    />
                  </svg>
                  Search users
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Help Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 6h8m-8 4h8m-8 4h8m-8 4h8"
                    />
                  </svg>
                  Onboarding
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-auto">
          <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
            {/* Feedback Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14l-7 7m0 0l7 7-7-7"
              />
            </svg>
            Feedback
          </button>
        </div>
      </div>
    </>
  );
}
