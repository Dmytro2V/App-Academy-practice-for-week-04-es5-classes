// Your code here
Array.prototype.isEqual = function(arr) {
  // compare arrows by element
  return this.reduce((isTrue, el, i) => 
        isTrue && el === arr[i]
        , true)
}
