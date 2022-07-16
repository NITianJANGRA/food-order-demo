import React from 'react'
import "./style.css"

// Created a customizable component.
// used directly in SingleItemCard
// used as building block for CounterButton 

const TextButton = (props) => {
    const { text=null, classes=[], type='button', onButtonClick = null} = props
    const externalClass = classes.join(' ')
  return (
    
    <button className={`text-btn ${externalClass}`} type={type} onClick={onButtonClick} > {text}</button>
    
  )
}

export default TextButton