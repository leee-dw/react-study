function func2(first, ...rest) {
  return rest.reduce((p, c) => p += c);
}


console.log(func2(1, 2, 3, 4, 5, 6))