let root = document.getElementById('root');


function range(from=0, to) {
  array = [];
  for (i=from; i<to; i++) {
    array.push(i);
  }
  return array;
};


function sum(list) {
  sum = 0;
  for (n of list) {
    sum += n; 
  }
  return sum;
}

root.innerHTML = `${sum(range(0,10))}`;
