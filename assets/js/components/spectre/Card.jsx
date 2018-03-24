import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => (
  <div className="card">
    {props.children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node,
}

Card.Image = (props) => (
  <div className="card-image">
    {props.children}
  </div>
)

Card.Image.propTypes = {
  children: PropTypes.node,
}

Card.Header = (props) => (
  <div className="card-header">
    {props.children}
  </div>
)

Card.Header.propTypes = {
  children: PropTypes.node,
}

Card.Body = (props) => (
  <div className="card-body">
    {props.children}
  </div>
)

Card.Body.propTypes = {
  children: PropTypes.node,
}

Card.Footer = (props) => (
  <div className="card-footer">
    {props.children}
  </div>
)

Card.Footer.propTypes = {
  children: PropTypes.node,
}

export default Card
