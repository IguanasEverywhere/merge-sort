function merge(arr1, arr2) {
  // type your code here
  let mergedArr = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      mergedArr.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else {
      mergedArr.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }
  mergedArr = mergedArr.concat(arr1);
  mergedArr = mergedArr.concat(arr2);
  return mergedArr;
}

function mergeSort(arr) {
  // type your code here
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2)

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));

  return merge(left, right)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
