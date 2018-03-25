import React from 'react'
import PropTypes from 'prop-types'
import Card from './spectre/Card'

const Event = ({event}) => (
  <Card>
    <Card.Image src={event.thumbnail} />
    <Card.Header>
      <h5>{event.title}</h5>
      <p>{event.subtitle}</p>
    </Card.Header>
    <Card.Body>
      {event.description}
    </Card.Body>
  </Card>
)

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
}

export default Event
