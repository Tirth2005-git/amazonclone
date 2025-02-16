import { deletecartitem} from "/cart.js";
import { displayordersummary } from "/ordersummary.js";

displayordersummary();

document.querySelectorAll(".update-quantity-link").forEach((updateButton) => {
  updateButton.addEventListener("click", () => {
    const prodId = updateButton.dataset.productId;

    const inputField = document.querySelector(`.js-select-input-${prodId}`);
    const saveButton = document.querySelector(`.js-select-save-${prodId}`);

    inputField.style.display = "inline";
    saveButton.style.display = "inline";
    updateButton.style.display = "none";

    saveButton.addEventListener("click", () => {
      document.querySelector(`.quantity-label-${prodId}`).innerHTML =
        updatecartquantity(prodId);
      inputField.style.display = "none";
      saveButton.style.display = "none";
      updateButton.style.display = "inline";

      calculateprice();
    });
  });
});

document.querySelectorAll(".js-delete").forEach((delbutton) => {
  delbutton.addEventListener("click", () => {
    let itemid = delbutton.dataset.productId;
    deletecartitem(itemid);

    document.querySelector(`.cart-item-container-${itemid}`).remove();

    calculateprice();
  });
});

function displaydate(itemid, date) {
  document.querySelector(`.delivery-date-${itemid}`).innerHTML = date;
}

calculateprice();
export function getdeloptionid() {
  let ids = [];
  document.querySelectorAll(".delivery-option-input").forEach((button) => {
    if (button.checked) {
      ids.push(button.id);
    }
  });
  return ids;
}

let datebutton = document.querySelectorAll(".delivery-option-input");
datebutton.forEach((datebut) => {
  datebut.addEventListener("click", () => {
    displaydate(datebut.dataset.productId, datebut.value);

    calculateprice();
  });
});
