import React, { useState } from 'react'

const SortProduct = (filter) => {
  const [currentValue, setCurrentValue] = useState('LowToHigh')
  
  const changeSelection = (newSelection) => {
    setCurrentValue(newSelection)
  }
  // alert(currentValue)
  return (
    <form>
      <select className='sortProduct'
        onChange={(event) => changeSelection(event.target.value)}
         value={currentValue}
      >
         <option value="LowtoHigh">Price Low to High</option>
        <option value="HighToLow">Price High to Low</option>
      </select>
    </form>
  )
}

export default SortProduct;