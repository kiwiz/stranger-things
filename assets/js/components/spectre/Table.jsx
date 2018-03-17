import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Table = (props) => (
    <table className={classNames('table', {
        'table-striped': props.striped,
        'table-hover': props.hover,
        'table-scroll': props.scroll,
    })}>
        {props.children}
    </table>
)

Table.propTypes = {
    striped: PropTypes.bool,
    hover: PropTypes.bool,
    scroll: PropTypes.bool,
}

export default Table
