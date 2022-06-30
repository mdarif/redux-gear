import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'GET_TOTALS'
    })
  })

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => dispatch({ type: 'CLEAR_CART' })}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

/**
 * connect()
 * The connect() function connects a React component to a Redux store.
 *
 * Params:
 * mapStateToProps?: Function
 * mapDispatchToProps?: Function | Object
 * mergeProps?: Function
 * options?: Object
 *
 * If a mapStateToProps function is specified, the new wrapper component will
 * subscribe to Redux store updates. This means that any time the store is updated,
 * mapStateToProps will be called.
 */

function mapStateToProps (store) {
  const { cart, total } = store // destructure the cart and total from main store object
  return { cart, total } // pass the values to the current component
}
export default connect(mapStateToProps)(CartContainer)
