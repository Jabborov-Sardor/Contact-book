let numbers = [1, 3, 5, 9];
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray(numbers));
