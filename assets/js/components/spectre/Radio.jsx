import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { InputSizes } from './Util'

const Radio = (props) => (
  <label className={classNames('form-radio', {
    [`input-${props.size}`]: props.size !== undefined,
  })}>
    <input type="checkbox" name={props.name} checked={props.checked} />
    {props.children}
  </label>
)

Radio.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(InputSizes),
  children: PropTypes.node,
}

export default Radio
