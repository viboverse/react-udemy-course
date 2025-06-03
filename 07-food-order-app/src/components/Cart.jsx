import { useContext } from 'react';
import Button from './UI/Button';
import Modal from './UI/Modal';
import { UserProgressContext } from './store/UserProgressContext';
import { CartContext } from './store/CartContext';
import CartItem from './CartItem';

function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const isCartEmpty = cartCtx.items.length === 0;

  return (
    <Modal open={userProgressCtx.progress === 'cart'} className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            itemQuantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">${cartCtx.totalPrice}</p>
      <p className="modal-actions">
        <Button type="button" textOnly={true} onClick={userProgressCtx.hideModal}>
          Close
        </Button>
        {!isCartEmpty && <Button onClick={userProgressCtx.showCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
}
export default Cart;
