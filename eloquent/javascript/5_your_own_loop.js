root = document.getElementById('root');

function our_loop(value, test, update, body){
  if (!test(value)) {
    return value;
  }
  body(value);
  return our_loop(update(value), test, update, body);
}

our_loop(1,
  (x) => x < 5,
  (x) => x+1,
  (x) => root.innerHTML += `<br>${x}`
);

//function test(value) {
//  return value < 5;
//}
//
//function update(value) {
//  return value + 1;
//}
//
//function body(value) {
//  console.log(value);
//}
//
//our_loop(1, test, update, body);
