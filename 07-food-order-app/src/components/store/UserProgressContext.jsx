import { createContext, useState } from 'react';

export const UserProgressContext = createContext({
  progress: '',
  onShowCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
});

export default function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState('');

  function onShowCart() {
    setUserProgress('cart');
  }

  function showCheckout() {
    setUserProgress('checkout');
  }

  function hideModal() {
    setUserProgress('');
  }

  const userProgressContext = {
    progress: userProgress,
    onShowCart,
    showCheckout,
    hideModal,
  };

  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
}
