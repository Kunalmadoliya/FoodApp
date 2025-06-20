import MainMenu from "./MainMenu";
import Right from "./Right";

function MainComp() {
  return (
    <div className="flex h-screen ">
      {/* Sidebar - Fixed */}
      <div className="w-[300px]  bg-white shadow-md h-full fixed top-0 left-0 z-10">
        <MainMenu />
      </div>

      {/* Main Content - Scrollable */}
      <div className="ml-[300px]  flex-1 overflow-y-auto">
        <Right />
      </div>
    </div>
  );
}

export default MainComp;
