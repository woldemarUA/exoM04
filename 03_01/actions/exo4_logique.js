'use strict';

export const placeImage = (arr) => {
  const [value] = arr;
  const img_className = 'card-img-top m-1';
  const img_alt = 'Votre Image SVP';
  const imageUrlRegex = /\.(jpeg|jpg|gif|png|bmp|svg)$/i;
  const img = `<img src="${value}" class="${img_className}" alt="${img_alt}" >`;
  let isImage = imageUrlRegex.test(value);

  return isImage ? img : isImage;
};
