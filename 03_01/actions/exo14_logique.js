'use strict';

export const filterBooks = (filter, books) => {
  const livres = books.filter((book) => book.type === filter);

  return livres;
};
