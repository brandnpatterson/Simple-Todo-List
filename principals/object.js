var variable = 'Hello World';
var variableTwo = 2;
var var3;

var array = [
  'one',
  2,
  true
];

var functionName = function () {
  console.log('This function has the name of "functionName"');
  console.log('Functions are objects that take actions when invoked');
};

var object = {
  varName: 'Hello World',
  varName2: 2,
  emptyVar: '',

  stringArray: [
    'one',
    'two',
    'three'
  ],

  numberArray: [
    1,
    22,
    300
  ],

  multiArray: [
    1,
    2,
    'three',
    false
  ],

  booleanArray: [
    true,
    false,
    true
  ],

  truthyArray: [
    true,
    '0',
    'string',
    [],
    {}
  ],

  falsyArray: [
    false,
    0,
    '',
    null,
    undefined,
    NaN
  ],

  method: function (input) {
    console.log('This is a function');
    console.log('Since it is on an object, it\'s referred to as a method');
    console.log('This is the input: ', input);
  }
};
