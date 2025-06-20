import React, {createContext, useEffect, useState} from "react";
import { DummyData } from "../components/DummyData";
export const foodcontext = createContext(null);

function FoodContext(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
     const storedData = JSON.parse(localStorage.getItem("recipe")) || [];
    setData([...DummyData, ...storedData]);
  }, []);
  return (
    <>
    
      <foodcontext.Provider value={{data, setData}}>
        {props.children}
      </foodcontext.Provider>
    </>
  );
}

export default FoodContext;
