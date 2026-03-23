Array methods were introduced to make working with data cleaner, safer, and more readable compared to traditional for loops.

Earlier, we used loops to:
- Iterate data
- Modify values
- Create new arrays

But loops are verbose and can reduce readability.

Important Rule:
- map, filter, reduce, slice, find do NOT modify the original array.
- splice DOES modify the original array.

When to Use Each Method:

forEach:
- Used only for looping
- Does not return a new array
- Used for side effects (logging, DOM updates)

map:
- Transforms each element
- Returns a new array

filter:
- Selects elements based on condition
- Returns a new array

find:
- Returns first matching element
- Returns a single value

reduce:
- Reduces array to a single value
- Used for totals, counts, aggregations

slice:
- Extracts part of array
- Does not modify original

splice:
- Adds or removes elements
- Modifies original array
- it is used to add, remove, or replace elements in an array (changes original array).

Modern JavaScript development prefers array methods over traditional loops for readability and maintainability.