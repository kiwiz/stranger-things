import React from 'react'
import PropTypes from 'prop-types'
import Event from './Event'

const EventList = ({events}) => {
  return (
    <div>
      {events.map(event =>
        <Event title={event.title} />
      )}
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
}

export default EventList
