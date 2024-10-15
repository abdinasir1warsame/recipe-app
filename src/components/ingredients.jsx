import NutritionCard from './nutritionCard';

export default function Ingredients({ recipeData }) {
  const ingredients = recipeData.extendedIngredients;
  return (
    <>
      {' '}
      <div className="h-full px-5 mb-20">
        <h1 className="text-5xl mb-5">Ingredients</h1>
        <div className="border-b-2 border-gray-300 mb-20 mt-5 w-[80%]"></div>

        <ul className="grid grid-cols-2 lg:grid-cols-1 gap-5 items-center lg:gap-7 text-medium lg:text-2xl ">
          {ingredients &&
          Array.isArray(ingredients) &&
          ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <div
                className="flex gap-5 items-center w-[70%]"
                key={ingredient.id}
              >
                <img
                  className="h-10 w-10 lg:h-14 lg:w-14 rounded-full"
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                />
                <li>{ingredient.original.split(' ').slice(0, 5).join(' ')}</li>
              </div>
            ))
          ) : (
            <p>No ingredients available.</p> // Fallback content if ingredients is empty or undefined
          )}
        </ul>
      </div>
    </>
  );
}
