import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import PropTypes from "prop-types";

import TextButton from '../TextButton';
import { DEFAULT_PROP } from '../../../constants/globalConstants';

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

CounterButton.defaultProps = {
  value : DEFAULT_PROP.int, 
  handleIncrement : DEFAULT_PROP.func, 
  handleDecrement : DEFAULT_PROP.func
}

CounterButton.propTypes = {
  value : PropTypes.number, 
  handleIncrement : PropTypes.func, 
  handleDecrement : PropTypes.func
}

export default CounterButton