import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

render(
    App(store),
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept(render)
}
