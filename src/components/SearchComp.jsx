import React, { useContext, useState } from "react";
import { foodcontext } from "../context/FoodContext";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom";

function SearchComp() {
  const { data } = useContext(foodcontext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const filterSearch = data.filter((items) =>
    items.Title.toLowerCase().startsWith(input.toLowerCase())
  );

  return (
    <div className="min-h-screen space-y-6 px-4 py-6">
      {/* Search Bar */}
      <div className="bg-white h-20 flex items-center p-4 rounded-lg shadow">
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none text-sm shadow-sm"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Recent Recipes</h2>
        <button className="border px-4 py-1.5 text-sm rounded-md hover:bg-gray-100">
          View All
        </button>
      </div>

      {/* Recipe Grid or Empty State */}
      <div >
        {filterSearch.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterSearch.map((items) => (
              <RecipeCard key={items.id} recipe={items} />
            ))}
          </div>
        ) : (
          <div className="bg-white  rounded-lg p-10 flex flex-col items-center text-center justify-center shadow-sm mt-4">
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
    </div>
  );
}

export default SearchComp;
