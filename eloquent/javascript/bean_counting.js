let root = document.getElementById('root');

function countChar(string, match) {
  let total = 0;
  for (c of string) {
    if (c === match) {
      total++;
    }
  }
  return total;
}

let countBs = (string) => { return countChar(string, "B") };
let string = "This is a sting with B b b B B b";
root.innerHTML = `Number of B's: ${countBs(string)}`;
