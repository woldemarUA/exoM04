'use strict';

import { inputsCard } from '../components/inputCard.js';
import { ageJour2 } from '../actions/exo6_7_logique.js';

export const exo7 = (id, className, title) => {
  const inputsAll = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'Votre age courant ',
        },
        input: {
          id: `${id}-input`,
          type: 'number',
          placeholder: 'votre age courant',
        },
      },
      {
        label: {
          id: `${id}-label2`,
          htmlFor: `${id}-input2`,
          text: 'Votre age vecu ',
        },
        input: {
          id: `${id}-input2`,
          type: 'number',
          placeholder: 'age vecu',
        },
      },
    ],
    {
      text: `Calculer`,
      type: 'button',
      id: `${id}-btn`,
    },
    ageJour2
  );
  return inputsAll;
};
