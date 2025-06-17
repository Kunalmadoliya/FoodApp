import React, { useContext } from 'react'
import { foodcontext } from '../context/FoodContext'

function SearchComp() {
    const {data , setData} = useContext(foodcontext)
  return (
    <>
      <input
      className='border'
      type='text'
      placeholder='Search recipes...'/>
    </>
  )
}

export default SearchComp
