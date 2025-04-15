/**
 * Adiciona um item ao carrinho ou incrementa a quantidade se o item já existir
 * @param {Array} userCart - O carrinho do usuário
 * @param {Object} item - O item a ser adicionado
 */
export function addItem(userCart, item) {
  const existingItemIndex = userCart.findIndex((cartItem) => cartItem.name === item.name)
  if (existingItemIndex !== - 1) {
    // inc qtt
    userCart[existingItemIndex].quantity += item.quantity
    return
  }
  // add item
  userCart.push(item)
}

/**
 * Calcula o valor total do carrinho
 * @param {Array} userCart - O carrinho do usuário
 * @returns {number} - O valor total
 */
export function calculateTotal(userCart) {
  return userCart.reduce((acc, current) => acc + current.subtotal(), 0)
}

/**
 * Remove completamente um item do carrinho pelo nome
 * @param {Array} userCart - O carrinho usuário
 * @param {string} name - O nome do item a ser removido
 * @returns {boolean} - Verdadeiro se o item foi removido, falso caso contrário
 */
export function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name)

  if (index !== -1) {
    userCart.splice(index, 1)
    return true
  }

  console.log(`Item "${name}" não encontrado no carrinho`)
  return false
}

/**
 * Diminui a quantidade de um item específico no carrinho
 * @param {Array} userCart - O carrinho do usuário
 * @param {Object} item - O item a ter quantidade reduzido
 * @returns {boolean} - Verdadeiro se a quantidade foi reduzida, falso caso contrário
 */
export function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name)
  
  if (indexFound === -1) {
    console.log(`Item "${item.name}" não encontrado no carrinho`)
    return false
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1
    return true
  } else { // if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1)
    return true
  }
}

/**
 * Exibe o carrinho no console
 * @param {Array} userCart - O carrinho do usuário
 */
export function displayCart(userCart) {
  console.log('=== Lista de Compras - Shopee ===')

  if (userCart.length === 0) {
    console.log('Carrinho vazio')
    return
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price.toFixed(2)} | Qtd: ${item.quantity} | Subtotal: R$${item.subtotal().toFixed(2)}`
    )
  })
} 