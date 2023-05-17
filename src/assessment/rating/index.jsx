import React, { useState } from 'react';
import "./style.css"

function Rating() {
  const starArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  const [activeState, setActiveState] = useState([false, false, false, false, false])
  const [clickedOnce, setClickedOnce] = useState(false)

  const handleHover = (id) => {
    console.log(id, 'zzz id')
    let arr = [...activeState];
    for (let i = 0; i < 5; i++) {
      arr[i] = i < id ? true : false;
      // arr[4-i] = false;
    }
    setActiveState(arr)
    console.log(activeState[id - 1], 'zzz st')
  }
  const handleRemove = (id) => {
    let arr = [...activeState]
    for (let i = 0; i < id; i++) {
      arr[i] = false;
    }
    setActiveState(arr)
  }

  const handleClick = (id) => {
    const arr = [...activeState]
    for (let i = 0; i < id; i++) {
      arr[i] = i < id ? true : false
    }
    setActiveState(arr)
    setClickedOnce(true)
  }

  return (
    <div className='star-container' >
      {
        starArray.map((star) => (
          <div onClick={() => handleClick(star.id)} onMouseLeave={() => clickedOnce ? null : handleRemove(star.id)} onMouseOver={() => handleHover(star.id)} id={star.id} className={`star ${activeState[star.id - 1] === true ? "active" : ""}`} />
        ))
      }
    </div>
  )
}

export default Rating