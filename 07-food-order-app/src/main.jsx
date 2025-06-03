import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import CartProvider from './components/store/CartContext.jsx';
import UserProgressProvider from './components/store/UserProgressContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProgressProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProgressProvider>
);
