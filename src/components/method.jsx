import { useEffect } from 'react';
import soup from '../assets/images/soup.avif';

export default function Method({ recipeData }) {
  // Check if recipeData and its required properties are present
  if (
    !recipeData ||
    !recipeData.analyzedInstructions ||
    !recipeData.analyzedInstructions.length
  ) {
    return (
      <div className="h-full px-14 py-10">
        <h1 className="text-5xl">Method</h1>
        <div className="border-b-2 border-gray-300 mb-10 mt-5 w-[44%]"></div>
        <p>Loading recipe instructions...</p> {/* Fallback content */}
      </div>
    );
  }

  const method = recipeData.analyzedInstructions[0].steps;

  return (
    <div className="h-full px-14 py-10">
      <h1 className="text-5xl">Method</h1>
      <div className="border-b-2 border-gray-300 mb-24 mt-5 w-[44%]"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {method && Array.isArray(method) && method.length > 0 ? (
          method.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 bg-gray text-white py-3 px-4 rounded-2xl"
            >
              <div className="text-xl flex gap-4 w-full">
                <div className="h-12">
                  <h2 className="text-3xl items-center">Step</h2>
                </div>
                <div>
                  <h2 className="text-5xl text-black mb-2 h-12">
                    {step.number < 10 ? `0${step.number}` : step.number}
                  </h2>
                  <div className="flex p-5">
                    <div className="h-full px-5 ">
                      <div
                        className="max-h-40 overflow-y-auto" // Fixed height and scrollable
                        style={{ maxHeight: '150px' }} // Adjust max height as needed
                      >
                        <p className="text-[25px] ">{step.step}</p>
                      </div>
                    </div>
                    {step.ingredients && step.ingredients.length > 0 ? (
                      <img
                        className="rounded-lg h-40 w-40 rounded-full"
                        src={
                          step.ingredients[0].image.includes('http')
                            ? step.ingredients[0].image
                            : `https://spoonacular.com/cdn/ingredients_100x100/${step.ingredients[0]?.image}`
                        }
                        alt={step.ingredients[0].name} // Provide alt text for accessibility
                      />
                    ) : (
                      <p>No image available for this ingredient.</p> // Fallback if no ingredients are found
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No method instructions available.</p> // Fallback content if method is empty or undefined
        )}
      </div>
    </div>
  );
}
