var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      var itemOne = arr.shift();
      return itemOne;
  },

  // returns the last element of an array
  last: function (arr) {
    var itemN = arr.pop();
    return itemN;
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr,n) {
    return arr.indexOf(n);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr,n) {
    return arr.lastIndexOf(n);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var falsey = [false,0,'',null,NaN,undefined];
    for (var i=arr.length-1; i>=0;i--) {
      if (falsey.includes(arr[i])) {
        arr.splice(i,1);
      }
    }
    return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr,i,j) {
    return arr.slice(i,j)
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr,i=1){
    return arr.splice(i,arr.length);
  },


  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, i=1) {
    return arr.slice(0,arr.length-i);
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
