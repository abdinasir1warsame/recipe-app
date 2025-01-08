import { Routes, Route } from 'react-router-dom';

import NewRecipePage from './pages/recipe';
import NewHome from './pages/home';
import NewAllRecipes from './pages/allRecipes';
import Layout from './layout/layout';
import AiPage from './pages/generateAiPage';
import MealPlanner from './pages/mealPlanner';
import ProfileSection from './pages/profilePage';
const App = () => {
  return (
    <div className="flex flex-col   bg-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewHome />} />

          <Route path="/recipes/recipe" element={<NewRecipePage />} />
          <Route path="/recipes" element={<NewAllRecipes />} />
          <Route path="/generate-recipe" element={<AiPage />} />
          <Route path="/planner" element={<MealPlanner />} />
          <Route path="/profile" element={<ProfileSection />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
