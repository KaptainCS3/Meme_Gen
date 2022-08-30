import React, {useState} from 'react'

const Test = () => {
    const [itemsArr, setItemsArr] = useState(['Thing 0 '])
    function addItems(){
        setItemsArr(prevArr =>{
            return [...prevArr, ` Thing  ${prevArr.length}`]
        })
    }
  return (
    <div>
        <button className='add' onClick={addItems}>
            addItems
        </button>
        <h1 key={itemsArr}>{itemsArr}</h1>
    </div>
  )
}

export default Test