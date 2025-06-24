import React, {useContext, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {foodcontext} from "../context/FoodContext";
import {toast} from "react-toastify";

function SingleRecipe() {
  const navigate = useNavigate();
  const {data, setData} = useContext(foodcontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id === recipe.id);
  const [active, setActive] = useState(false);

  const handleDelete = () => {
    const filteredData = data.filter((recipe) => recipe.id !== params.id);
    setData(filteredData);
    toast.success("Recipe deleted");
    localStorage.setItem("recipe", JSON.stringify(filteredData));
    navigate(-1);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      {/* Top Bar */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm font-medium text-gray-600 hover:bg-gray-100 h-10 px-4 rounded-md flex items-center gap-1"
        >
          <i className="ri-arrow-left-line text-lg"></i> Back to Dashboard
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => setActive(!active)}
            className="bg-white text-orange-500 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center"
          >
            {active ? (
              <i className="ri-heart-line text-lg"></i>
            ) : (
              <i className="ri-heart-fill text-lg"></i>
            )}
          </button>
          <button
            onClick={handleDelete}
            className="bg-white text-orange-500 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center"
          >
            <i className="ri-delete-bin-line text-lg"></i>
          </button>
        </div>
      </div>

      {/* Recipe View */}
      {recipe ? (
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow bg-white">
          {/* Image + Title Overlay */}
          <div className="relative">
            <img
              src={recipe.img}
              alt={recipe.Title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 p-6 flex flex-col justify-end text-white">
              <h1 className="text-3xl font-bold">{recipe.Title}</h1>
              <p className="text-sm text-white/90">{recipe.description}</p>
            </div>
          </div>

          {/* Metadata */}
          <div className="flex mt-5 px-5 justify-evenly sm:grid-cols-4  text-center">
            <div className="border flex flex-col items-center justify-center border-gray-300 w-50 rounded-md p-10 text-amber-500">
              <i className="ri-time-line text-2xl"></i>
              <p className="text-sm text-gray-500">Cook Time</p>
              <p className="text-lg font-semibold">{recipe.time || 25} min</p>
            </div>
            <div className="border flex flex-col items-center justify-center border-gray-300 w-50 rounded-md p-10  text-blue-500">
              <i class="ri-group-line text-2xl"></i>
              <p className="text-sm text-gray-500">Servings</p>
              <p className="text-lg font-semibold">{recipe.serving || 4}</p>
            </div>
            <div className="border flex flex-col items-center justify-center border-gray-300 w-50 rounded-md p-10  text-green-500">
              <i class="ri-knife-blood-line text-2xl"></i>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className="text-lg font-semibold">
                {recipe.difficulty || "Easy"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
  {/* INGREDIENTS */}
  <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
    <h2 className="text-2xl font-semibold mb-4 text-center text-orange-600">
      Ingredients
    </h2>
    <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
      {recipe.ingredients?.map((item, index) => (
        <li key={index} className="capitalize">
          {item}
        </li>
      ))}
    </ul>
  </div>

  {/* INSTRUCTIONS */}
  <div className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
    <h2 className="text-2xl font-semibold mb-4 text-center text-orange-600">
      Instructions
    </h2>
    <ol className="space-y-4 list-decimal list-inside text-gray-700 text-base">
      {recipe.instructions?.map((item, index) => (
        <li key={index}>
          <p className="font-semibold text-lg capitalize">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
        </li>
      ))}
    </ol>
  </div>
</div>

        </div>
      ) : (
        // Empty State
        <div className="bg-white rounded-lg p-10 mt-10 flex flex-col items-center text-center justify-center shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            No recipes found
          </h3>
          <p className="text-gray-500 mb-4">
            Get started by adding your first recipe
          </p>
          <button
            onClick={() => navigate("/add")}
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Add Your First Recipe
          </button>
        </div>
      )}
    </div>
  );
}

export default SingleRecipe;
