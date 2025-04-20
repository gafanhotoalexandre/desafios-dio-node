/**
 * @typedef {Object} PromptOption
 * @property {string} name - Nome da propriedade do prompt.
 * @property {string} description - Descrição para o usuário, geralmente estilizada com chalk.
 * @property {RegExp} [pattern] - Padrão de validação do valor de entrada.
 * @property {string} [message] - Mensagem exibida em caso de validação incorreta.
 * @property {boolean} [required] - Indica se o campo é obrigatório.
 */

import chalk from "chalk";

/**
 * @type {PromptOption[]}
 */
export const passwordPrompt = [
  {
    name: 'length',
    description: chalk.yellow('Tamanho da senha (8-30)'),
    pattern: /^([8-9]|[1-2][0-9]|30)$/,
    message: chalk.red.italic('O tamanho da senha deve estar entre 8 e 30'),
    required: true
  },
  {
    name: 'uppercase',
    description: chalk.yellow('Incluir letras maiúsculas? (s/n)'),
    pattern: /^[sSnN]$/,
    message: chalk.red.italic('Digite apenas s ou n'),
    required: true
  },
  {
    name: 'lowercase',
    description: chalk.yellow('Incluir letras minúsculas? (s/n)'),
    pattern: /^[sSnN]$/,
    message: chalk.red.italic('Digite apenas s ou n'),
    required: true
  },
  {
    name: 'numbers',
    description: chalk.yellow('Incluir números? (s/n)'),
    pattern: /^[sSnN]$/,
    message: chalk.red.italic('Digite apenas s ou n'),
    required: true
  },
  {
    name: 'special',
    description: chalk.yellow('Incluir caracteres especiais? (s/n)'),
    pattern: /^[sSnN]$/,
    message: chalk.red.italic('Digite apenas s ou n'),
    required: true
  }
]