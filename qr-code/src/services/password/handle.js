/**
 * Gera uma senha aleatória com base nas opções fornecidas
 * @param {Object} options - Opções para a geração de senha
 * @param {number} options.length - Comprimento da senha
 * @param {boolean} options.uppercase - Incluir letras maiúsculas
 * @param {boolean} options.lowercase - Incluir letras minúsculas
 * @param {boolean} options.numbers - Incluir números
 * @param {boolean} options.special - Incluir caracteres especiais
 * @returns {string|null} - A senha gerada ou null se nenhuma opção for selecionada
 */
export function handle(options) {
  const characters = []
  let password = ''

  if (options.uppercase) {
    characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }

  if (options.lowercase) {
    characters.push(...'abcdefghijklmnopqrstuvwxyz')
  }

  if (options.numbers) {
    characters.push(...'0123456789')
  }

  if (options.special) {
    characters.push(...'!@#$%&*()-_/\\?')
  }

  if (characters.length === 0) return null

  for (let i = 0; i < options.length; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index]
  }

  return password
}