import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { IconTypes, IconSizes } from './Util'

const Icon = (props) => (
  <i className={classNames('icon', `icon-${props.type}`)}></i>
)

Icon.propTypes = {
  type: PropTypes.oneOf(IconTypes).isRequired,
  size: PropTypes.oneOf(IconSizes),
}

export default Icon
