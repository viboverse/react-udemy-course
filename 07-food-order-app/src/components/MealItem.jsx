import Button from './UI/Button';

export default function MealItem({ image, name, price, description, onAddToCart }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`../../backend/public/${image}`} alt="" />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">${price}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={onAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
