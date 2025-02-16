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

