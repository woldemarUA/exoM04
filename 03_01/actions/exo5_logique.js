'use strict';

const fractor = BigInt(5);

export const modulo = (arr) => {
  let [value] = arr;
  value = BigInt(value);
  console.log();

  const reponse = `Si l'on divise ${value} par ${fractor}, le reste est  ${
    value % fractor
  }`;
  return !value ? false : reponse;
};
