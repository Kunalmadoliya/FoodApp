import {Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Addrecipe from "../pages/Addrecipe";
import Mealplanner from "../pages/Mealplanner";
import Quickcook from "../pages/Quickcook";
import Allrecipes from "../pages/Allrecipes";
import SingleRecipe from "../components/SingleRecipe";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<Addrecipe />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe/>}/>

        <Route path="/allRecipy" element={<Allrecipes />} />
        <Route path="/planner" element={<Mealplanner />} />
        <Route path="/quick" element={<Quickcook />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
