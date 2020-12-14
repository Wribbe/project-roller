root = document.getElementById('root');

function our_loop(value, test, update, body){
  if (!test(value)) {
    return value;
  }
  body(value);
  value = update(value);
  return our_loop(value, test, update, body);
}

function test(value) {
  return value < 5;
}

function update(value) {
  return value + 1;
}

function body(value) {
  console.log(value);
}

our_loop(1, test, update, body);
