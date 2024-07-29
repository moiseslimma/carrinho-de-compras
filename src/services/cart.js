

async function addItem(userCart, item) {
    userCart.push(item);
}

async function addItemToWishList(myWishList, item) {
    myWishList.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound == -1) {
        console.log("Item não encontrado!");
        return;
    }
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    if(userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function calculateTotal(userCart, coupon = null) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    let resultWithCoupon;
    let totalValue;
    if(coupon){
        resultWithCoupon = await applyCoupon(coupon, result);
    }
    totalValue = coupon !== null ? resultWithCoupon.toFixed(2) : result;
    console.log(`\n🎁Total: ${totalValue}`);
}

async function displayCart(userCart) {
    console.log("\nShopee cart TOTAL is:");
    console.log("Shopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`); 
    });
}

async function displayWishLIst(myWishList) {
    console.log(`\nLista de desejos: `);
    myWishList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal: R$ ${item.subtotal().toFixed(2)}`)
    })
}

async function applyCoupon(coupon, totalPrice){
    let descount = totalPrice - (totalPrice * (coupon / 100));
    return descount;
}

export {
    addItem,
    addItemToWishList,
    calculateTotal,
    deleteItem,
    removeItem, 
    displayCart, 
    displayWishLIst
}