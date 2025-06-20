import React, {useContext, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {foodcontext} from "../context/FoodContext";
import { toast } from "react-toastify";

function SingleRecipe() {
  const navigate = useNavigate();
  const {data} = useContext(foodcontext);
  const params = useParams();

  const recipe = data.find((recipe) => params.id == recipe.id);

  console.log(data, params.id);

  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
        {/* Top Navigation */}
        <div className="w-4/5 flex items-center justify-between ">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-semibold text-gray-600 hover:bg-gray-100 h-10 rounded-md px-3 flex items-center gap-1"
          >
            <i className="ri-arrow-left-line"></i> Back to Dashboard
          </button>
          <div className="flex gap-3">
            <button
              className="bg-white text-[#EA712E] border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100"
              onClick={() => setActive(!active)}
            >
              {active
                ? (<i class="ri-heart-line"></i>)
                : (<i class="ri-heart-fill"></i>)}
            </button>

            <button
            onClick={() => toast.success("recipe deleted")}
             className="bg-white text-[#EA712E] border border-gray-300 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>

        {recipe ? (
          <div className="w-3/4 max-w-6xl rounded-xl overflow-hidden shadow-md">
            <div className="relative mt-5">
              <img
                src={recipe.img}
                alt={recipe.Title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-40 p-6 flex flex-col justify-end text-white">
                <h1 className="text-3xl font-bold">{recipe.Title}</h1>
                <p className="text-sm">{recipe.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg h-full w-full  p-10 flex flex-col items-center text-center justify-center shadow-sm mt-4">
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
    </>
  );
}

export default SingleRecipe;
