function isPrime(n){
    if(n<=1) return false;
    for(let i=2;i*i <=n;i++){
        if(n%i===0) return false;

    }
    return true;
}
function Prime(arr) {
  let ans = [];
  for(let n of arr){
    if(isPrime(n)){
      ans.push(n);
    }
  }
  return ans;
}

module.exports = Prime;