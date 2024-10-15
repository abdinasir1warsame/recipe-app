import { useEffect } from 'react';
import soup from '../assets/images/soup.avif';
import CookingSteps from './cookingSteps';
import Ingredients from './ingredients';

export default function Method({ recipeData }) {
  // Check if recipeData and its required properties are present
  if (
    !recipeData ||
    !recipeData.analyzedInstructions ||
    !recipeData.analyzedInstructions.length
  ) {
    return (
      <div className="h-full px-14 py-10">
        <h1 className="text-5xl">Cooking Steps</h1>
        <div className="border-b-2 border-gray-300 mb-10 mt-5 w-[44%]"></div>
        <p>Loading recipe instructions...</p> {/* Fallback content */}
      </div>
    );
  }

  const method = recipeData.analyzedInstructions[0].steps;

  return (
    <div className="w-[100%] lg:w-[70%] ">
      <div className="w-[100%] px-5 lg:px-10 mb-20">
        <h1 className="text-5xl ">Cooking Steps</h1>
        <div className="border-b-2 border-gray-300 mb-20 mt-5 w-[100%]"></div>
        <CookingSteps recipeData={recipeData} />
      </div>
    </div>
  );
}
