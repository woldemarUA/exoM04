'use strict';

const jourAn = 365;

export const ageJour2 = (arr) => {
  let [curr, vise] = arr;
  const viseAns = vise;
  curr = Number(curr) * jourAn;
  vise = Number(vise) * jourAn;
  console.log(curr, vise);
  const response = curr && vise && vise > curr;
  return response
    ? `Vous avez veçu ${curr} jours. Il y a encore ${
        vise - curr
      } jours avant vos ${viseAns} ans.`
    : response;
};

export const ageJour = (arr) => {
  let [curr] = arr;

  curr *= jourAn;

  return (curr &&= `Vous avez vécu ${curr} jours.`);
};
