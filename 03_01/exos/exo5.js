'use strict';
import { inputsCard } from '../components/inputCard.js';
import { modulo } from '../actions/exo5_logique.js';

export const exo5 = (id, className, title) => {
  const el = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'Modulo de votre nombre divisé par 5',
        },
        input: {
          id: `${id}-input`,
          type: 'number',
          placeholder: 'tapez numéro',
        },
      },
    ],
    {
      text: `Calculer modulo`,
      type: 'button',
      id: `${id}-btn`,
    },
    modulo
  );

  return el;
};
