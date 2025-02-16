import { products } from "/products.js";
import { cart, addtocartfunc, showquant } from "/cart.js";

let html = "";
products.forEach((product) => {
  html += ` <div class="product-container">
  <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
            </div>
            
            <div class="product-name limit-text-to-2-lines">
            ${product.name}
            </div>
            
            <div class="product-rating-container">
            <img class="product-rating-stars"
            src="${product.getratingstarsurl()}">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>
          
          <div class="product-price">
          $ ${product.price / 100}
          </div>
          
          <div class="product-quantity-container">
          <select class="js-select-cartquant-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              </select>
              </div>
              ${product.extrainfo()}
              <div class="product-spacer"></div>
              
              <div class="added-to-cart">
              <img src="images/icons/checkmark.png">
              Added
              </div>
              
              <button class="add-to-cart-button button-primary js-add-to "
              data-product-id="${product.id}">
              Add to Cart
              </button>
              </div>`;
});
document.querySelector(".js-product-grid").innerHTML = html;
showquant();
let addtocart = document.querySelectorAll(".js-add-to");
addtocart.forEach((addbutton) => {
  addbutton.addEventListener("click", () => {
    let prodid = addbutton.dataset.productId;
    addtocartfunc(prodid);
    showquant();
  });
});
