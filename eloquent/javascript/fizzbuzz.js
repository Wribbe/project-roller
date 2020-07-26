let root = document.getElementById('root');

let start = 1;
let stop = 100;

for (let i=1; i<stop+1; i++) {

  let str = "";
  if (i % 3 === 0) {
    str += "Fizz";
  }
  if (i % 5 === 0) {
    str += "Buzz";
  }

  if (str === "") {
    root.innerHTML += ('00' + i).slice(-3);
  } else {
    root.innerHTML += str;
  }

  root.innerHTML += "<br>";
}
