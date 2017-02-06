var foo = function () {
  console.log('This function is associated with the global scope');
};

(function bar (input) {
  console.log('Immediately invoked function expresson named bar ("IFFE")');
  console.log('This is the input: ', input);
})();
