import bannerImg from '../assets/images/food.avif';
import NutritionCard from './nutritionCard';

export default function RecipeHeader({ recipeData }) {
  console.log(recipeData);
  return (
    <>
      <div className="h-full w-screen grid grid-cols-1 lg:grid-cols-2 px-20 gap-2">
        <div className=" grid grid-cols-1 sm:grid-cols-1 rounded-2xl py-10">
          <div className="h-2/3 w-[90%]">
            <img
              src={recipeData.image}
              alt=""
              style={{ width: '100%', height: '70%', objectFit: 'fill' }} // Full size, no aspect ratio
              className="rounded-t-lg"
            />

            <NutritionCard recipeData={recipeData} />
          </div>
        </div>
        <div className=" text-xl px-12 flex flex-col gap-5 justify-center items-center">
          <p className="text-6xl">{recipeData.title}</p>
          <div
            className="leading-normal"
            dangerouslySetInnerHTML={{ __html: recipeData.summary }}
          />
        </div>
      </div>
    </>
  );
}
