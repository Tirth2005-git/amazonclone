export let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [];
}
function savetocart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addtocartfunc(prodid) {
  let matchingitem;
  let cartquantity = Number(
    document.querySelector(`.js-select-cartquant-${prodid}`).value
  );

  cart.forEach((item) => {
    if (prodid === item.id) {
      matchingitem = item;
    }
  });

  if (matchingitem) {
    matchingitem.quantity += cartquantity;
  } else {
    cart.push({ id: prodid, quantity: cartquantity });
  }

  savetocart();
}

export function showquant() {
  let totalquant = 0;
  cart.forEach((item) => {
    totalquant += item.quantity;
  });
  document.querySelector(".js-cart-quantity").innerHTML = totalquant;
}

export function deletecartitem(itemid) {
  let new_cart = [];
  cart.forEach((cartitem) => {
    if (cartitem.id != itemid) {
      new_cart.push(cartitem);
    }
  });
  cart = new_cart;
  savetocart();
}

export function updatecartquantity(cartid) {
  let matchingitem;
  cart.forEach((cartitem) => {
    if (cartitem.id === cartid) {
      matchingitem = cartitem;
    }
  });
  let newquantity = parseInt(
    document.querySelector(`.js-select-input-${matchingitem.id}`).value
  );
  console.log(cartid);
  console.log( `product id: .js-select-input-${cartid}`);
  console.log( matchingitem.quantity);
  matchingitem.quantity = newquantity;
  console.log( matchingitem.quantity);
  savetocart();
  return newquantity
}
