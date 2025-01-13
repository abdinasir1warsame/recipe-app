import React, { useState } from 'react';

const RecipeModal = ({ selectedRecipe, onAddToPlanner }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');

  const handleAdd = () => {
    if (selectedDate && selectedMeal) {
      onAddToPlanner(selectedDate, selectedMeal);
    }
  };

  if (!selectedRecipe) return null;

  return (
    <dialog open className="recipe-modal">
      <h2>Plan Meal</h2>
      <p>{selectedRecipe.title}</p>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div>
        <label>Meal</label>
        <select
          value={selectedMeal}
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          <option value="">Select a meal</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
      </div>
      <button onClick={handleAdd}>Add to Planner</button>
    </dialog>
  );
};

export default RecipeModal;
