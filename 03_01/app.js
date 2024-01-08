'use strict';
import { divContainer } from './components/button.js';
import { modal } from './exos/exo8.js';
import { exo1 } from './exos/exo1.js';
import { exo2 } from './exos/exo2.js';
import { exo3 } from './exos/exo3.js';
import { exo4 } from './exos/exo4.js';
import { exo5 } from './exos/exo5.js';
import { exo6 } from './exos/exo6.js';
import { exo7 } from './exos/exo7.js';
import { exo9 } from './exos/exo9.js';
import { exo10 } from './exos/exo10.js';
import { exo11 } from './exos/exo11_12.js';
import { exo14 } from './exos/exo14.js';

const buttonActiveClass = 'btn btn-primary my-1 py-2 px-5';
const exContainerClass = 'my-3 border p-2';
const body = document.querySelector('body');
const app = document.getElementById('app');

const range1 = divContainer('row-1', 'row my-2');
app.appendChild(range1);

const range2 = divContainer('row-2', 'row my-2');
app.appendChild(range2);

const range3 = divContainer('row-3', 'row my-2');
app.appendChild(range3);

// ****** ROW 1 ***********//
// excercise 1
range1.appendChild(exo1('exo1', 'col-3', 'EXO 1: Multiplier 2 numeros'));

// excercise 2
range1.appendChild(
  exo2('exo-2', 'col-3', 'EXO 2:  Afficher ou cacher le paragraphe ')
);

// excercise 3
range1.appendChild(exo3('exo-3', 'col-3', 'EXO 3:   '));

// excercise 4

range1.appendChild(exo4('exo-4', 'col-2', 'EXO 4'));

// ****** ROW 2 ***********//
// excercise 5
range2.appendChild(exo5('exo-5', 'col-3', 'EXO 5'));

// excercise 6

range2.appendChild(exo6('exo-6', 'col-3', 'EXO 6'));
// excercise 7
range2.appendChild(exo7('exo-7', 'col-3', 'EXO 7'));

range2.appendChild(modal('monmodal'));

// excercise 8

// const exContainer8 = document.createElement('div');
// const title8 = document.createElement('h3');
// exContainer8.className = exContainerClass;
// app.appendChild(exContainer8);
// const reponse = window.confirm('Vous etez content?');
// title8.innerText = `Vous etez: ${reponse ? '😂' : '😪'}`;
// exContainer8.appendChild(title8);

// excercise 9
range2.appendChild(exo9('exo-9', 'col-3', 'EXO 9'));
// excercise 10
const courses = ['Lait', 'Œufs', 'Pain', 'Tomates', 'Poulet'];

range2.appendChild(
  exo10('exo10', 'col-3', 'EXO 10 : On fait les courses', true, courses)
);

// excercise 11/12
range2.appendChild(exo11('exo-10', 'col-3', 'EXO 11/12: deviner le nombre '));

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
range3.appendChild(exo14('exo14', 'col-12', 'EXO 14 : Librarie', true, books));
