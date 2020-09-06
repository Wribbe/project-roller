let root = document.getElementById('root');

function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

let a = 10;
let b = 9;

let min_arrow = (a, b) => {
  return a < b ? a : b;
};

root.innerHTML +=  `minimum of ${a} and ${b} is ${min(a, b)}<br>`;
root.innerHTML +=  `minimum of ${a} and ${b} is ${min_arrow(a, b)}<br>`;
