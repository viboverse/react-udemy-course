export default function CartItem({ name, price, itemQuantity, onIncrease, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name}- {itemQuantity} x ${price}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{itemQuantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
