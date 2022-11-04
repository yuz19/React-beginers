import React from 'react'

function FunctionClick() {
    /*event handling */
    function clickHandler(){
        console.log("Button clicked")
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
