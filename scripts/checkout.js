import { deletecartitem} from "/cart.js";
import { displayordersummary } from "/ordersummary.js";

displayordersummary();



    
document.querySelectorAll(".js-delete").forEach((delbutton) => {
  delbutton.addEventListener("click", () => {
    let itemid = delbutton.dataset.productId;
    deletecartitem(itemid);

    document.querySelector(`.cart-item-container-${itemid}`).remove();

    
  });
});

function displaydate(itemid, date) {
  document.querySelector(`.delivery-date-${itemid}`).innerHTML = date;
}




let datebutton = document.querySelectorAll(".delivery-option-input");
datebutton.forEach((datebut) => {
  datebut.addEventListener("click", () => {
    displaydate(datebut.dataset.productId, datebut.value);

    
  });
});
