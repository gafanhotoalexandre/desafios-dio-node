import prompt from "prompt";
import chalk from "chalk";
import { qrCodePropmt } from "#prompts/qrcode.js";
import { handle } from "./handle.js";

export function createQRCode() {
  console.log(chalk.green.bold('=== Gerador de QR Code ==='))

  prompt.start()
  prompt.get(qrCodePropmt, (err, result) => {
    if (err) {
      console.log(chalk.red.bold(err.message))
      return
    }

    handle(err, result)
  })
}