import ConversionController from '../src/controllers/ConversionController';

describe('Conversion to roman (ConversionController.toRoman)', () => {
  
  it('Should return MMCCXLV when it receives 2245 as parameter', () => {
    const result = ConversionController.toRoman(2245);

    expect(result).toBe('MMCCXLV');
  });

  it('Should return \'0\' when it receives 0 as parameter', () => {
    const result = ConversionController.toRoman(0);

    expect(result).toBe('0');
  });

  it('Should return \'0\' when it receives 3001 as parameter (number > 3000)', () => {
    const result = ConversionController.toRoman(3001);

    expect(result).toBe('0');
  });
});

describe('Conversion to decimal (ConversionController.toDecimal)', () => {
  
  it('Should return 1524 when it receives MDXXIV as parameter', () => {
    const result = ConversionController.toDecimal('MDXXIV');

    expect(result).toBe(1524);
  });

  it('Should return 0 when it receives the wrong roman number LLX as parameter', () => {
    const result = ConversionController.toDecimal('LLX');

    expect(result).toBe(0);
  });

  it('Should return 0 when it receives an empty string', () => {
    const result = ConversionController.toDecimal('');

    expect(result).toBe(0);
  });

  it('Should return NaN when it receives the \'55\' value', () => {
    const result = ConversionController.toDecimal('55');

    expect(result).toBe(NaN);
  });
});
