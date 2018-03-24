import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer'
import articles from './articles'

const initialState = {
    events: articles.events
}

const store = createStore(rootReducer, initialState)

render(
    App(store),
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./index.js', render)
}
