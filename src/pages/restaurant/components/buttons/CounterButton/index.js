import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import PropTypes from "prop-types";

import TextButton from '../TextButton';
import { DEFAULT_NUMBER, EMPTY_FUNCTION } from '../../../constants/globalConstants';

import "./style.css"

const CounterButton = (props) => {
  const {value , handleIncrement, handleDecrement} = props
  return (
    <div className="counter-container">
        <TextButton classes={["counter-btn"]} text={<AiFillCaretDown />} onClick={handleDecrement} />
        <h5 className="counter-value"> {value} </h5>
        <TextButton classes={["counter-btn"]} text={<AiFillCaretUp />} onClick={handleIncrement} />
    </div>
  )
}

CounterButton.defaultProps = {
  value : DEFAULT_NUMBER, 
  handleIncrement : EMPTY_FUNCTION, 
  handleDecrement : EMPTY_FUNCTION
}

CounterButton.propTypes = {
  value : PropTypes.number, 
  handleIncrement : PropTypes.func, 
  handleDecrement : PropTypes.func
}

export default CounterButton