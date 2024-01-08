'use strict';
const resMap = new Map([
  [1, 'un'],
  [0, 'zero'],
  [5, 'cinq'],
  [2, 'deux'],
  [3, 'trois'],
  [4, 'quatre'],
  [false, 'il faut taper valeur entre 0 et 5'],
]);
export const zeroCinq = (arr) => {
  let [num] = arr;
  if (num === '') {
    return `<span class='${num ? 'text-success' : 'text-danger'}'>${resMap.get(
      false
    )}</span>`;
  }
  num = Number(num);
  if (num === 0) {
    return `<span class='text-success'>${resMap.get(num)}</span>`;
  }

  num < 0 || num > 5 ? (num = false) : num;

  return `<span class='${num ? 'text-success' : 'text-danger'}'>${resMap.get(
    num
  )}</span>`;
};
