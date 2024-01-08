'use strict';
import { divContainer } from './components/button.js';
import { modal } from './exos/exo8.js';
import { exo1 } from './exos/exo1.js';

const buttonActiveClass = 'btn btn-primary my-1 py-2 px-5';
const exContainerClass = 'my-3 border p-2';
const body = document.querySelector('body');
const app = document.getElementById('app');

const range1 = divContainer('exo1', 'row');
range1.appendChild(modal('monmodal'));
range1.appendChild(exo1());
app.appendChild(range1);
// exo 1
const exContainer1 = document.createElement('div');
exContainer1.className = exContainerClass;
app.appendChild(exContainer1);
const num1 = document.createElement('input');
num1.id = 'num1';
num1.className = 'form-control';
const label1 = document.createElement('label');
label1.innerText = 'tapez nombre 1';
label1.htmlFor = 'num1';
label1.className = 'form-label';
const num2 = document.createElement('input');
num2.id = 'num2';
num2.className = 'form-control';
num1.type = num2.type = 'number';

const label2 = document.createElement('label');
label2.innerText = 'tapez nombre 2';
label2.htmlFor = 'num2';

const result = document.createElement('div');
result.className = 'text-success';

const resultHeading = document.createElement('h2');
resultHeading.innerText = 'Votre result: ';

const btn = document.createElement('button');
btn.innerText = 'Mulituplier';
btn.type = 'button';
btn.className = buttonActiveClass;

const btnReset = document.createElement('button');
btnReset.innerText = 'ENCORE?';
btnReset.type = 'button';
btnReset.className = `${buttonActiveClass} d-none`;

exContainer1.appendChild(label1);
exContainer1.appendChild(num1);
exContainer1.appendChild(label2);
exContainer1.appendChild(num2);
exContainer1.appendChild(btn);
exContainer1.appendChild(result);
exContainer1.appendChild(btnReset);

const resetValues = () => {
  num1.value = num2.value = '';
  resultHeading.innerText = '';
  btn.className = buttonActiveClass;
  btnReset.className = 'd-none';
};

btn.addEventListener('click', () => {
  if (!num1.value || !num2.value) {
    resultHeading.innerText = 'Pas de valeur';
    resultHeading.className = 'text-danger';
    result.appendChild(resultHeading);
  } else {
    resultHeading.innerText += Number(num1.value) * Number(num2.value);
    resultHeading.className = 'text-success';
    result.appendChild(resultHeading);
  }

  btn.className = 'd-none';
  btnReset.className = buttonActiveClass;
});

btnReset.addEventListener('click', resetValues);

// excercise 2
const exContainer2 = document.createElement('div');
exContainer2.className = exContainerClass;
app.appendChild(exContainer2);
const p2 = document.createElement('p');
p2.innerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nihil non nesciunt officia, maiores tempore!';
p2.className = 'd-none';
const btnEx2 = document.createElement('button');
btnEx2.innerText = 'Afficher';
btnEx2.className = buttonActiveClass;
exContainer2.appendChild(p2);
exContainer2.appendChild(btnEx2);

const cacher = () => {
  if (btnEx2.innerText === 'Afficher') {
    btnEx2.innerText = 'Cacher';
    p2.className = 'text-center';
  } else {
    btnEx2.innerText = 'Afficher';
    p2.className = 'd-none';
  }
};
btnEx2.addEventListener('click', cacher);

// excercise 3
const exContainer3 = document.createElement('div');
exContainer3.className = `${exContainerClass} `;
const flex3Container = document.createElement('div');
flex3Container.className = `d-flex flex-column`;

app.appendChild(exContainer3);
const color = document.createElement('input');
color.id = 'color';
color.className = 'form-control';
const labelColor = document.createElement('label');
labelColor.innerText =
  'entrez votre couleur valeur en HEX (ex : #ff00ff) \nou en choisissant la couleur dans le sélecteur de couleurs ci-dessous';
labelColor.htmlFor = 'color';
labelColor.className = 'form-label bg-light';

const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.className = 'form-control';
const btnColor = document.createElement('button');
btnColor.className = buttonActiveClass;
btnColor.innerText = `Changer le couleur arrière-plan`;

colorPicker.addEventListener(
  'input',
  () => (body.style.backgroundColor = colorPicker.value)
);

exContainer3.appendChild(labelColor);
exContainer3.appendChild(flex3Container);
flex3Container.appendChild(color);
flex3Container.appendChild(colorPicker);
exContainer3.appendChild(btnColor);
btnColor.addEventListener('click', () => {
  body.style.backgroundColor = color.value;
});

// excercise 4

