import { cart } from "/cart.js";
import { products } from "/products.js";
export function displayordersummary()
{
  let html = "";
    cart.forEach((item) => {
      let prodid = item.id;
      let matchingprod;
      products.forEach((product) => {
        if (product.id === prodid) {
          matchingprod = product;
        }
      });
      html += `<div class="cart-item-container cart-item-container-${prodid}">
        <div class="delivery-date delivery-date-${item.id}">
          ${dayjs().add(7, "days").format("dddd ,MMMM DD")}
        </div>
    
        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingprod.image}">
    
          <div class="cart-item-details">
            <div class="product-name">
              ${matchingprod.name}
            </div>
            <div class="product-price">
             $ ${matchingprod.price / 100}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label-${item.id}">${item.quantity}</span>
              </span>
              <input class="js-select-input-${item.id}" type="number" min="1" max="10" style="display:none" value="${item.quantity}">
              <span class="update-quantity-link link-primary js-select-update-${item.id}" data-product-id="${item.id}" style="display:inline" >
                Update
              </span>
              <span class="update-quantity-link link-primary js-select-save-${item.id}" data-product-id="${item.id}" style="display:none">
                Save
              </span>
              <span class="delete-quantity-link link-primary js-delete " data-product-id="${
                item.id
              }">
                Delete
              </span>
            </div>
          </div>
    
          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
    
            <div class="delivery-option">
              <input type="radio" checked class="delivery-option-input"
                name="${matchingprod.name}-delivery-date" value="${dayjs()
        .add(7, "days")
        .format("dddd ,MMMM DD")}"  data-product-id="${prodid}" id="1">
              <div>
                <div class="delivery-option-date">
                  ${dayjs().add(7, "days").format("dddd ,MMMM DD")}
                  </div>
                  <div class="delivery-option-price">
                  FREE Shipping
                  </div>
                  </div>
                  </div>
                  <div class="delivery-option">
                  <input type="radio"  class="delivery-option-input"
                  name="${matchingprod.name}-delivery-date" value="${dayjs()
        .add(3, "days")
        .format("dddd ,MMMM DD")}" data-product-id="${prodid}" id="2">
                  <div>
                  <div class="delivery-option-date">
                  ${dayjs().add(3, "days").format("dddd ,MMMM DD")}
                  
                  </div>
                  <div class="delivery-option-price">
                  $4.99 - Shipping
                  </div>
                  </div>
                  </div>
                  <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                  name="${matchingprod.name}-delivery-date" value="${dayjs()
        .add(1, "days")
        .format("dddd ,MMMM DD")}"  data-product-id="${prodid}" id="3">
          
                  <div class="delivery-option-date">
                   ${dayjs().add(1, "days").format("dddd ,MMMM DD")}
                 
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    });
    document.querySelector(".order-summary").innerHTML = html;
   
}

