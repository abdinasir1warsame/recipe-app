import bannerImg from '../assets/images/food.avif';
import NutritionCard from './nutritionCard';

export default function RecipeHeader({ recipeData }) {
  console.log(recipeData);
  return (
    <>
      <div className="h-full w-screen grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-20 gap-2 mb-10 lg:mb-0">
        <div className=" grid grid-cols-1 sm:grid-cols-1 rounded-2xl  py-0 lg:py-10">
          <div className=" h-2/3 w-full  lg:w-[90%]">
            <img
              src={recipeData.image}
              alt=""
              style={{ width: '100%', height: '70%', objectFit: 'fill' }} // Full size, no aspect ratio
              className="rounded-t-none  lg:rounded-t-lg"
            />

            <NutritionCard recipeData={recipeData} />
          </div>
        </div>
        <div className=" text-xl px-5 lg:px-12 flex flex-col gap-5  justify-center items-center  lg:mt-0 ">
          <p className="text-5xl">{recipeData.title}</p>
          <div
            className="leading-normal text-[18px]"
            dangerouslySetInnerHTML={{ __html: recipeData.summary }}
          />
        </div>
      </div>
    </>
  );
}
