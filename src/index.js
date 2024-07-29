import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to the your Shopee cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
const item3 = await createItem("Undisputed", 120.00, 5);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItemToWishList(myWishList, item3);
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);
await cartService.displayWishLIst(myWishList);
await cartService.calculateTotal(myCart, 20);