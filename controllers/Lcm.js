function gcd(a,b) {
  if (b === 0) return a;
  return gcd(b,a%b);
}
function lcm(arr) {
  let result = arr[0];
  for (let i=1;i<arr.length;i++) {
    result = (result * arr[i])/gcd(result,arr[i]);
  }
  return result;
}

module.exports = lcm;