const exContainer4 = document.createElement('div');
exContainer4.className = exContainerClass;
app.appendChild(exContainer4);
const fileInput4 = document.createElement('input');
fileInput4.placeholder = `entrez vous l'addresse d'image`;
// fileInput4.type = 'file';
fileInput4.type = 'text';
// fileInput4.onchange = () => {
//   console.log(fileInput4.files[0].name);
// };
const imageFrame = document.createElement('div');
imageFrame.className = 'container p-5 w-50';
const btnImage = document.createElement('button');
btnImage.innerText = `Ajoutez l'image`;
btnImage.className = `${buttonActiveClass} d-flex `;
exContainer4.appendChild(fileInput4);
exContainer4.appendChild(btnImage);
exContainer4.appendChild(imageFrame);

btnImage.onclick = () => {
  console.log(fileInput4.value);
  const img = document.createElement('img');
  img.src = fileInput4.value;
  img.className = 'img-fluid';
  imageFrame.appendChild(img);
};

// excercise 5

const exContainer5 = document.createElement('div');
exContainer5.className = exContainerClass;
app.appendChild(exContainer5);
const numModulo = document.createElement('input');
numModulo.id = 'modulo';
numModulo.className = 'form-control';
numModulo.placeholder = 'tapez numbre';
const labelModulo = document.createElement('label');
labelModulo.innerText =
  'Pour calculer modulo de votre nombre divisé par 5, tapez  numéro ci-dessous';
labelModulo.htmlFor = 'modulo';
labelModulo.className = 'form-label';
const btnModulo = document.createElement('button');
const resultModulo = document.createElement('p');
resultModulo.className = 'text-success';

btnModulo.innerText = `Calculer modulo`;
btnModulo.className = `${buttonActiveClass} d-flex `;
// onclick
btnModulo.onclick = () => {
  resultModulo.innerText = '';
  resultModulo.innerText = `Si l'on divise ${
    numModulo.value
  } par 5, le reste est  ${Number(numModulo.value) % 5}`;
};

exContainer5.appendChild(labelModulo);
exContainer5.appendChild(numModulo);
exContainer5.appendChild(btnModulo);
exContainer5.appendChild(resultModulo);

// excercise 6
const exContainer6 = document.createElement('div');
exContainer6.className = exContainerClass;
app.appendChild(exContainer6);
const age6 = document.createElement('input');
age6.id = 'age6';
age6.className = 'form-control';
age6.placeholder = 'tapez votre age';
const labelAge6 = document.createElement('label');
labelAge6.innerText =
  'Pour calculer  le nombre de jours vous avez vécus tapez votre age ci-dessous';
labelAge6.htmlFor = 'age6';
labelAge6.className = 'form-label';
const btnAge6 = document.createElement('button');
const resultAge6 = document.createElement('p');
resultAge6.className = 'text-success';

btnAge6.innerText = `Calculer `;
btnAge6.className = `${buttonActiveClass} d-flex `;
// onclick
btnAge6.onclick = () => {
  resultAge6.innerText = '';
  resultAge6.innerText = `Vous avez vécu  ${Number(age6.value) * 365} jours. `;
};

exContainer6.appendChild(labelAge6);
exContainer6.appendChild(age6);
exContainer6.appendChild(btnAge6);
exContainer6.appendChild(resultAge6);

// excercise 7

const exContainer7 = document.createElement('div');
const ageDiffTitle = document.createElement('h3');
ageDiffTitle.innerText = `Afficher le nombre de jours vécus et l'écart avec l'âge visé`;
exContainer7.className = exContainerClass;
app.appendChild(exContainer7);
const ageActuel = document.createElement('input');
ageActuel.type = 'number';
ageActuel.id = 'ageActuel';
ageActuel.className = 'form-control';
ageActuel.placeholder = 'tapez votre age actuel';

const labelActuel = document.createElement('label');
labelActuel.htmlFor = 'ageActuel';
labelActuel.innerHTML = 'Votre age actuel';

const ageVise = document.createElement('input');
ageVise.type = 'number';
ageVise.id = 'ageVise';
ageVise.className = 'form-control mt-1';
ageVise.placeholder = 'tapez votre age visé';
const labelVise = document.createElement('label');
labelVise.htmlFor = 'ageVise';
labelVise.innerHTML = 'Votre age vise';

const btnAge7 = document.createElement('button');
const resultAge7 = document.createElement('p');
resultAge7.className = 'text-success';

