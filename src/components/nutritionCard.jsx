export default function NutritionCard({ recipeData }) {
  return (
    <div className="flex justify-center lg:justify-start backdrop-blur-lg bg-black/60 text-white rounded-lg rounded-t-none">
      <div className="relative flex flex-col gap-2 py-5    px-3 lg:px-12 rounded-lg">
        <div>
          <h1 className="absolute top-[-33px] left-[70px] lg:top-[-33px] text-xl lg:text-3xl t px-2 py-2 backdrop-blur-lg bg-black/70 font-bold rounded-lg ">
            Nutrition Facts (per serving)
          </h1>
        </div>
        <div className="flex justify-between lg:justify-start lg:px-0 px-2 lg:gap-20 text-medium font-bold mt-1">
          <div>
            <div className="font-bold text-sm lg:text-2xl">240</div>
            <div>CALORIES</div>
          </div>
          <div>
            <div className="font-bold text-sm lg:text-2xl">21g</div>
            <div>FAT</div>
          </div>
          <div>
            <div className="font-bold text-sm lg:text-2xl">9g</div>
            <div>CARBS</div>
          </div>
          <div>
            <div className="font-bold text-sm lg:text-2xl">7g</div>
            <div>PROTEIN</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 mb-2 mt-2"></div>
        <div>
          <div className="flex gap-2 mb-2 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>

            <h3 className="border-b-2 border-gray-500 ">
              Show Full Nutrition Label
            </h3>
          </div>
          <p className="text-medium">
            Nutrition information is calculated using an ingredient database and
            should be considered an estimate. In cases where multiple ingredient
            alternatives are given, the first listed is calculated for
            nutrition. Garnishes and optional ingredients are not included.
          </p>
        </div>
      </div>
    </div>
  );
}
