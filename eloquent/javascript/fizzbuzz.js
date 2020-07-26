let root = document.getElementById('root');

let start = 1;
let stop = 100;

for (let i=1; i<stop+1; i++) {
  root.innerHTML += ('00' + i).slice(-3) + ': ';
  if (i % 3 === 0) {
    root.innerHTML += 'Fizz'
  }
  if (i % 5 === 0) {
    root.innerHTML += 'Buzz'
  }
  root.innerHTML += "<br>"
}
