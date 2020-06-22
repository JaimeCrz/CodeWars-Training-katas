

function capitalize(s) {
  return [s.split('').map((item, idx) => { return idx % 2 === 0 ? item.toUpperCase() : item }).join(''),
  s.split('').map((item, idx) => { return idx % 2 === 0 ? item : item.toUpperCase() }).join('')];
};