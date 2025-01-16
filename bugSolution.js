function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, and non-object cases
  }
  return x.length; // Access 'length' property only if x is a valid object
}
//or
function foo(x) {
  return x?.length || 0 // optional chaining and nullish coalescing
}