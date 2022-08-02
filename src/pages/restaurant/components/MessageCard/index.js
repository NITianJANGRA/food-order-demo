import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TextButton from '../buttons/TextButton'
import { DEFAULT_PROP } from '../../constants/globalConstants'

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

MessageCard.defaultProps = {
  heading : DEFAULT_PROP.string,
  link : DEFAULT_PROP.string,
  buttonText : DEFAULT_PROP.string
}

MessageCard.propTypes = {
  heading : PropTypes.string,
  link : PropTypes.string,
  buttonText : PropTypes.string
}

export default MessageCard