btnAge7.innerText = `Calculer `;
btnAge7.className = `${buttonActiveClass} d-flex `;
// onclick
btnAge7.onclick = () => {
  if (Number(ageVise.value) < Number(ageActuel.value)) {
    resultAge7.className = 'text-danger';
    return (resultAge7.innerText = `Erreur. Age vise est plus petit que age actuel`);
  }
  resultAge7.innerText = 'bg-danger';
  resultAge7.innerText = `Vous avez vécu ${
    Number(ageActuel.value) * 365
  } jours. Il y a encore ${
    Number(ageVise.value) * 365 - Number(ageActuel.value) * 365
  } jours avant vos ${Number(ageVise.value)} ans. `;
};

exContainer7.appendChild(ageDiffTitle);
exContainer7.appendChild(labelActuel);
exContainer7.appendChild(ageActuel);
exContainer7.appendChild(labelVise);
exContainer7.appendChild(ageVise);
exContainer7.appendChild(btnAge7);
exContainer7.appendChild(resultAge7);

// excercise 8

// const exContainer8 = document.createElement('div');
// const title8 = document.createElement('h3');
// exContainer8.className = exContainerClass;
// app.appendChild(exContainer8);
// const reponse = window.confirm('Vous etez content?');
// title8.innerText = `Vous etez: ${reponse ? '😂' : '😪'}`;
// exContainer8.appendChild(title8);

// excercise 9
const res9map = new Map([
  [true, '1=>un'],
  [false, 'il faut taper valeur entre 0 et 5'],
]);
const exContainer9 = document.createElement('div');
const title9 = document.createElement('h3');
title9.innerText = `Entrez nombre entre 0 et 5 `;
exContainer9.className = exContainerClass;
app.appendChild(exContainer9);
const nombre9 = document.createElement('input');
nombre9.type = 'number';
nombre9.id = 'nombre9';
nombre9.className = 'form-control';
nombre9.placeholder = 'entre 0 et 5';

const res9 = document.createElement('p');
res9.className = 'text-success';

const label9 = document.createElement('label');
label9.htmlFor = 'nombre9';
labelActuel.innerHTML = 'tapez vous un nombre entre 0 et 5';

const btn9 = document.createElement('button');
btn9.innerText = `Envoyer `;
btn9.className = `${buttonActiveClass} d-flex mt-1`;

const ex9reset = () => {};

btn9.onclick = () => {
  const val = Number(nombre9.value);
  res9.innerText = res9map.get(val >= 0 && val <= 5);
};

exContainer9.appendChild(title9);
exContainer9.appendChild(title9);
exContainer9.appendChild(nombre9);
exContainer9.appendChild(btn9);
exContainer9.appendChild(res9);

// excercise 10
const courses = ['Lait', 'Œufs', 'Pain', 'Tomates', 'Poulet'];

const exContainer10 = document.createElement('div');
const title10 = document.createElement('h3');
title10.innerText = `Votre liste de courses`;
exContainer10.className = exContainerClass;
exContainer10.appendChild(title10);
app.appendChild(exContainer10);

const coursesEl = document.createElement('ol');
coursesEl.className = 'list-group list-group-numbered';

const addCourse = document.createElement('input');
addCourse.id = 'coursInput';
addCourse.className = 'form-control';
const courseLabel = document.createElement('label');
courseLabel.htmlFor = 'coursInput';
courseLabel.className = 'form-label';
courseLabel.innerText = 'Veuillez vous ajouter un article?';
const btnCourse = document.createElement('button');
btnCourse.type = 'button';
btnCourse.className = buttonActiveClass;
btnCourse.innerText = 'Ajoutez';
const courseAlert = document.createElement('p');

for (const course of courses) {
  const item = document.createElement('li');
  item.innerText = course;
  item.className = 'list-group-item';
  coursesEl.appendChild(item);
}

exContainer10.appendChild(coursesEl);
exContainer10.appendChild(courseLabel);
exContainer10.appendChild(addCourse);
exContainer10.appendChild(btnCourse);

const courseAlarme = () => {
  courseAlert.innerText = 'Il faut taper les course';
  courseAlert.className = 'text-danger';
  exContainer10.appendChild(courseAlert);
};

btnCourse.onclick = () => {
  courseAlert.innerText = '';
  if (addCourse.value) {
    const item = document.createElement('li');
    item.innerText = addCourse.value;
    item.className = 'list-group-item';
    coursesEl.appendChild(item);
    addCourse.value = '';
  } else {
    courseAlarme();
  }
};

// excercise 11/12

const choixOutput = new Map([
  [true, 'Vous avez la chance'],
  [-1, 'trop petit'],
  [1, 'trop grand'],
  [-2, 'vous avez perdu, nouvel numero sera generé'],
]);

let magicNum = 0;
let tries = 0;
const gameOver = 3;

const deviner = () => {
  magicNum = Math.floor(Math.random() * 10);
  console.log(`deviner ${magicNum}`);
};
deviner();

