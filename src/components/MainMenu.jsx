import { NavLink } from "react-router-dom";

function MainMenu() {
  return (
    <div className="flex flex-col justify-between h-screen   px-4 py-6">
      {/* Top Logo + Menu */}
      <div className="">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 px-2  mb-20">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-2 rounded-xl">
            <i className="ri-restaurant-line text-white text-xl"></i>
          </div>
          <div>
            <h1 className="font-bold text-lg">RecipeRite</h1>
            <p className="text-sm text-gray-500">Smart Recipe Manager</p>
          </div>
        </div>

        {/* Menu Title */}
        <h2 className="text-xs text-gray-500 mb-3 font-semibold  px-2">MAIN MENU</h2>

        {/* Menu Links */}
        <nav className="flex flex-col gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded-md text-sm ${
                isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <i className="ri-home-line text-lg"></i> Dashboard
          </NavLink>

          <NavLink
            to="/allRecipy"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded-md text-sm ${
                isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <i className="ri-book-open-line text-lg"></i> All Recipes
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded-md text-sm ${
                isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <i className="ri-add-line text-lg"></i> Add Recipe
          </NavLink>

          <NavLink
            to="/planner"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded-md text-sm ${
                isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <i className="ri-calendar-line text-lg"></i> Meal Planner
          </NavLink>

          <NavLink
            to="/quick"
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-2 rounded-md text-sm ${
                isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <i className="ri-time-line text-lg"></i> Quick Cook
          </NavLink>
        </nav>
      </div>

      {/* Bottom Settings */}
      <div className="px-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-2 rounded-md text-sm ${
              isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <i className="ri-settings-3-line text-lg"></i> Settings
        </NavLink>
      </div>
    </div>
  );
}

export default MainMenu;
