import { useContext } from "react";
import { foodcontext } from "../context/FoodContext";
import RecipeCard from "../components/RecipeCard";

function Allrecipes() {
  const { data } = useContext(foodcontext);
  console.log(data , "data");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Recipes</h1>

      {data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No recipes available.</p>
      )}
    </div>

    
    
  );

  
  
}

export default Allrecipes;
