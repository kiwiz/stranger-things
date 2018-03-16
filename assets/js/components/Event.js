import React from 'react'

const Event = ({title}) => <div>{title}</div>

Event.propTypes = {
  title: PropTypes.string.isRequired
}

export default Event
