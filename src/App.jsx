import bannerImg from './assets/images/food.avif';

import Banner from './components/banner';
import Categories from './components/categories';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Banner />
      {/* categories */}
      <Categories />
    </div>
  );
};

export default App;
