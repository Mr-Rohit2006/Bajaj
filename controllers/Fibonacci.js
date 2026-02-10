function fibonacci(n){
    const result =[];
    let a = 0,b=1;
    for(let i=0;i<n;i++){
        result.push(a);
        let c = a+b;
        a=b;
        b=c;
    }
    return result;
}

module.exports = fibonacci;