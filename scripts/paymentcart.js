import { cart } from "/cart.js";
import { products } from "/products.js";
import { deloption } from "/deliveryoptions.js";
let deloptionprice;
let productprice;
let matchingitem;
let quantity;
export function calculateprice() {
  quantity = 0;
  deloptionprice = 0;
  productprice = 0;
  deloptionprice = deloption();
  cart.forEach((cartitem) => {
    let itemid = cartitem.id;

    products.forEach((product) => {
      if (itemid === product.id) {
        matchingitem = product;
      }
    });
    productprice += (matchingitem.price / 100) * cartitem.quantity;
    quantity += cartitem.quantity;
  });

  let paymenthtml = `
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${quantity}):</div>
            <div class="payment-summary-money">$${productprice.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${deloptionprice.toFixed(
              2
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(
              productprice + deloptionprice
            ).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${(
              totalamount() -
              (productprice + deloptionprice)
            ).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${totalamount().toFixed(
              2
            )}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        `;

  document.querySelector(".js-select-payment").innerHTML = paymenthtml;
}

function totalamount() {
  let total = (productprice + deloptionprice) * 100;
  let tax = total * 0.1;
  return (total + tax) / 100;
}
