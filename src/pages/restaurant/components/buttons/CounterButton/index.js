import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import TextButton from '../TextButton';
import PropTypes from "prop-types";
import "./style.css"

const CounterButton = (props) => {
  const {value , handleIncrement, handleDecrement} = props
  return (
    <div className="counter-container">
        <TextButton classes={["counter-btn"]} text={<AiFillCaretDown />} onButtonClick={handleDecrement} />
        <h5 className="counter-value"> {value} </h5>
        <TextButton classes={["counter-btn"]} text={<AiFillCaretUp />} onButtonClick={handleIncrement} />
    </div>
  )
}

CounterButton.propTypes = {
  value : PropTypes.number, 
  handleIncrement : PropTypes.func, 
  handleDecrement : PropTypes.func
}

export default CounterButton