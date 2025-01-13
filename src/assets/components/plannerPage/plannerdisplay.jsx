import React from 'react';
import { showMoreIcon2, searchIcon } from '../../../shared/icons';

const PlannerDisplay = ({
  planner,
  randomRecipes,
  activeDropdown,
  setActiveDropdown,
  setSelectedRecipe,
}) => {
  // Group the planner by date
  const groupByDate = (planner) => {
    return planner.reduce((acc, plan) => {
      const { date } = plan;
      acc[date] = acc[date] || [];
      acc[date].push(plan);
      return acc;
    }, {});
  };

  const groupedPlanner = groupByDate(planner);

  const toggleDropdown = (index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="planner-display">
      {Object.keys(groupedPlanner).map((date, index) => (
        <div key={index} className="planner-day">
          <h2>{date}</h2>
          <div>
            {groupedPlanner[date].map((plan, idx) => (
              <div key={idx} className="meal-item">
                <p>{plan.meal}</p>
                <img src={plan.recipe.image} alt={plan.recipe.title} />
                <p>{plan.recipe.title}</p>
              </div>
            ))}
          </div>
          <button onClick={() => toggleDropdown(index)}>Plan Meal</button>
          {activeDropdown === index && (
            <div className="dropdown">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <ul>
                {randomRecipes.map((recipe, i) => (
                  <li key={i} onClick={() => setSelectedRecipe(recipe)}>
                    {recipe.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PlannerDisplay;
