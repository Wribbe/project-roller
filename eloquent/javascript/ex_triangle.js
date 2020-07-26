let root = document.getElementById('root');
for (let counter = 1; counter < 8; counter++) {
  for (let hash = 0; hash < counter; hash++) {
    root.innerHTML += "#";
  }
  root.innerHTML += "<br>";
}
