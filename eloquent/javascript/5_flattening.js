let root = document.getElementById('root');
let array = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
];
root.innerHTML += "Initial array of arrays:<br>";
let str = ""
str += "[<br>";
array.forEach(outer => {
  str += '  [';
  outer.forEach(inner => {
    str += `${inner},`;
  });
  str = str.slice(0, -1); // Remove last ','
  str += '],<br>';
});
str = str.slice(0, -5); // Remove last '<br>,'
str += "<br>]"
root.innerHTML += `<code><pre>${str}</pro></code>`;

root.innerHTML += "<br>"
root.innerHTML += `result: ${flatten(array)}.`

function flatten(array) {
  return array.reduce((l1, l2) => l1.concat(l2));
}
