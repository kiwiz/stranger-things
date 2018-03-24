import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Column = (props) => (
  <div className={classNames(
    'column',
    props.classNames
  )}>
    {props.children}
  </div>
)

Column.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
}

export default Column
