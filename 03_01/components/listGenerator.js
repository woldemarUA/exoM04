'use strict';

import { HEADING, divContainer } from './button.js';

export const listItems = (id, className, ordered, items) => {
  // console.log(id, className, ordered, items);
  const el = document.createElement(`${ordered ? 'ol' : 'ul'}`);
  el.className = `${className} ${ordered ? 'list-group-numbered' : ``}`;
  for (const item of items) {
    const li = document.createElement('li');
    li.className = `list-group-item`;
    li.innerHTML = item;

    el.appendChild(li);
  }

  return el;
};

export const listObjects = (id, className, ordered, items) => {
  const el = divContainer(id, 'd-flex');
  items.forEach((book, index) => el.appendChild(createBook(id, book, index)));

  return el;
};

function createBook(id, book, index) {
  const card = divContainer(`${id}-book-${index}`, 'card m-2');
  card.style.width = '18rem';

  const cardBody = divContainer(`${id}-body-${index}`);

  const cardImg = document.createElement('img');
  cardImg.className = 'card-img-top m-1';
  cardImg.src = book.image;

  const cardTitle = HEADING(5, 'card-title mx-1', book.title);

  const cardSubTitle = HEADING(
    6,
    'card-subtitle mb-2 text-muted mx-1',
    book.author
  );
  card.appendChild(cardImg);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);
  return card;
}
