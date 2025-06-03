import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { UserProgressContext } from './store/UserProgressContext';
import { CartContext } from './store/CartContext';

export default function Header() {
  const { onShowCart } = useContext(UserProgressContext);
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((tot, item) => tot + item.quantity, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button onClick={onShowCart}>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
