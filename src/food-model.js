export class Food {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

const pizza = new Food(
  "Pizza",
  "A delicious cheesy pizza with a crispy crust and fresh toppings.",
  12.99
);
const burger = new Food(
  "Burger",
  "A juicy beef burger with lettuce, tomato, and a special sauce.",
  9.99
);
const sushi = new Food(
  "Sushi",
  "Freshly made sushi rolls with salmon, avocado, and rice.",
  14.99
);
const pasta = new Food(
  "Pasta",
  "Creamy Alfredo pasta with grilled chicken and Parmesan cheese.",
  11.49
);

export const foodArray = [pizza, burger, sushi, pasta];
