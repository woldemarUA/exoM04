'use strict';

// Quantite d'essais
const essais = 3;
// Nombre a deviner
let magicNum;
// Compter d'essais par utilisator
let tries = 0;
const choice = 10;

export const randomNum = () => {
  magicNum = Math.floor(Math.random() * choice);
  console.log(`deviner ${magicNum}`);
};

const choixOutput = new Map([
  [2, 'Vous avez gagné, nouvel numero etait generé'],
  [-1, 'trop petit'],
  [1, 'trop grand'],
  [
    -2,
    `Perdu! Vous avez fait plus de ${essais} essais, nouvel numero etait generé`,
  ],
  [false, `aucune valeur saisie`],
]);

export const deviner = (arr) => {
  if (!arr[0]) return gameMessage(false);

  const [val] = arr.map(Number);

  if (val > magicNum) {
    tries++;
    return tries === essais ? perdu() : gameMessage(1);
  }
  if (val < magicNum) {
    tries++;
    return tries === essais ? perdu() : gameMessage(-1);
  }
  if (val === magicNum) {
    restartGame();
    return gameMessage(2);
  }
};

// Generer message gagne / petit / grand

function gameMessage(mapValue) {
  return `<span class = ${
    mapValue === 2 ? 'text-success' : 'text-danger'
  }>${choixOutput.get(mapValue)}</span>`;
}

// recommencer le jeu

function restartGame() {
  tries = 0;
  randomNum();
}

// perdu 😪

function perdu() {
  restartGame();
  return gameMessage(-2);
}
