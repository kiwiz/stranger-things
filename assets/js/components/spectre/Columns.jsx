import React from 'react'
import PropTypes from 'prop-types'

const Columns = (props) => (
  <div className="columns">
    {props.children}
  </div>
)

Columns.propTypes = {
  children: PropTypes.node,
}

export default Columns
