/**
 * Actions
 * Actions are plain objects describing what happened in the app,
 * and serve as the sole way to describe an intention to mutate the data.
 * It's important that actions being objects you have to dispatch is not boilerplate,
 * but one of the fundamental design choices of Redux.
 */

/**
 * Action Creators
 * It is another common convention that, instead of creating action
 * objects inline in the places where you dispatch the actions,
 * you would create functions generating them.
 */

export const removeItem = id => {
  return { type: 'REMOVE', payload: { id } }
}

export const increaseItem = id => {
  return { type: 'INCREASE', payload: { id } }
}

export const decreaseItem = (id, amount) => {
  return { type: 'DECREASE', payload: { id, amount } }
}

export const toggleItem = (id, toggle) => {
  return { type: 'TOGGLE_AMOUNT', payload: { id, toggle } }
}

/**
 * Action creators let you decouple additional logic around dispatching an action,
 * from the actual components emitting those actions. It's very handy when the application
 * is under heavy development, and the requirements change often.
 */
