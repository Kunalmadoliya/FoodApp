import { useContext } from "react";
import { foodcontext } from "../context/FoodContext";
import RecipeCard from "../components/RecipeCard";
import SearchComp from "../components/SearchComp";

function Allrecipes() {
  const { data } = useContext(foodcontext);

  return (
    <div className="w-full min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col gap-2 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
          
          All Recipes
        </h1>
        <p className="text-gray-500">Browse and manage your recipe collection</p>
      </div>

      {/* Search and Filters */}
      

      {/* Recipe Cards */}
      <div className="max-w-7xl mx-auto">
        {data && data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-center">
             <SearchComp />
          </div>
        )}
      </div>
    </div>
  );
}

export default Allrecipes;
