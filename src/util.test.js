import calculator from './calculator.js';
import stringLength from './stringLength.js';
import revserseString from './reverseString.js';
import capitalize from './capitalize.js';

describe('String Length Function', () => {
  test('Returns the count of characters', () => {
    expect(stringLength('Welcome')).toBe(7);
  });

  test('Validates whether the number of characters is more than one and not more ten', () => {
    expect(stringLength('Welcome')).toBe(7);
  });
});

describe('Reversed string', () => {
  test('should take a string as an argument and return it reversed', () => {
    const str = 'Welcome';
    const reverseStr = str.split('').reverse().join('');
    expect(revserseString('Welcome')).toEqual(reverseStr);
  });
});

describe('Calculator class test', () => {
  test('should return sum of two integers', () => {
    expect(calculator.add(2, 5)).toBe(7);
  });

  test('should return difference of two integers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('should return multiplication of two integers', () => {
    expect(calculator.multiply(2, 5)).toBe(10);
  });
});

describe('Capitalize string', () => {
  test('Should take a string as an argument and return it capitalized', () => {
    const str = 'welcome';
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    expect(capitalize('welcome')).toEqual(capitalizedStr);
  });
});