import React from 'react'
import PropTypes from 'prop-types'

const InputGroup = (props) => (
  <div className="input-group">
    {props.children}
  </div>
)

InputGroup.propTypes = {
  children: PropTypes.node,
}

export default InputGroup
