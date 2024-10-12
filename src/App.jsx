import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import RecipesPage from './pages/recipesPage';
import RecipePage from './pages/recipePage';

const App = () => {
  return (
    <div className="flex flex-col   bg-gray-100">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/recipe" element={<RecipePage />} />
      </Routes>
    </div>
  );
};

export default App;
