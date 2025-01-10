import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <>
      {/* Sidebar */}
      <div className="hidden lg:block fixed w-64 bg-base-300 text-neutral-content h-screen px-4 py-4 flex flex-col">
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
                <Link
                  to={'/search'}
                  className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  {/* Home Icon */}
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
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  Search recipes
                </Link>
              </li>
              <li>
                <Link
                  to={'/profile'}
                  className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  {/* User Icon */}
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to={'/generate-recipe'}
                  className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                >
                  {/* Tag Icon */}
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
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                  Generate AI Recipe
                </Link>
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
                <Link
                  to={'/planner'}
                  className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
                >
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
                </Link>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">
                  {/* Book Icon */}
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Favourites
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
