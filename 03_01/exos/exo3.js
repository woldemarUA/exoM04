'use-strict';

import { inputsCard } from '../components/inputCard.js';
import { changerCouleur } from '../actions/exo3_logique.js';
import { divContainer } from '../components/button.js';

export const exo3 = (id, className, title) => {
  const inputsAll = divContainer(id, className);
  const colorHEX = inputsCard(
    'id',
    '',
    title,
    [
      {
        label: {
          id: `${id}--label`,
          htmlFor: `${id}-input`,
          text: 'entrez votre couleur valeur en HEX ',
        },
        input: {
          id: `${id}-input`,
          type: 'text',
          placeholder: 'ex : #ff00ff',
        },
      },
    ],
    {
      text: `changer couler`,
      type: 'button',
      id: `${id}-btn`,
    },
    changerCouleur
  );
  const colorPicker = inputsCard(
    'id2',
    '',
    '',
    [
      {
        label: {
          id: `${id}--label2`,
          htmlFor: `${id}-input2`,
          text: 'ou choissisez directemment ',
        },
        input: {
          id: `${id}-input2`,
          type: 'color',
          placeholder: 'ex : #ff00ff',
        },
      },
    ],
    {
      text: `ok`,
      type: 'button',
      id: `${id}-btn`,
    },
    changerCouleur
  );
  inputsAll.appendChild(colorHEX);
  inputsAll.appendChild(colorPicker);
  return inputsAll;
};
