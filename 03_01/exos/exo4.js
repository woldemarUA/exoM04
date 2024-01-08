'use strict';

import { inputsCard } from '../components/inputCard.js';
import { placeImage } from '../actions/exo4_logique.js';

import { divContainer } from '../components/button.js';

export const exo4 = (id, className, title) => {
  const el = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'Entrez image addresse ',
        },
        input: {
          id: `${id}-input`,
          type: 'text',
          placeholder: 'image addresse',
        },
      },
    ],
    {
      text: `Ajoutez l'image`,
      type: 'button',
      id: `${id}-btn`,
    },
    placeImage
  );
  return el;
};
