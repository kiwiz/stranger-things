import React from 'react'
import PropTypes from 'prop-types'
import Columns from './spectre/Columns'
import Column from './spectre/Column'
import Event from './Event'

const EventList = ({events}) => {
  return (
    <Columns>
      {events.map(event => <Column classNames={[
        'col-xs-12',
        'col-sm-6',
        'col-md-4',
        'col-3',
      ]}>
        <Event event={event} />
      </Column>)}
    </Columns>
  )
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
}

export default EventList
