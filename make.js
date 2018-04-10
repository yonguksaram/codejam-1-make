function sum(a, b) {
    return a + b;
}

function make(a) {

  var currentInt = 0;
  var currentArr = [a]
  function f(...args) {

    for(var i=0;i<args.length;i++){
      if(typeof args[i] == "function"){
        currentInt = currentArr.reduce(args[i]);
        return f
    }
      currentArr.push(args[i]);
    }
    return f;
  }

  f.valueOf = function() {
      return currentInt;
  };

  return f;
}

// function add(n) {
//   var next = add.bind(n += this | 0);
//   next.valueOf = function() { return n; };
//   return next;
// }
