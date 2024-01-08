'use strict';

export const changerCouleur = (values) => {
  const [val] = values;
  const body = document.querySelector('body');
  body.style.backgroundColor = val;
  return val;
};
