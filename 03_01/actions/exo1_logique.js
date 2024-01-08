'use strict';

export const multiplo = (values) => {
  const [value1, value2] = values;

  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);
  const result = new Map([
    [true, num1 * num2],
    [false, false],
  ]);
  // console.log(result.get(!isNaN(num1) && !isNaN(num2)));
  return result.get(!isNaN(num1) && !isNaN(num2));
};
