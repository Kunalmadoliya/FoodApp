import {useNavigate} from "react-router-dom";
import SearchComp from "../components/SearchComp";
import {useEffect} from "react";


function Dashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    <SearchComp />;
  }, []);
  return (
    <>
      <div className="w-full min-h-screen space-y-7 bg-gray-50 py-10 px-4 flex flex-col items-center">
        {/* header */}

        <div className="w-full flex justify-between">
          <div>
            <h1 className="w-4/5 text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-400 font-semibold">
              Welcome back! Ready to cook something amazing?
            </p>
          </div>
          <div>
            <button
              type="submit"
              onClick={() => navigate("/add")}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2"
            >
              <i className="ri-save-line text-lg"></i>
              Add Recipe
            </button>
          </div>
        </div>

        {/* toal-recipe */}
        <div className=" w-full">
          <SearchComp />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
