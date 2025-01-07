import { Routes, Route } from 'react-router-dom';

import NewRecipePage from './pages/recipe';
import NewHome from './pages/home';
import NewAllRecipes from './pages/allRecipes';
import Layout from './layout/layout';
const App = () => {
  return (
    <div className="flex flex-col   bg-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewHome />} />

          <Route path="/recipes/recipe" element={<NewRecipePage />} />
          <Route path="/recipes" element={<NewAllRecipes />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
