import prompt from "prompt";
import chalk from "chalk";

import { passwordPrompt } from "#prompts/password.js";
import { handle } from "./handle.js";

export function createPassword() {
  console.log(chalk.green.bold('=== Gerador de Senhas ==='))

  prompt.start()
  prompt.get(passwordPrompt, (err, result) => {
    if (err) {
      console.log(chalk.red.bold(err.message))
      return
    }

    const options = {
      length: parseInt(result.length),
      uppercase: result.uppercase.toLowerCase() === 's',
      lowercase: result.lowercase.toLowerCase() === 's',
      numbers: result.numbers.toLowerCase() === 's',
      special: result.special.toLowerCase() === 's'
    }

    const password = handle(options)
  
    if (!password) {
      console.log(chalk.red.bold('Erro: Selecione pelo menos um tipo de caractere'))
      return
    }
  
    console.log(chalk.green('\nSenha gerada:'))
    console.log(chalk.yellow.bold(password))
  })
}