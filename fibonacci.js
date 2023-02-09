function fib(n){ 
   
    if(parseInt(n) < 2){
        return parseInt(n)
    }else{
    return fib(n-1) + fib(n-2)
    }

}

console.log(fib(4))