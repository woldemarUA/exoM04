'use-strict';
import { INPUT, LABEL } from '../components/form.js';
import { BUTTON, divContainer, HEADING } from '../components/button.js';
import {
  buttonActiveClass,
  labelClass,
  inputClass,
} from '../utilities/variables.js';
import { outputReset } from '../utilities/reset.js';

//  id pour element affichee results
const OUTPUT = 'output';

export const inputsCard = (
  id,
  className,
  title,
  inputs,
  button,
  eventHandler
) => {
  const el = divContainer(id, `${className} card mx-1`);
  const titre = HEADING(5, 'card-title py-1 text-primary', title);
  el.appendChild(titre);

  const inputIDs = [];

  for (const elem of inputs) {
    const { label, input } = elem;
    const lab = LABEL(label.id, labelClass, label.htmlFor, label.text);
    const inp = INPUT(input.id, inputClass, input.type, input.placeholder);
    inputIDs.push(input.id);
    el.appendChild(lab);
    el.appendChild(inp);
  }

  const output = divContainer();

  const btn = BUTTON(buttonActiveClass, button.text, button.type, button.id);
  btn.onclick = () => {
    output.innerHTML = '';
    output.appendChild(outputReset(inputIDs, eventHandler));
    // outputReset(inputIDs, eventHandler);
  };
  el.appendChild(btn);
  el.appendChild(output);
  return el;
};
