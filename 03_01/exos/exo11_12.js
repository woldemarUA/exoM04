'use strict';
import { inputsCard } from '../components/inputCard.js';
import { deviner, randomNum } from '../actions/exo11_logique.js';

export const exo11 = (id, className, title) => {
  const el = inputsCard(
    id,
    className,
    title,
    [
      {
        label: {
          id: `${id}-label`,
          htmlFor: `${id}-input`,
          text: 'Votre Choix?',
        },
        input: {
          id: `${id}-input my-1`,
          type: 'number',
          placeholder: 'vous avez 3 essais',
        },
      },
    ],
    {
      text: `Tentez votre chance`,
      type: 'button',
      id: `${id}-btn`,
    },
    deviner
  );

  randomNum();
  return el;
};
