import { deletecartitem } from "/cart.js";

import { displayordersummary } from "/ordersummary.js";

displayordersummary();



document.querySelectorAll(".js-delete").forEach((delbutton) => {
  delbutton.addEventListener("click", () => {
    let itemid = delbutton.dataset.productId;
    deletecartitem(itemid);

    document.querySelector(`.cart-item-container-${itemid}`).remove();

   // calculateprice();
  });
});

function displaydate(itemid, date) {
  document.querySelector(`.delivery-date-${itemid}`).innerHTML = date;
}


