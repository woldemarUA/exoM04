'use strict';

export const INPUT = (id, className, type, placeholder) => {
  const el = document.createElement('input');
  el.id = id;
  el.className = className;
  el.type = type;
  el.placeholder = placeholder;
  return el;
};

export const LABEL = (id, className, htmlFor, labelText) => {
  const el = document.createElement('label');
  el.id = id;
  el.className = className;
  el.htmlFor = htmlFor;
  el.innerHTML = labelText;
  return el;
};
