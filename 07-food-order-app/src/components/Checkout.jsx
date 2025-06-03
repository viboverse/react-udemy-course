import Input from './UI/Input';
import Modal from './UI/Modal';
import { useActionState, useContext } from 'react';
import { UserProgressContext } from './store/UserProgressContext';
import Button from './UI/Button';
import { CartContext } from './store/CartContext';

export default function Chekout() {
  const userProgressCtx = useContext(UserProgressContext);
  const { totalPrice, items } = useContext(CartContext);

  async function checkoutAction(prevState, formData) {
    const customerData = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      body: JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resData = await res.json();

    if (!res.ok) {
      throw new Error('Failed to Order!');
    }

    return resData;

    // return customerData;
  }

  const [formState, formAction] = useActionState(checkoutAction, null);

  if (formState) {
    return (
      <Modal open={userProgressCtx.progress === 'checkout'} onClose={userProgressCtx.hideModal}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will get back to you with more details via email within the next few minutes.</p>
        <p className="modal-actions">
          <Button onClick={userProgressCtx.hideModal}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={userProgressCtx.hideModal}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: ${totalPrice}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button textOnly={false} onClick={userProgressCtx.hideModal}>
            Close
          </Button>
          <Button type="submit">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
