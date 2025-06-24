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
    <Link to={`/recipes/details/${id}`} className="w-full max-w-sm">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col h-full">
        {/* Top Image */}
        {img && (
          <div className="relative h-48 w-full">
            <img
              src={img}
              alt={Title}
              className="object-cover w-full h-full rounded-t-2xl"
            />
            {category && (
              <span className="absolute capitalize top-2 right-2 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {category}
              </span>
            )}
          </div>
        )}

        {/* Card Content */}
        <div className="flex flex-col justify-between flex-1 p-4">
          <div>
            {/* Title */}
            <h2 className="text-lg font-semibold mb-1 text-gray-800">{Title}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-3  h-15 line-clamp-2">
              {Description}
            </p>

            {/* Difficulty Tag */}
            {Difficulty && (
              <div className="text-xs capitalize text-gray-500 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  ⚙️ {Difficulty}
                </span>
              </div>
            )}

            {/* Timing Info */}
            <div className="text-gray-500 text-sm flex flex-wrap gap-3">
              {preptime && <span>Prep: {preptime}</span>}
              {cooktime && <span>Cook: {cooktime}</span>}
              {totaltime && <span>Total: {totaltime}</span>}
            </div>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
