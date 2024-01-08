'use strict';
import { inputsCard } from '../components/inputCard.js';
import { multiplo } from '../actions/exo1_logique.js';

export const exo1 = (id, className, title) => {
  const inputsAll = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'entrez votre nombre 1 ',
        },
        input: {
          id: `${id}-input`,
          type: 'number',
          placeholder: 'nombre 1',
        },
      },
      {
        label: {
          id: `${id}-label2`,
          htmlFor: `${id}-input2`,
          text: 'entrez votre nombre 2',
        },
        input: {
          id: `${id}-input2`,
          type: 'number',
          placeholder: 'nombre 2',
        },
      },
    ],
    {
      text: `Multiplier`,
      type: 'button',
      id: `${id}-btn`,
    },
    multiplo
  );
  return inputsAll;
};
