import { getdeloptionid } from "/checkout.js";
export let deloptions = [
  {
    id: "1",
    price: 0,
  },
  {
    id: "2",
    price: 499,
  },
  {
    id: "3",
    price: 999,
  },
];

export function deloption() {
  let totalcharge = 0;
  let ids = getdeloptionid();
  ids.forEach((id) => {
    deloptions.forEach((option) => {
      if (option.id === id) {
        totalcharge += option.price / 100;
      }
    });
  });
  return totalcharge;
}
