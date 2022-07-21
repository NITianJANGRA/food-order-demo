import React from 'react'
import TextButton from '../TextButton';
import "./style.css"

const FullWidthButton = (props) => {
    const { text=null, classes=[], onButtonClick = null} = props
  return (
    
    <TextButton classes={["full-width-btn", ...classes]} text={text} onButtonClick={onButtonClick} />
    
  )
}

export default FullWidthButton