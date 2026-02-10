function hcf1(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function hcf(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = hcf1(result, arr[i]);
    if (result === 1) return 1;
  }
  return result;
}

module.exports = hcf;