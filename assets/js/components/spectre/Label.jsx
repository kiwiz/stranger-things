import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import LabelStyles from './Util'

const Label = (props) => {
    const Tag = props.small ? 'small':'span';

    return (
        <Tag className={classNames('label', {
            [`label-${props.sStyle}`]: props.sStyle !== undefined,
            'label-rounded': props.rounded
        })}>
            {props.children}
        </Tag>
    )
}

Label.propTypes = {
    sStyle: PropTypes.oneOf(sStyles).isRequired,
    small: PropTypes.bool,
    rounded: PropTypes.bool,
}

export default Label
