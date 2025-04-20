import chalk from "chalk";

/**
 * @typedef {Object} PromptOption
 * @property {string} name - Nome da propriedade do prompt.
 * @property {string} description - Descrição para o usuário, geralmente estilizada com chalk.
 * @property {RegExp} [pattern] - Padrão de validação do valor de entrada.
 * @property {string} [message] - Mensagem exibida em caso de validação incorreta.
 * @property {boolean} [required] - Indica se o campo é obrigatório.
 */

/**
 * @type {PromptOption[]}
 */
export const qrCodePropmt = [
  {
    name: 'link',
    description: chalk.yellow('Informe o link para gerar o QR CODE')
  },
  {
    name:'type',
    description: chalk.yellow(
      'Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL'
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic('Escolha apenas entre 1 e 2'),
    required: true
  }
]