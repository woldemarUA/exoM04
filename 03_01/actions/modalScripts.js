'use strict';

const reponses = new Map([
  ['oui', '&#128525;'],
  ['non', '&#128531;'],
]);

export const openModal = (modalBody) => {
  modalBody.style.display = 'block';
  windowClose(modalBody);
};

export const closeModal = (modalBody) => {
  modalBody.style.display = 'none';
};

const windowClose = (modalBody) => {
  window.onclick = function (event) {
    if (event.target === modalBody) {
      modalBody.style.display = 'none';
    }
  };
};

export const buttonClick = (reponse, smileySpan) => {
  smileySpan.innerHTML = reponses.get(reponse);
};
