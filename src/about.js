import { DOMUtils } from "./utils.js";

export function createAboutPage() {
  const aboutPage = DOMUtils.createElement("div", { className: "about" });

  const chefName = DOMUtils.createElement("h2");
  chefName.textContent = "Giovanni Fiume Pietra";

  const aboutChef = DOMUtils.createElement("p", { className: "chef" });
  aboutChef.textContent =
    "Chef Giovanni Fiume Pietra invites you to River Rock Grill, a culinary destination where passion, tradition, and the finest ingredients converge. Inspired by his Italian roots and a deep respect for the natural world, Giovanni crafts dishes that are both comforting and innovative. His philosophy is simple: start with the best, treat it with care, and let the flavors speak for themselves. Whether you're savoring our signature pasta or indulging in a perfectly grilled beef, you'll taste the difference that dedication and artistry make.";

  aboutPage.appendChild(chefName);
  aboutPage.appendChild(aboutChef);

  const contactContainer = DOMUtils.createElement("div", {
    className: "contacts",
  });

  const address = DOMUtils.createElement("div", { className: "address" });

  const street = DOMUtils.createElement("p", { className: "street" });
  street.textContent = "Via del Fiume, 12";

  const province = DOMUtils.createElement("p", { className: "province" });
  province.textContent = "50122 Firenze (Florence), FI";

  const country = DOMUtils.createElement("p", { className: "country" });
  country.textContent = "Italy";

  address.appendChild(street);
  address.appendChild(province);
  address.appendChild(country);

  const telContainer = DOMUtils.createElement("div", {
    className: "tel-container",
  });
  const telephone = DOMUtils.createElement("a", { className: "tel" });
  telephone.setAttribute("href", "tel:+390551234567");
  telephone.textContent = "+39 055 123 4567";
  telContainer.appendChild(telephone);

  const mailContainer = DOMUtils.createElement("div", {
    className: "mail-container",
  });
  const email = DOMUtils.createElement("a", { className: "email" });
  email.setAttribute("href", "mailto:reservations@riverrockgrill.it");
  email.textContent = "Make a Reservation";
  mailContainer.appendChild(email);

  contactContainer.appendChild(address);
  contactContainer.appendChild(telContainer);
  contactContainer.appendChild(email);

  aboutPage.appendChild(contactContainer);

  return aboutPage;
}
