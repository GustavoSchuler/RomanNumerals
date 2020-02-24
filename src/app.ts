import readline from 'readline';

import convController from './controllers/ConversionController';

class App {
  public constructor () {
    this.listen();
  }

  private listen (): void {
    const reader: readline.Interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    reader.question('Digite um número decimal ou romano para ser convertido:\n\n', (answer) => {
      let res: string = null;
      let msg: string = null;

      if (!isNaN(Number(answer))) {
        res = convController.toRoman(Number(answer));
        msg = answer + ' em romanos é igual a ' + res;
      } else {
        res = convController.toDecimal(answer).toString();
        msg = answer + ' em decimais é igual a ' + res;
      }

      if (res == 'NaN' || res == '0' || Number(res) > 3000) {
        msg = 'Valor digitado inválido!';
      }

      console.log(msg + '\n');
      reader.close();
      this.listen();
    });
  }
}

export default new App();
