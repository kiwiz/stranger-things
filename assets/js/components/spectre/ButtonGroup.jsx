import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ButtonGroup = (props) => (
    <div className={classNames('btn-group', {
        'btn-group-block': props.block,
    })}>
        {props.children}
    </div>
)

ButtonGroup.propTypes = {
    block: PropTypes.bool,
}

export default ButtonGroup
