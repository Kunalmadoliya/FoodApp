import {NavLink} from "react-router-dom";

function MainMenu() {
  return (
    <>
      <div className="flex border flex-col gap-1 h-screen w-1/5">
        <h1 className="px-8 py-2">MAIN MENU</h1>
        <NavLink
          to="/"
          className={({isActive}) =>
            `flex items-center gap-2 px-4 py-2 rounded ${
              isActive ? " text-gray-500 font-semibold" : "hover:bg-gray-000"
            }`
          }
        >
          <i className="ri-home-2-line"></i> Dashboard
        </NavLink>

        <NavLink
          to="/add"
          className={({isActive}) =>
            `flex items-center gap-2 px-4 py-2 rounded ${
              isActive ? " text-gray-500 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <i className="ri-add-large-fill"></i> Add Recipe
        </NavLink>

        <NavLink
          to="/allRecipy"
          className={({isActive}) =>
            `flex items-center gap-2 px-4 py-2 rounded ${
              isActive ? "text-gray-500 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <i className="ri-book-open-line"></i> All Recipes
        </NavLink>
        <NavLink
          to="/planner"
          className={({isActive}) =>
            `flex items-center gap-2 px-4 py-2 rounded ${
              isActive ? "text-gray-500 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <i className="ri-calendar-line"></i> Meal Planner
        </NavLink>

        <NavLink
          to="/quick"
          className={({isActive}) =>
            `flex items-center gap-2 px-4 py-2 rounded ${
              isActive ? "text-gray-500 font-semibold" : "hover:bg-gray-100"
            }`
          }
        >
          <i className="ri-time-line"></i> Quick Cook
        </NavLink>
      </div>
    </>
  );
}

export default MainMenu;
