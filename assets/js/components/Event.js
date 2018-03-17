import PropTypes from 'prop-types'

const Event = ({title}) => <div>{title}</div>

Event.propTypes = {
  title: PropTypes.string.isRequired
}

export default Event
