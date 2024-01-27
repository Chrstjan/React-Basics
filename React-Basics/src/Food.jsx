function Food() {
  const foodOne = "Burger";
  const foodTwo = "Pizza";

  return (
    <ul>
      <li>Pasta</li>
      <li>{foodOne}</li>
      <li>{foodTwo.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
