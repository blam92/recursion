// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

Object.prototype.toString = function() {
  var structure = "{";
  var keys = Object.keys(this);
  for(var i = 0; i < keys.length; i++) {

    if(!(typeof(this[keys[i]]) === 'function' || this[keys[i]] === undefined)) {
  	  structure +=  '"' + keys[i] + '" : ' + this[keys[i]].toString();

  	  if(!(i + 1 === keys.length)) {
  		structure += ",";
  	  }
  	}
  }
  structure += "}";

  return structure;
}

Array.prototype.toString = function() {
  var structure = "[";
  for(var i = 0; i < this.length; i++) {
  	structure += this[i].toString();

  	if(!(i + 1 === this.length)) {
  		structure += ",";
  	}
  }
  structure += "]";

  return structure;
}

String.prototype.toString = function() {
	return '"' + this + '"';
}




var stringifyJSON = function(obj) {
  // your code goes here
  //whole element stringified (bool, int, obj, array, string etc...) 'false', '3', '{}', '[]', '"string"'
  return obj.toString();
};

var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

// stringifiableObjects.forEach(function(item) {
//   	console.log(stringifyJSON(item));
//   	console.log(JSON.stringify(item));
// });



var edgecase =   {
    'functions': function() {},
    'undefined': undefined
}
console.log(JSON.stringify(edgecase));
console.log(stringifyJSON(edgecase));

