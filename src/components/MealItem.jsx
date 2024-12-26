// function MealCard({ meal }) {
//   return (
//     <div className="meal-item">
//       <img src={`http://localhost:3000/${meal.image}`} alt="" />
//       <h3>{meal.name}</h3>
//       <h4>${meal.price}</h4>
//       <p>{meal.description}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// }

// export default MealCard;
export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
}
