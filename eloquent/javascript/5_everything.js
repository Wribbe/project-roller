let root = document.getElementById("root");

function everything_loop(array, compare) {
  for (let i=0; i<array.length; i++) {
    if (!compare(array[i])) {
      return false;
    }
  }
  return true;
}

function everything_some(array, compare) {
  return(!array.some(i => !compare(i)));
}

let array = [1,2,3,4,5];
root.innerHTML += `<pre><code>let array = [${array}];</code></pre>`;

root.innerHTML += `loop: v < 10: ${everything_loop(array, (v) => v < 10)}<br>`;
root.innerHTML += `loop: v < 5: ${everything_loop(array, (v) => v < 5)}<br>`;
root.innerHTML += `some: v < 10: ${everything_some(array, (v) => v < 10)}<br>`;
root.innerHTML += `some: v < 5: ${everything_some(array, (v) => v < 5)}<br>`;
