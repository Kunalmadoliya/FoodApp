import MainMenu from "./MainMenu";
import Right from "./Right";

function MainComp() {
  return (
    <>
      <div className="flex gap-1">
        <MainMenu />
        <Right />
      </div>
    </>
  );
}

export default MainComp;
