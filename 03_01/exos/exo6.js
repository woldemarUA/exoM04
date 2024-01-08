'use strict';

import { inputsCard } from '../components/inputCard.js';
import { ageJour } from '../actions/exo6_7_logique.js';

export const exo6 = (id, className, title) => {
  const inputsAll = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'Calculez votre age en jours ',
        },
        input: {
          id: `${id}-input`,
          type: 'number',
          placeholder: 'votre age',
        },
      },
    ],
    {
      text: `Calculer`,
      type: 'button',
      id: `${id}-btn`,
    },
    ageJour
  );
  return inputsAll;
};
