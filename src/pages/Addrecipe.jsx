import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {foodcontext} from "../context/FoodContext";
import {nanoid} from "nanoid";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function Addrecipe() {
  const navigate = useNavigate();
  const {data, setData} = useContext(foodcontext);
  const [instructions, setInstruction] = useState([
    {title: "", description: ""},
  ]);
  const [imgUrl, setimgUrl] = useState("");
  const [ingredients, setIngredients] = useState([""]);

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const onSubmit = (recipeData) => {
    if (ingredients.length < 1 || ingredients[0].trim === "") {
      toast.error("Atleast add one ingredient");
      return;
    }

    recipeData.id = nanoid();
    recipeData.instructions = instructions;
    recipeData.ingredients = ingredients;
    setData([...data, recipeData]);
    console.log(recipeData);
    

    reset();
    setIngredients([]);
    toast.success("New Recipe Added");
  };
useEffect(()=>{
  console.log(data, "newData");
},[data])
  const back = () => {
    navigate("/");
  };

  const handleInput = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleInstrctions = () => {
    setInstruction([...instructions, {title: "", description: ""}]);
  };
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
        {/* Top Navigation */}
        <div className="w-4/5 flex items-center justify-between ">
          <button
            onClick={back}
            className="text-sm font-semibold text-gray-600 hover:bg-gray-100 h-10 rounded-md px-3 flex items-center gap-1"
          >
            <i className="ri-arrow-left-line"></i> Back to Dashboard
          </button>
          <button
            type="submit"
            form="recipeForm"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 flex items-center gap-2"
          >
            <i className="ri-save-line text-lg"></i>
            Save Recipe
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center  mb-4">
          <h1 className="w-4/5 text-3xl font-bold mb-1">Create Recipe</h1>
          <p>
            Fill in the details below to add your delicious recipe to the
            collection
          </p>
        </div>

        {/* Form Card */}
        <div className="w-4/5 bg-white border rounded-lg p-6 shadow">
          <h1 className="text-2xl font-semibold mb-3 flex gap-1 items-center pb-2">
            <i className="ri-information-line text-orange-500"></i>
            Basic Information
          </h1>

          {/* Form */}
          <form
            id="recipeForm"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="flex gap-8">
              {/* Left Column */}
              <div className="flex-1 space-y-6">
                {/* Title */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    Recipe Title *
                  </label>
                  <input
                    className="border h-10 px-3 rounded-md"
                    {...register("Title", {required: "Title is Required"})}
                    placeholder="Enter recipe title..."
                  />
                  {errors.Title && (
                    <p className="text-sm text-red-500">
                      {errors.Title.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">
                    Description *
                  </label>
                  <input
                    className="border h-10 px-3 rounded-md"
                    {...register("Description", {
                      required: "Description is Required",
                    })}
                    placeholder="Enter recipe description..."
                  />
                  {errors.Description && (
                    <p className="text-sm text-red-500">
                      {errors.Description.message}
                    </p>
                  )}
                </div>

                {/* Category and Difficulty */}
                <div className="flex gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-sm font-medium">
                      Category *
                    </label>
                    <select
                      className="border h-10 px-2 rounded-md"
                      {...register("category", {
                        required: "Category is required",
                      })}
                    >
                      <option value="">Select category</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                      <option value="snack">Snack</option>
                    </select>
                    {errors.category && (
                      <p className="text-sm text-red-500">
                        {errors.category.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="mb-1 text-sm font-medium">
                      Difficulty
                    </label>
                    <select
                      className="border h-10 px-2 rounded-md"
                      {...register("Difficulty")}
                    >
                      <option value="">Select difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>

                {/* Times */}
                <div className="flex gap-4">
                  <div className="flex flex-col w-32">
                    <label className="mb-1 text-sm font-medium">
                      Cook Time
                    </label>
                    <input
                      {...register("cooktime")}
                      className="border h-10 px-2 rounded-md"
                      type="text"
                      placeholder="e.g., 30 min"
                    />
                  </div>
                  <div className="flex flex-col w-32">
                    <label className="mb-1 text-sm font-medium">
                      Prep Time
                    </label>
                    <input
                      {...register("preptime")}
                      className="border h-10 px-2 rounded-md"
                      type="text"
                      placeholder="e.g., 20 min"
                    />
                  </div>
                  <div className="flex flex-col w-32">
                    <label className="mb-1 text-sm font-medium">
                      Total Time
                    </label>
                    <input
                      {...register("totaltime")}
                      className="border h-10 px-2 rounded-md"
                      type="text"
                      placeholder="e.g., 50 min"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Image URL */}
              <div className="w-1/2 space-y-1">
                <h1 className="mb-1 text-sm font-medium flex items-center gap-2">
                  <i className="ri-image-line"></i>
                  Recipe Image URL
                </h1>
                <input
                  {...register("img")}
                  onChange={(e) => setimgUrl(e.target.value)}
                  className="border h-10 px-2 rounded-md w-full"
                  placeholder="Enter Image URL..."
                />
                <small className="text-gray-400">
                  💡 Tip: Right-click on any food image online and select "Copy
                  image address"
                </small>
                <div className="border border-dashed h-64 mt-5 rounded-md overflow-hidden flex items-center justify-center bg-gray-50">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt="Recipe"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">Image Preview</span>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className=" w-4/5 mt-5 bg-white border rounded-lg p-6 shadow ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold mb-3 flex gap-1 items-center pb-2">
              🥕 Ingredients
            </h1>
            <button
              onClick={handleInput}
              className="flex gap-2 hover:bg-gray-300 px-3 py-2 border rounded-md border-gray-300"
            >
              <i className="ri-add-large-line"></i>Add Ingredients
            </button>
          </div>
          <p className="text-gray-400">
            💡 Be specific with amounts (e.g., "2 cups", "1 tbsp", "500g")
          </p>
          <div className="mt-5">
            {ingredients.map((items, index) => (
              <div key={index} className="flex h-10 items-center gap-5 mt-3 rounded-md px-5 py-8  bg-gray-50">
                <p className="text-orange-500 h-10 w-10 justify-center bg-orange-200 flex items-center text-center rounded-full">
                  {index + 1}
                </p>
                <input
                  placeholder="Ingredient name (e.g., All-purpose flour)"
                  className="border px-3 border-gray-300 w-full h-10 rounded-md "
                  key={index}
                  onChange={(e) => {
                    const updated = [...ingredients];
                    updated[index] = e.target.value;
                    setIngredients(updated);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className=" w-4/5 mt-5 bg-white border rounded-lg p-6 shadow ">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold mb-3 flex gap-1 items-center pb-2">
              📝 Instructions
            </h1>
            <button
              onClick={handleInstrctions}
              className="flex gap-2 hover:bg-gray-300 px-3 py-2 border rounded-md border-gray-300"
            >
              <i className="ri-add-large-line"></i>Add steps
            </button>
          </div>
          <p className="text-gray-400">
            💡 Write clear, step-by-step instructions. Include cooking times and
            temperatures where needed.
          </p>
          <div className="mt-5">
            {instructions.map((items, index) => (
              <div
                key={index}
                className="flex h-50 items-center gap-5 mt-3 rounded-md px-5 py-8  bg-gray-50"
              >
                <p className="text-orange-500 h-10 w-10 justify-center bg-orange-200 flex items-center text-center rounded-full">
                  {index + 1}
                </p>
                <div className="w-full">
                  <input
                    placeholder="Step 1 title (e.g., Preheat oven)"
                    className="border px-3 border-gray-300 w-full h-10 rounded-md "
                    key={index}
                    onChange={(e) => {
                      const updated = [...instructions];
                      updated[index].title = e.target.value;
                      setInstruction(updated);
                    }}
                  />
                  <input
                    placeholder="Detailed instructions for step 1... Be specific about timing, temperature, and technique."
                    className="border mt-3 px-3 border-gray-300 w-full h-30 rounded-md  "
              
                    onChange={(e) => {
                      const updated = [...instructions];
                      updated[index].description = e.target.value;
                      setInstruction(updated);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Addrecipe;
