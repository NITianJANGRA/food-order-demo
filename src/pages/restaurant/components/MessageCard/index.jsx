import React from 'react'
import { Link } from 'react-router-dom'
import TextButton from '../buttons/TextButton'
import "./style.css"
const MessageCard = (props) => {
  const {heading, link,  buttonText} = props
  return (
    <div>
      <div className="message-card">
        <h3>{heading}</h3>
        <Link to={link}>
          <TextButton classes={["link-to"]} text={buttonText} />
        </Link>
      </div>
    </div>
  )
}

export default MessageCard

// 
// "Add some item in cart"