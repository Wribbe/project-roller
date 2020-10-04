let root = document.getElementById('root');


function range(from=0, to, step=1) {
  array = [];

  if (step > 0) {
    for (i=from; i<to; i += step) {
      array.push(i);
    }
  } else {
    for (i=from; i>to; i += step) {
      array.push(i);
    }
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

root.innerHTML += `${range(0,10)}</br>`;
root.innerHTML += `${sum(range(0,10))}</br>`;
root.innerHTML += `${range(0,10,4)}</br>`;
root.innerHTML += `${range(5,2,-2)}</br>`;
