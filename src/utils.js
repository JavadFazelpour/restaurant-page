export class DOMUtils {
  static createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const [attr, value] of Object.entries(attributes)) {
      element.setAttribute(attr, value);
    }
    return element;
  }

  static createFoodCard(food) {
    const foodCard = document.createElement("div");
    foodCard.className = "card";

    const foodName = document.createElement("p");
    foodName.textContent = food.name;
    foodCard.appendChild(foodName);

    const price = document.createElement("p");
    price.textContent = `$${food.price}`;
    foodCard.appendChild(price);

    const description = document.createElement("p");
    description.textContent = food.description;
    foodCard.appendChild(description);

    return foodCard;
  }

  static AddCardsToContainer(arr, container) {
    arr.forEach((item) => {
      const foodCard = this.createFoodCard(item);
      container.appendChild(foodCard);
    });
  }
}
