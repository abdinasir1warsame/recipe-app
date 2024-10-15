import img from '../assets/images/food.avif';
export default function CookingSteps({ recipeData }) {
  const method = recipeData.analyzedInstructions[0].steps;
  return (
    <div className="bg-dark bg-slate-100 h-full rounded-2xl  duration-300 mt-10">
      <div className=" flex flex-col gap-10">
        {method && Array.isArray(method) && method.length > 0 ? (
          method.map((step, index) => (
            <div className=" w-full lg:w-2/3 text-lg">
              <div className="order-2 md:order-1">
                <div className=" pb-6 flex flex-col gap-7">
                  <div className="flex items-center gap-5">
                    <div className="text-color text-5xl lg:text-5xl ">
                      <h1 className="font-bold">{step.number}</h1>
                    </div>
                    <div className="text-3xl">
                      {' '}
                      {step.step.split(' ').slice(0, 3).join(' ')}
                    </div>
                  </div>
                  <p className="leading-8 tracking-wide text-xl lg:text-2xl font-light pl-14">
                    {step.step}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No method instructions available.</p> // Fallback content if method is empty or undefined
        )}
      </div>
    </div>
  );
}
