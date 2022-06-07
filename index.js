function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function receivesAFunction(n) {
        console.log(n);
   }
}
  
function returnsAnAnonymousFunction() {
    return function (n) {
        console.log(n);
    }
}