const exContainer11 = document.createElement('div');
const title11 = document.createElement('h3');
title11.innerText = `Essayez deviner le nombre entre 0 et 10`;
exContainer11.className = exContainerClass;
exContainer11.appendChild(title11);
app.appendChild(exContainer11);

const choix10 = document.createElement('input');
choix10.id = 'choix10';
choix10.className = 'form-control';
const choix10Label = document.createElement('label');
choix10Label.htmlFor = 'choix10';
choix10.className = 'form-label';
choix10Label.innerText = 'Votre choix (0-10)?';
const btnChoix10 = document.createElement('button');
btnChoix10.type = 'button';
btnChoix10.className = buttonActiveClass;
btnChoix10.innerText = 'Tentez votre chance';
const choix10Alert = document.createElement('p');

const winAlert = (num) => {
  choix10Alert.innerText = choixOutput.get(num);
  tries++;
  console.log(`tries ${tries}`);
  if (tries === gameOver) {
    choix10Alert.innerText = choixOutput.get(-2);
    deviner();
    tries = 0;
  }
};

btnChoix10.addEventListener('click', () => {
  const userChoix = Number(choix10.value);
  userChoix - magicNum < 0 && winAlert(-1);
  userChoix - magicNum > 0 && winAlert(1);
  if (userChoix === magicNum) {
    winAlert(true);
    deviner();
  }
});

exContainer11.appendChild(choix10Label);
exContainer11.appendChild(choix10);
exContainer11.appendChild(choix10Alert);
exContainer11.appendChild(btnChoix10);

// excercise 14

var books = [
  {
    title: 'CSS: The Definitive Guide',
    author: 'Eric Meyer',
    image: 'https://covers.oreillystatic.com/images/0636920012726/lrg.jpg',
    type: 'css',
  },
  {
    title: 'CSS Development with CSS3',
    author: 'Zachary Kingston',
    image: 'https://covers.oreillystatic.com/images/0636920057970/lrg.jpg',
    type: 'css',
  },
  {
    title: "You Don't Know JS: Up & Going",
    author: 'Kyle Simpson',
    image: 'https://covers.oreillystatic.com/images/0636920039303/lrg.jpg',
    type: 'js',
  },
  {
    title: 'Programming JavaScript Applications',
    author: 'Eric Elliott',
    image: 'https://covers.oreillystatic.com/images/0636920033141/lrg.jpg',
    type: 'js',
  },
  {
    title: 'Modern JavaScript Develop and Design',
    author: 'Ullman Larry',
    image: 'https://learning.oreilly.com/library/cover/9780132905848/250w/',
    type: 'js',
  },
];

const exContainer14 = document.createElement('div');
const title14 = document.createElement('h3');
title14.innerText = `les livres de type CSS et JS`;
exContainer14.className = `${exContainerClass} `;
exContainer14.appendChild(title14);
app.appendChild(exContainer14);
const booksContainer = document.createElement('div');
booksContainer.className = 'container py-3 d-flex flex-wrap';

const btnBooksAll = document.createElement('button');
btnBooksAll.className = buttonActiveClass;
btnBooksAll.innerText = 'Afficher tous livres';

const btnCSS = document.createElement('button');
btnCSS.className = 'btn btn-success';
btnCSS.innerText = 'Filtrer par CSS';

const btnJS = document.createElement('button');
btnJS.className = 'btn btn-warning';
btnJS.innerText = 'Filtrer par JS';
exContainer14.appendChild(btnCSS);
exContainer14.appendChild(btnBooksAll);
exContainer14.appendChild(btnJS);
exContainer14.appendChild(booksContainer);

btnCSS.onclick = () => {
  filterBooks('css');
};

btnBooksAll.onclick = () => {
  createBooksList(books);
};
btnJS.onclick = () => {
  filterBooks('js');
};

function filterBooks(searchItem) {
  console.log(searchItem);
  for (const book of books) console.log(book.title);
  const livres = books.filter((book) => book.type === searchItem);
  createBooksList(livres);
}
function createBooksList(books) {
  booksContainer.innerHTML = '';
  for (const book of books) {
    createBook(book);
  }
}

function createBook(book) {
  const card = document.createElement('div');
  card.style.width = '18rem';
  card.className = 'card m-2';
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const cardImg = document.createElement('img');
  cardImg.className = 'card-img-top m-1';
  cardImg.src = book.image;
  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.innerText = book.title;
  const cardSubTitle = document.createElement('h5');
  cardSubTitle.className = 'card-subtitle mb-2 text-muted';
  cardSubTitle.innerText = book.author;

  card.appendChild(cardImg);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubTitle);

  booksContainer.appendChild(card);
}

createBooksList(books);
