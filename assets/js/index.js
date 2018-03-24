import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers/rootReducer'
import articles from './articles'

function getImage(images, key) {
  const image = images.find((image) => key in image)
  if(image === undefined) {
    return null
  }

  return image[key].url
}

function cleanText(text) {
  const doc = new DOMParser().parseFromString(text, 'text/html')
  return doc.body.textContent || ''
}

const events = articles.events.map((event) => ({
  title: event.title,
  subtitle: event.subtitle,
  description: cleanText(event.description),
  thumbnail: getImage(event.images, 'thumbnail'),
  image: getImage(event.images, 'large'),
}))

const initialState = {
  events
}

const store = createStore(rootReducer, initialState)

render(
  App(store),
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./index.js', render)
}
