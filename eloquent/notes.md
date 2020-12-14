# Notes for eloquent JavaScript

# Chapter 5 - Higher-Order Functions

## Abstraction
higher -> more abstract level.


## Abstracting Repetition
Possible to abstract `doing things N times` by writing a function.
```
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels); -> List with Unit x.
```

## Higher-Order Functions
Functions that work on other functions -> higher-order functions. (Comes from
mathematics). Make is possible to abstract over _actions_.
Can _create new functions_, _modify other functions_ and _provide new control
flows_ by using higher order functions.

`forEach` is a built-in method that provides a for/of-ish loop for arrays.

```
["A", "B"].forEach(l => console.log(l));
// -> A
// -> B
```

## Script Data Set
Higher-order shines when used in data-processing. 
(Got Unicode-list it from the homepage)


## Filtering Arrays
Push the elements that pass to a new list, don't delete from the old one, the
function is _pure_ (no side-effects I guess?, tvek). `filter` is also a
built-in for the array object.


## Transforming with map
`map` can be used in order to transform an array by applying a method to each
element and creating a new array. Also a standard built-in.


## Summarizing with reduce
Calculate a single value from an array -> `reduce` or `fold`. 
Usually takes a sum-function and a starting-value apart from the array in
question.

```
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1,2,3,4], (a,b) => a + b, 0));
// -> 10
```

`destructuring` the same as `unpacking` in python?


## Composability
High-order functions start to shine when composing enters the picture.
Following example finds average year of origin for live/dead scripts.

```
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// -> 1188
console.log(Math.round(average(
  SCRIPTS.filter(s => s.dead).map(s => s.year))))
// -> 188
```

like a `pipe-line`. More readable, but a single summarizing loop would do less
work and would be faster for large arrays.


## Strings and Character Codes
JavaScript uses `UTF-16` to encode code-points, not a good idea. All length and
bracket-accessing regards the string as code units, even if there are
multi-code-characters present. `codePointAt(x)` returns the actual
character-code, while `[x]` would only return the fist half of a two-point
character.

Possible to use `Array Loops` in order to get each character in a string
correctly:

```
for (let char of unicodePair) {
  console.log(char); // Prints the correct characters.
}
```

## Recognizing Text
=_=
