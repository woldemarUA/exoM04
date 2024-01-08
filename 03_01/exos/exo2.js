'use strict';
import { BUTTON, HEADING, divContainer } from '../components/button.js';
import { buttonActiveClass } from '../utilities/variables.js';

export const exo2 = (id, className, title) => {
  const el = divContainer(id, `${className} card mx-1`);
  const titre = HEADING(5, 'card-title py-1 text-primary', title);
  const btn = BUTTON(buttonActiveClass, `Afficher`, 'button');
  const output = divContainer();
  let cache = false;
  btn.onclick = () => {
    output.innerHTML = '';
    cache = !cache;

    const result = HEADING(
      6,
      cache ? `card-subtitle text-success py-3` : 'd-none',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil non nesciunt officia, maiores tempore!'
    );
    output.appendChild(result);
  };

  el.appendChild(titre);
  el.appendChild(btn);
  el.appendChild(output);

  return el;
};
