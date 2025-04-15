import { addItem, calculateTotal, deleteItem, displayCart, removeItem } from "./services/cart.js"
import { createItem } from "./services/item.js"

const cart = []

console.log('É o carrinho da Shopee!!!!!')

const item1 = createItem('hotwheels mob', 10.99, 1)
const item2 = createItem('hotwheels bmw', 49.99, 3)

addItem(cart, item1)
addItem(cart, item2)

// deleteItem(cart, item1.name)
removeItem(cart, item2)

displayCart(cart)
console.log('Total do Carrinho:', calculateTotal(cart))
