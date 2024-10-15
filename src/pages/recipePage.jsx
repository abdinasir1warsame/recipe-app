import RecipeHeader from '../components/recipeHeader';
import { useLocation, Navigate } from 'react-router-dom';

import Ingredients from '../components/ingredients';
import Method from '../components/method';
import { useEffect, useState } from 'react';

export default function RecipePage() {
  const location = useLocation();
  const { recipe } = location.state || {};
  const [recipeData, setRecipeData] = useState('');

  useEffect(() => {
    console.log('useEffect triggered');
    const apiKey = '09f77a001bc540d4999c4f79fc69106f';
    const url = `https://api.spoonacular.com/recipes/${recipe}/information?apiKey=${apiKey}&includeNutrition=true`;

    async function fetchRecipeData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response not ok');
        }
        const data = await response.json();
        setRecipeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (recipe) {
      fetchRecipeData();
    } else {
      console.log('recipeId is invalid');
    }
  }, []);

  return (
    <>
      <div className="max-w-screen overflow-x-hidden">
        <RecipeHeader recipeData={recipeData} />
        <div className="flex flex-col-reverse lg:flex-row ">
          <Method recipeData={recipeData} />
          <Ingredients recipeData={recipeData} />
        </div>
      </div>
    </>
  );
}
