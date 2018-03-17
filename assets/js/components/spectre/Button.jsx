import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { ButtonTypes, ButtonSizes } from './Util'

const Button = (props) => (
    <button className={classNames('btn', {
        [`btn-${props.type}`]: props.type !== undefined,
        [`btn-${props.size}`]: props.size !== undefined,
        'btn-block': props.block,
        'btn-rounded': props.rounded,
        'btn-action': props.action,
        'loading': props.loading,
    })}>
        {props.children}
    </button>
)

Button.propTypes = {
    type: PropTypes.oneOf(ButtonTypes),
    size: PropTypes.oneOf(ButtonSizes),
    block: PropTypes.bool,
    loading: PropTypes.bool,
    action: PropTypes.bool,
}

export default Button
