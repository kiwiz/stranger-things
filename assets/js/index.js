import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/Root'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)

render(
    Root(store),
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept(render)
}
