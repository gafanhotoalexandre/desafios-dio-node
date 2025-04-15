/**
 * Cria um novo item para o carrinho
 * @param {string} name - Nome do item
 * @param {number} price - Preço unitário do item
 * @param {number} quantity - Quantidade inicial do item
 * @returns {Object} - O objeto item criado
 */
export function createItem(name, price, quantity) {
  if (!name || name.trim() === '') {
    throw new Error('O nome do item é necessário')
  }
  if (typeof price !== 'number' || price <= 0) {
    throw new Error('O preço deve ser um número positivo')
  }
  if (typeof quantity !== 'number' || quantity <= 0 || !Number.isInteger(quantity)) {
    throw new Error('A quantidade deve ser um número inteiro positivo');
  }
  
  return {
    name,
    price,
    quantity,
    subtotal: function () {
      return this.price * this.quantity
    }
  }
}