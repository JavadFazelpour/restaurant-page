import { foodArray } from "./food-model.js";
import { DOMUtils } from "./utils.js";

export function createMenuPage() {
  const menuPage = DOMUtils.createElement("div", {
    className: "page",
    id: "menu-page",
  });

  const bannerDiv = DOMUtils.createElement("div", {
    className: "banner",
    id: "banner",
  });

  const title = DOMUtils.createElement("h1");
  title.textContent = "MENU";

  const restaurantName = DOMUtils.createElement("p");
  restaurantName.textContent = "River Rock Grill";
  bannerDiv.appendChild(title);
  bannerDiv.appendChild(restaurantName);

  menuPage.appendChild(bannerDiv);

  const foodContainer = DOMUtils.createElement("div", {
    className: "food-container",
    id: "food-container",
  });

  DOMUtils.AddCardsToContainer(foodArray, foodContainer);
  menuPage.appendChild(foodContainer);

  return menuPage;
}
