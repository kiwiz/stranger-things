import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer'

const initialState = {
  events: [
    {title: 'Helena'},
    {title: 'Kai'}
  ]
}

const store = createStore(rootReducer, initialState)

render(
    App(store),
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./index.js', render)
}
