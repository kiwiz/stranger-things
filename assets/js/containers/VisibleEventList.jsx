import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = state => state

const VisibleEventList = connect(mapStateToProps)(EventList)

export default VisibleEventList
