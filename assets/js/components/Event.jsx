import React from 'react'
import PropTypes from 'prop-types'
import Card from './spectre/Card'

const Event = ({title, subtitle, description, thumbnail}) => <Card>
  <Card.Image>
    <img className="img-responsive" src={thumbnail} />
  </Card.Image>
  <Card.Header>
    <h5>{title}</h5>
    <p>{subtitle}</p>
  </Card.Header>
  <Card.Body>
    {description}
  </Card.Body>
</Card>

Event.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Event
