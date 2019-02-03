// Normal functions statements.
function sayHello() {
  console.log('Hello world!');
}

sayHello();

// Function expressions.
var sayBye = function() {
  console.log('Bye world!');
}

sayBye();

// Function inside function.
function callFun(fun) {
  fun();
}

callFun(sayBye);
