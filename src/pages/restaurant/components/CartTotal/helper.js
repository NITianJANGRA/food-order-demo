
const reduceProductTotal = (productList)=> (total,cartItem) => total += getTotalAmount(cartItem, productList[cartItem.itemId])

export const getCartTotalPrice = (cartList, productList) => cartList.reduce( reduceProductTotal(productList) ,0)

export const getTotalAmount = (cartItem, productDetails) => cartItem.orderQuantity * parseInt(productDetails.price)
