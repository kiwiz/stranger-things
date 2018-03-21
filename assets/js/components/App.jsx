import React from 'react'
import { Provider } from 'react-redux'
import VisibleEventList from '../containers/VisibleEventList'

const App = (store) => (
  <Provider store={store}>
      <VisibleEventList />
  </Provider>
)

export default App
