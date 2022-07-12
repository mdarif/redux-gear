import cartItems from './cart-items'

// Define an initial state value for the app
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
export default function reducer (state = initialStore, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (
    action.type //Action objects always have a type field, which is a string you provide that acts as a unique name for the action.
  ) {
    case 'CLEAR_CART': {
      return {
        ...state, // update the state immutably by copying the existing state
        cart: []
      }
    }
    case 'DECREASE': {
      let tempCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem
      })
      return {
        ...state, // update the state immutably by copying the existing state
        cart: tempCart
      }
    }
    case 'INCREASE': {
      let tempCart = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return {
        ...state, // update the state immutably by copying the existing state
        cart: tempCart
      }
    }
    case 'REMOVE': {
      return {
        ...state, // update the state immutably by copying the existing state
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
      }
    }
    case 'GET_TOTALS': {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          cartTotal.amount += amount
          const itemTotal = price * amount
          cartTotal.total += itemTotal
          return cartTotal
        },
        { total: 0, amount: 0 }
      )
      total = Number(total.toFixed(2))
      return {
        ...state, // update the state immutably by copying the existing state
        total,
        amount
      }
    }
    case 'TOGGLE_AMOUNT':
      return {
        ...state, // update the state immutably by copying the existing state
        cart: state.cart.map(cartItem => {
          let add = cartItem.amount + 1
          let subtract = cartItem.amount - 1
          if (cartItem.id === action.payload.id) {
            cartItem = {
              ...cartItem,
              amount: action.payload.toggle === 'inc' ? add : subtract
            }
          }
          return cartItem
        })
      }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
