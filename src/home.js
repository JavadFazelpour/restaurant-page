import { DOMUtils } from "./utils.js";
export function createHomePage() {
  const homePage = DOMUtils.createElement("div", {
    className: "page",
    id: "home-page",
  });

  const banner = DOMUtils.createElement("div", { className: "banner" });
  const restaurantName = DOMUtils.createElement("h1");
  restaurantName.textContent = "River Rock Grill";

  const reservations = DOMUtils.createElement("a");
  reservations.textContent = "Reservations";
  reservations.setAttribute("href", "");

  banner.appendChild(restaurantName);
  banner.appendChild(reservations);

  const brandStory = DOMUtils.createElement("div", {
    className: "brand-story",
  });

  const story = DOMUtils.createElement("p", { className: "story" });
  story.textContent =
    "River Rock Grill offers a unique dining experience by combining authentic Italian cuisine with a rustic grill, under the guidance of Chef Giovanni Fiume Pietra.311 Our dishes are crafted with the freshest, locally-sourced ingredients, and each dish reflects Giovanni's passion for quality and innovative spirit3.";

  brandStory.appendChild(story);

  homePage.appendChild(banner);
  homePage.appendChild(brandStory);

  return homePage;
}
