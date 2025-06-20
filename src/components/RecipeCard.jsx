import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const {
    id,
    Title,
    Description,
    category,
    Difficulty,
    cooktime,
    preptime,
    totaltime,
    img,
  } = recipe;

  return (
    <>
    
    <Link to={`/recipes/details/${id}`}>

    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all w-full max-w-sm">
      
      {/* Top image section */}
      {img && (
        <div className="relative h-56 w-full">
          <img
            src={img}
            alt={Title}
            className="object-cover h-full w-full"
          />
          {category && (
            <div className="absolute top-2 right-2 bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {category}
            </div>
          )}
        </div>
      )}

      {/* Card content */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-1">{Title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">{Description}</p>

        {/* Tags */}
        <div className="flex gap-2 text-xs text-gray-500 mb-3">
          {Difficulty && <span className="bg-gray-100 px-2 py-1 rounded-full">⚙️ {Difficulty}</span>}
        </div>

        {/* Timing info */}
        <div className="text-gray-500 text-sm flex gap-4 mb-4">
          {preptime && <span>Prep: {preptime}</span>}
          {cooktime && <span>Cook: {cooktime}</span>}
          {totaltime && <span>Total: {totaltime}</span>}
        </div>

        {/* View Recipe button */}
        <button className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90">
          View Recipe
        </button>
      </div>
    </div>
    </Link>
    </>
  );
};

export default RecipeCard;
