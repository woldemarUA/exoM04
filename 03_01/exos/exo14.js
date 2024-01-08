'use strict';

import { divContainer, HEADING, BUTTON } from '../components/button.js';
import {
  buttonActiveClass,
  buttonSuccess,
  buttonWarningClass,
} from '../utilities/variables.js';
import { listObjects } from '../components/listGenerator.js';

const btnOnclick = (id, filter, items, row) => {
  row.innerHTML = '';
  const books =
    filter === 'tous' ? items : items.filter((book) => book.type === filter);

  row.appendChild(listObjects(`${id}-books-${filter}`, 'card', 'obj', books));
};

export const exo14 = (id, className, title, ordered, items) => {
  const el = divContainer(`${id}-container`, 'container');

  const row1 = divContainer(`${id}-row-1`, 'row');
  const row2 = divContainer(`${id}-row-2`, ' btn-group');
  const row3 = divContainer(`${id}-row-3`, 'row ');
  row2.setAttribute('role', 'group');

  const titre = HEADING(5, 'card-title py-1 text-primary', title);

  const btnCSS = BUTTON(
    buttonSuccess,
    'Filtrer par CSS',
    'button',
    `${id}-btn-css`
  );
  const btnTous = BUTTON(
    buttonActiveClass,
    'Afficher tous',
    'button',
    `${id}-bnt-tous`
  );
  const btnJS = BUTTON(
    buttonWarningClass,
    'Filtrer par JS',
    'button',
    `${id}-btn-js`
  );
  btnOnclick(id, `tous`, items, row3);
  btnCSS.onclick = () => btnOnclick(id, 'css', items, row3);
  btnTous.onclick = () => btnOnclick(id, `tous`, items, row3);
  btnJS.onclick = () => btnOnclick(id, 'js', items, row3);

  row1.appendChild(titre);
  row2.appendChild(btnCSS);
  row2.appendChild(btnTous);
  row2.appendChild(btnJS);

  el.appendChild(row1);
  el.appendChild(row2);
  el.appendChild(row3);
  return el;
};
