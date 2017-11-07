// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var body = document.body;
  var array = [];
  var searchClass = function(element, searchedClass) {
    if(element.classList && element.classList.contains(searchedClass)) {
    	array.push(element);
    }

    var elementChilds = element.childNodes;
    for(var i = 0; i < elementChilds.length; i++) {
      searchClass(elementChilds[i], searchedClass);
    }
  }

  searchClass(body, className);

  return array;
};
