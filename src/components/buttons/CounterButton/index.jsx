import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import TextButton from '../TextButton';

import "./style.css"

const CounterButton = (props) => {
  const {value = 0, handleIncrement, handleDecrement} = props
  return (
    <div className="counter-container">
        <TextButton classes={["counter-btn"]} text={<AiFillCaretDown />} onButtonClick={handleDecrement} />
        {/* <hr className="vertical-partition"/> */}
        <h5 className="counter-value"> {value} </h5>
        {/* <hr className="vertical-partition"/> */}
        <TextButton classes={["counter-btn"]} text={<AiFillCaretUp />} onButtonClick={handleIncrement} />
    </div>
  )
}

export default CounterButton