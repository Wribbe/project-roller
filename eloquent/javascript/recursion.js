let root = document.getElementById('root');

let even = (number) => {
  console.log(number);
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  }
  return even(number-2);
};

for (number of [0,1,2,3,4,5,6,7,8,9,10]) {
  root.innerHTML += `${number} is ${even(number) ? 'Even' : 'Odd'}<br>`
}
