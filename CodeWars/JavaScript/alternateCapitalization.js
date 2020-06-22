// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

function capitalize(s) {
  return [s.split('').map((item, idx) => { return idx % 2 === 0 ? item.toUpperCase() : item }).join(''),
  s.split('').map((item, idx) => { return idx % 2 === 0 ? item : item.toUpperCase() }).join('')];
};

//comment: a serie of usage for split methode