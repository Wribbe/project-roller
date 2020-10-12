let root = document.getElementById('root');

function arrayToList(array) {
  let list = {};
  let list_part = list;
  for (n of array) {
    if (list.hasOwnProperty('rest')) {
      list_part['rest'] = {};
      list_part = list_part['rest']
    }
    list_part['value'] = n;
    list_part['rest'] = null;
  }
  return list;
};

let a = [1,2,3,4];

a_obj = arrayToList(a);

a_obj_temp = a_obj;
while (true) {
  root.innerHTML += a_obj_temp.value + "<br>";
  if (a_obj_temp.rest === null) {
    break;
  }
  a_obj_temp = a_obj_temp.rest;
}
