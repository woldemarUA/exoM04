'use strict';
import { inputsCard } from '../components/inputCard.js';
import { zeroCinq } from '../actions/exo9_logique.js';

export const exo9 = (id, className, title) => {
  const el = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'Entrez numero de 0 a 5 ',
        },
        input: {
          id: `${id}-input`,
          type: 'number',
          placeholder: '0<vos input<5',
        },
      },
    ],
    {
      text: `Allez`,
      type: 'button',
      id: `${id}-btn`,
    },
    zeroCinq
  );
  return el;
};
