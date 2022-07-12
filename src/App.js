import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

// redux stuff
import { createStore } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'

/**
 * createStore(reducer, [preloadedState], [enhancer])
 * Creates a Redux store that holds the complete state tree of your app.
 * There should only be a single store in your app.
 *
 * Returns:
 * (Store): An object that holds the complete state of your app.
 * The only way to change its 'state' is by dispatching actions.
 * You may also subscribe to the changes to its state to update the UI.
 *
 * reducer (Function): A reducing function that returns the next state tree,
 * given the current state tree and an action to handle.
 */

// Create a new Redux store with the `createStore` function,
// and use the `reducer` for the update logic
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/**
 * dispatch(action)
 * Dispatches an action. This is the only way to trigger a state change.
 */
// store.dispatch({ type: 'INCREASE' })

// console.log(store.getState())

function App () {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App
