import Arabic from '../models/Arabic';
import Roman from '../models/Roman';

class ConversionController {

  romanList: string[] = Roman.list();
  arabicList: number[] = Arabic.list();

  /**
   * This method converts a decimal number in roman.
   * 
   * @param value A decimal number (integer) to be converted in roman.
   * @returns A string that represents the decimal number received in the `value` parameter.
   */
  public toRoman (value: number): string {

    if (value < 1 || value > 3000) return '0';

    let result: string = '';

    for (let i: number = 0; i < this.arabicList.length; i++) {
      const division: number = Math.trunc(value / this.arabicList[i]);
      value -= this.arabicList[i] * division;
      result += this.romanList[i].repeat(division);
    }

    return result;
  }

  /**
   * This method converts a roman number in decimal.
   * 
   * @param value A roman number (string) to be converted in decimal.
   * @returns A decimal number that represents the roman received in the `value` parameter.
   */
  public toDecimal (value: string): number {
    let current: string = '';
    let next: string = '';
    let currentValue: number = 0;
    let nextValue: number = 0;
    let result: number = 0;

    const splittedValue: string[] = value.split('');
    
    for (let i: number = 0; i < splittedValue.length; i++) {
      current = splittedValue[i];
      next = splittedValue[i+1];

      if (current == next && (current == 'D' || current == 'L' || current == 'V')) return 0;

      currentValue = this.getEquivalentArabicNumber(current);
      nextValue = this.getEquivalentArabicNumber(next);

      if (currentValue < nextValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }

    }

    return result;
  }

  /**
   * This aux private method returns the equivalent decimal of a roman number from the `Roman.list()` and `Arabic.list()`.
   * 
   * @param value A roman number (string) to be converted in decimal.
   * @returns A decimal number that represents the roman received in the `value` parameter.
   */
  private getEquivalentArabicNumber (roman: string): number {
    for (let i: number = 0; i < this.romanList.length; i++) {
      if (this.romanList[i] == roman) {
        return this.arabicList[i];
      }
    }
  }
}

export default new ConversionController();
