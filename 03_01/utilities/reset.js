'use strict';

import { HEADING, divContainer } from '../components/button.js';

export const outputReset = (inputIDs, callBack) => {
  const output = divContainer();
  const values = [];
  for (const input of inputIDs) {
    values.push(document.getElementById(input).value);
  }
  const res = callBack(values);
  const result = HEADING(
    6,
    res ? `card-subtitle text-success py-3` : 'card-subtitle text-danger py-3',
    res ? (res[0] === '#' ? '' : res) : 'Aucun Valeur'
  );
  output.appendChild(result);
  return output;
};
