import React from 'react'
import PropTypes from 'prop-types'

const Parallax = (props) => (
  <div className="parallax">
    <div className="parallax-top-left" tabindex="1"></div>
    <div className="parallax-top-right" tabindex="2"></div>
    <div className="parallax-bottom-left" tabindex="3"></div>
    <div className="parallax-bottom-right" tabindex="4"></div>
    <div className="parallax-content">
      {props.children}
    </div>
  </div>
)

Parallax.propTypes = {
  children: PropTypes.node,
}

Parallax.Front = (props) => (
  <div className="parallax-front">
    {props.children}
  </div>
)

Parallax.Front.propTypes = {
  children: PropTypes.node,
}

Parallax.Back = (props) => (
  <div className="parallax-back">
    {props.children}
  </div>
)

Parallax.Back.propTypes = {
  children: PropTypes.node,
}


export default Parallax
