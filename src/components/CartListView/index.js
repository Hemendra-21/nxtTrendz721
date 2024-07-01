import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value

      const cartItemsTotalValue = () => {
        let totalValue = 0

        cartList.map(eachItem => {
          totalValue += eachItem.price * eachItem.quantity
          return totalValue
        })

        return totalValue
      }

      const onClickRemoveAllCartItems = () => {
        removeAllCartItems()
      }

      return (
        <>
          <button
            type="button"
            className="remove-all-btn"
            onClick={onClickRemoveAllCartItems}
          >
            Remove All
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <div className="cart-summary-container">
            <h1 className="cart-summary-heading">
              Order Total:{' '}
              <span className="cart-amount">Rs {cartItemsTotalValue()}/-</span>
            </h1>
            <p className="cart-summary-desc">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-btn-lg">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-btn-sm">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
