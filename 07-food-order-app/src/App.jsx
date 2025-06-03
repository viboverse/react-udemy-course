import { useContext } from 'react';
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import { UserProgressContext } from './components/store/UserProgressContext';
import Chekout from './components/Checkout';
import { CartContext } from './components/store/CartContext';

function App() {
  const { progress } = useContext(UserProgressContext);
  const { items } = useContext(CartContext);

  console.log(items);

  return (
    <>
      <Header />
      <Meals />
      {progress === 'cart' && <Cart />}
      {progress === 'checkout' && <Chekout />}
    </>
  );
}

export default App;
