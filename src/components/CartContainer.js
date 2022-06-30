import React from 'react'
import CartItem from './CartItem'
import { connect } from 'react-redux'

const CartContainer = ({ cart = [], total, dispatch }) => {
  // console.log('cart', cart)
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

function mapStateToProps (store) {
  const { cart, total } = store // destructure the cart and total from main store object
  return { cart, total } // pass the values to the current component
}
export default connect(mapStateToProps)(CartContainer)
