// import bannerImg from '../assets/images/food.avif';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from './nav';
// export default function Banner() {
//   const [searchParam, setSearchParam] = useState('');
//   const [recipeData, setRecipeData] = useState('');
//   const navigate = useNavigate();
//   const apiKey = '09f77a001bc540d4999c4f79fc69106f';

//   async function fetchRecipeData(query) {
//     const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true&number=20`;
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('network response not ok');
//       }
//       const data = await response.json();
//       setRecipeData(data);
//       return data;
//     } catch (error) {
//       console.error('unable to fetch data', error);
//     }
//   }

//   const search = async () => {
//     if (searchParam.trim()) {
//       const data = await fetchRecipeData(searchParam);
//       if (data) {
//         navigate('/recipes', {
//           state: { recipeData: data, searchParam: searchParam },
//         });
//       }
//       setSearchParam('');
//     }
//   };

//   return (
//     <div
//       className="relative w-full h-screen  bg-cover bg-center bg-black/80 "
//       style={{ backgroundImage: `url(${bannerImg})` }}
//     >
//       <div className="absolute inset-0 bg-black opacity-30 "></div>
//       {/* nav  */}
//       <Navbar />
//       <div className="relative z-10 text-gray-200 h-5/6 flex flex-col justify-center gap-20 lg:gap-10  px-7 lg:pl-20  ">
//         <h1 className="text-7xl font-bold  leading-none w-full lg:w-2/5 ">
//           Never make a bad meal again{' '}
//         </h1>

//         <div className=" flex w-full lg:w-2/3 text-black ">
//           <input
//             className="w-full lg:w-4/5 rounded-3xl h-16 backdrop-blur-lg bg-white/30 relative z-10 text-xl px-10 font-light placeholder-black"
//             type="text"
//             value={searchParam}
//             onChange={(ev) => {
//               setSearchParam(ev.target.value);
//             }}
//             placeholder="Search by dish, ingredient of cuisine"
//           />
//           <button
//             onClick={search}
//             className="button-custom bg-white h-16  px-9 py-2 rounded-full relative z-10 border-white absolute right-5 lg:right-20  text-lg font-semibold text-gray-800 "
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="size-6 "
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="flex gap-7 text-xl relative z-10 ">
//           <div className="button-custom text-white rounded-3xl   backdrop-blur-lg bg-white/30 px-4 py-1">
//             All Recipes
//           </div>
//           <div className="button-custom text-white rounded-3xl   backdrop-blur-lg bg-white/30 px-4 py-1">
//             All Meal Plans
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import bannerImg from '../assets/images/food.avif';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './nav';

export default function Banner() {
  const [searchParam, setSearchParam] = useState('');
  const [recipeData, setRecipeData] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const navigate = useNavigate();
  const apiKey = '09f77a001bc540d4999c4f79fc69106f'; // Spoonacular API key
  const openAiApiKey =
    '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';

  // Function to fetch recipe data from Spoonacular
  async function fetchRecipeData(query) {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeInformation=true&number=20`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response not ok');
      }
      const data = await response.json();
      setRecipeData(data);
      return data;
    } catch (error) {
      console.error('Unable to fetch data', error);
    }
  }

  // Function to get AI response using fetch
  async function getAiResponse(prompt) {
    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openAiApiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content:
                  'You are a helpful assistant for refining user queries for recipe searches using the Spoonacular API.',
              },
              {
                role: 'user',
                content: `The user is looking for recipes with the following preferences: ${prompt}. Please return only a concise, comma-separated list of search terms that can be passed directly to the Spoonacular recipe search API.`,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const message = data.choices[0].message.content.trim();

      // Ensure we only get search terms (in case there's extra text)
      const aiProcessedQuery = message.split('\n')[0]; // Extract only the first line
      setAiResponse(aiProcessedQuery); // Store the processed AI response
      return aiProcessedQuery; // Return the AI-processed query
    } catch (error) {
      console.error('Error in AI processing', error);
    }
  }

  // Function to handle the search logic
  const search = async () => {
    if (searchParam.trim()) {
      const aiPrompt = `I am looking for a recipe with the following preferences: ${searchParam}. Please suggest search terms I can use for a recipe search API.`;
      const aiProcessedQuery = await getAiResponse(aiPrompt);

      if (aiProcessedQuery) {
        const data = await fetchRecipeData(aiProcessedQuery);
        if (data) {
          navigate('/recipes', {
            state: { recipeData: data, searchParam: aiProcessedQuery },
          });
        }
        setSearchParam(''); // Reset input field
      }
    }
  };

  return (
    <div
      className="relative w-full h-screen  bg-cover bg-center bg-black/80 "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 "></div>
      {/* nav  */}
      <Navbar />
      <div className="relative z-10 text-gray-200 h-5/6 flex flex-col justify-center gap-20 lg:gap-10  px-7 lg:pl-20  ">
        <h1 className="text-7xl font-bold  leading-none w-full lg:w-[55%] ">
          AI-Powered Recipe Search
        </h1>

        <div className=" flex w-full lg:w-2/3 text-black ">
          <input
            className="w-full lg:w-4/5 rounded-3xl h-16 backdrop-blur-lg bg-white/30 relative z-10 text-xl px-10 font-light placeholder-black"
            type="text"
            value={searchParam}
            onChange={(ev) => {
              setSearchParam(ev.target.value);
            }}
            placeholder="Search by dish, ingredient of cuisine"
          />
          <button
            onClick={search}
            className="button-custom bg-white h-16  px-9 py-2 rounded-full relative z-10 border-white absolute right-5 lg:right-20  text-lg font-semibold text-gray-800 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="flex gap-7 text-xl relative z-10 ">
          <div className="button-custom text-white rounded-3xl   backdrop-blur-lg bg-white/30 px-4 py-1">
            All Recipes
          </div>
          <div className="button-custom text-white rounded-3xl   backdrop-blur-lg bg-white/30 px-4 py-1">
            All Meal Plans
          </div>
        </div>
      </div>
    </div>
  );
}
