const RecipeCard = ({ recipe }) => {
  const {Title } = recipe
  console.log(Title,'recepieCard');
  
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{Title}</h2>
   
      </div>
    
  );
};

export default RecipeCard;
