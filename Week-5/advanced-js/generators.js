function* generateSymbol(arr) {
  for (const str of arr) {
    yield Symbol(str);
  }
}

const inputArray = ['hello', 'world', 'test'];
const iterator = generateSymbol(inputArray);

for (const symbol of iterator) {
  console.log(symbol);
}
