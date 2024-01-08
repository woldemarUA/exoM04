'use strict';
import { BUTTON, divContainer } from '../components/button.js';
import { openModal, closeModal, buttonClick } from '../actions/modalScripts.js';

import {
  buttonSuccess,
  buttonDangerClass,
  exContainerClass,
  buttonInfoClass,
} from '../utilities/variables.js';

export const modal = (id) => {
  const modal = divContainer(id);
  //   modal
  const modalBody = divContainer('myModal', 'my-modal');
  const modalContent = divContainer('modalCont', 'my-modal-content');

  const textP = document.createElement('p');
  textP.innerText = 'Etez vous contente?';
  const smileySpan = document.createElement('span');
  textP.appendChild(smileySpan);
  //   ouvrir le modal fenetre
  const buttonOpen = BUTTON(buttonInfoClass, 'OUVREZ', 'button', 'btnOpen');
  buttonOpen.addEventListener('click', () => openModal(modalBody));
  //  fermer le modal fenetre
  const spanFerme = document.createElement('span');
  spanFerme.className = 'close';
  spanFerme.innerHTML = '&times;';
  spanFerme.addEventListener('click', () => closeModal(modalBody));

  const buttonOui = BUTTON(buttonSuccess, 'OUI', 'button', 'btn-modal-oui');
  buttonOui.onclick = () => buttonClick('oui', smileySpan);
  const buttonNon = BUTTON(buttonDangerClass, 'NON', 'button', 'btn-modal-non');
  buttonNon.onclick = () => buttonClick('non', smileySpan);
  modal.appendChild(buttonOpen);
  modal.appendChild(modalBody);
  modalContent.appendChild(spanFerme);
  modalContent.appendChild(textP);
  modalBody.appendChild(modalContent);
  modalContent.appendChild(buttonOui);
  modalContent.appendChild(buttonNon);

  return modal;
};
