import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PopularRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const navigate = useNavigate();
  const apiKey3 = '74a1a3dced1b4192a47805e76e6bbcae';

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey3}&sort=popularity&number=200&addRecipeInformation=true`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch popular recipes');
        }
        const data = await response.json();

        if (Array.isArray(data.results)) {
          const shuffledRecipes = data.results.sort(() => Math.random() - 0.5);
          setPopularRecipes(shuffledRecipes);
          // Save recipes and timestamp in localStorage
          localStorage.setItem(
            'popularRecipes',
            JSON.stringify(shuffledRecipes)
          );
          localStorage.setItem('lastFetchTime', Date.now());
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

    const loadRecipes = () => {
      const storedRecipes = localStorage.getItem('popularRecipes');
      const lastFetchTime = localStorage.getItem('lastFetchTime');

      // Check if data was fetched within the last 24 hours
      if (
        storedRecipes &&
        lastFetchTime &&
        Date.now() - lastFetchTime < 24 * 60 * 60 * 1000
      ) {
        setPopularRecipes(JSON.parse(storedRecipes));
      } else {
        fetchPopularRecipes();
      }
    };

    loadRecipes();
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate('/recipes/recipe', { state: { recipe: recipeId } });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Most Popular Recipes</h1>
      <div className="grid grid-cols-3 sm-grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-8 ">
        {popularRecipes.slice(0, 8).map((recipe) => (
          <div
            key={recipe.id}
            className="shadow-md space-y-1 cursor-pointer"
            onClick={() => handleRecipeClick(recipe.id)}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-2xl h-24 md:h-32 hover:opacity-75"
            />
            <p className="text-lg md:text-xl">{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
