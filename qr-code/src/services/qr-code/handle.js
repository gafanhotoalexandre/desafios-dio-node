import chalk from 'chalk'
import qr from 'qrcode-terminal'

export function handle(_err, result) {
  const isSmall = result.type == 2
  
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green('QR Code gerado com sucesso:'))
    console.log(qrcode)
  })
}