import NutritionCard from './nutritionCard';

export default function Ingredients({ recipeData }) {
  const ingredients = recipeData.extendedIngredients;
  return (
    <>
      {' '}
      <div className="h-full px-14 py-5 ">
        <h1 className="text-5xl mb-5">Ingredients</h1>
        <div className="border-b-2 border-gray-300 mb-10 mt-5 w-[44%]"></div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-7 text-2xl ">
          {ingredients &&
          Array.isArray(ingredients) &&
          ingredients.length > 0 ? (
            ingredients.map((ingredient) => (
              <div className="flex gap-10 items-center" key={ingredient.id}>
                <img
                  className="h-14 w-14 rounded-full"
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                />
                <li>{ingredient.original}</li>
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
