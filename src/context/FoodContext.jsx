// FoodContext.jsx
import { createContext, useEffect, useState } from "react";
import {DummyData} from "../components/DummyData"


export const foodcontext = createContext();

const FoodContext = ({ children }) => {
  const [data, setData] = useState([]);

  // Load from localStorage ONCE on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("recipe"));

    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
      setData(storedData);
    } else {
      setData(DummyData); // fallback
      localStorage.setItem("recipe", JSON.stringify(DummyData));
    }
  }, []);

  // Save to localStorage every time data changes
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("recipe", JSON.stringify(data));
    }
  }, [data]);

  return (
    <foodcontext.Provider value={{ data, setData }}>
      {children}
    </foodcontext.Provider>
  );
};

export default FoodContext;
