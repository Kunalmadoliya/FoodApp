import React, {createContext, useState} from "react";
export const foodcontext = createContext(null);

function FoodContext(props) {
  const [data, setData] = useState([]);
  return (

    <>
      <foodcontext.Provider value={{data, setData}}>
        {props.children}
      </foodcontext.Provider>
    </>
  );
}

export default FoodContext;
