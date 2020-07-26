let root = document.getElementById('root');
let size = 12;
for (let i=0; i<size; i++) {
  if ((i+1)%2) {
    root.innerHTML += "&nbsp;";
  }
  for (let j=0; j<size; j++) {
    root.innerHTML += j%2 ? "#" : "&nbsp;";
  }
  root.innerHTML += "<br>";
}
