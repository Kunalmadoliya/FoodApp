import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {foodcontext} from "../context/FoodContext";
import {nanoid} from "nanoid";

function Addrecipe() {
  const {data, setData} = useContext(foodcontext);
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  const onSubmit = (recipeData) => {
    recipeData.id = nanoid();
    setData([...data, recipeData]);
    console.log(recipeData);
    reset();
  };

  return (
    <div className="border w-full">
      <h1>Basic Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label>Recipe Title *</label>
          <input
            {...register("Title", {required: "Title is Required"})}
            placeholder="Enter recipe title..."
          />
          {errors.Title && <p>{errors.Title.message}</p>}
        </div>

        <label>Description *</label>
        <input
          {...register("Description", {required: "Description is Required"})}
          placeholder="Enter recipe description..."
        />
        {errors.Description && <p>{errors.Description.message}</p>}

        <label>Cateogry *</label>
        <select {...register("category", {required: "Category is required"})}>
          <option value="">Select category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        {errors.category && <p>{errors.category.message}</p>}

        <label>Difficulty *</label>
        <select {...register("Difficulty")}>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Addrecipe;
