export const HEADING = (size, className, text) => {
  const el = document.createElement(`h${size}`);
  el.className = className;
  el.innerHTML = text;
  return el;
};

export const BUTTON = (className, text, type, id, ...args) => {
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerText = text;
  btn.className = className;
  btn.type = type;

  return btn;
};

export const divContainer = (id, className) => {
  const el = document.createElement('div');
  el.id = id;
  el.className = className;
  return el;
};
