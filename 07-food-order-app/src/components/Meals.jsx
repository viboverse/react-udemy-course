import { useContext, useEffect } from 'react';
import MealItem from './MealItem';
import { CartContext } from './store/CartContext';
import { useState } from 'react';

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  const { addItem } = useContext(CartContext);

  useEffect(() => {
    async function fetchMeals() {
      const res = await fetch('http://localhost:3000/meals');

      const data = await res.json();

      if (!res.ok) {
        throw new Error('Faild to fetch user places!');
      }

      setLoadedMeals(data);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem
          key={meal.id}
          image={meal.image}
          description={meal.description}
          price={meal.price}
          name={meal.name}
          onAddToCart={() => addItem(meal)}
        />
      ))}
    </ul>
  );
}
