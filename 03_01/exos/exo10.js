'use strict';
import { divContainer } from '../components/button.js';
import { HEADING } from '../components/button.js';
import { listItems } from '../components/listGenerator.js';
import { BUTTON } from '../components/button.js';
import { INPUT } from '../components/form.js';
import { buttonActiveClass } from '../utilities/variables.js';

const btnOnclick = (list, inp) => {
  if (inp.value === '' || !inp.value) {
    inp.placeholder = `Ici, Il faut taper les course`;
    inp.classList.add('refus');
    return;
  }
  inp.placeholder = 'tapez article';
  inp.classList.remove('refus');
  const li = document.createElement('li');
  li.className = `list-group-item`;
  li.innerHTML = inp.value;
  list.appendChild(li);
  inp.value = '';
};

export const exo10 = (id, className, title, ordered, items) => {
  const el = divContainer(id, `${className} card`);
  const titre = HEADING(5, 'card-title py-1 text-primary', title);
  const list = listItems(`${id}-list`, `list-group`, ordered, items);
  const inp = INPUT(
    `${id}-input`,
    `form-control my-1`,
    'text',
    'tapez article'
  );
  const btn = BUTTON(buttonActiveClass, 'Ajoutez', 'button', `${id}-btn`);

  btn.onclick = () => btnOnclick(list, inp);

  el.appendChild(titre);
  el.appendChild(list);

  el.appendChild(inp);

  el.appendChild(btn);
  return el;
};
