import 'module-alias/register.js'

import chalk from 'chalk'
import prompt from 'prompt'
import { mainPrompt } from './prompts/main.js'
import { createQRCode } from './services/qr-code/create.js'
import { createPassword } from './services/password/create.js'

function main() {
  console.log(chalk.blue.bold('=== CLI de Ferramentas Utilitárias ==='))
  prompt.start()

  prompt.get(mainPrompt, (err, result) => {
    if (err) {
      console.log(chalk.red.bold(err.message))
      return
    }

    const option = parseInt(result.select)

    switch(option) {
      case 1:
        createQRCode()
        break
      case 2:
        createPassword()
        break
      default:
        console.log(chalk.red.bold('Opção inválida!'))
    }
  })
}

main()