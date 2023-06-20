
// // finding the largest of two numbers
// function findLargestNumber(n1, n2) {
//   if (n1 > n2) {
//     return n1;
//   } else {
//     return n2;
//   }
// }
// const a = 20;
// const b = 45;
// const largestNumber = findLargestNumber(a, b);
// console.log(largestNumber); // prints 20


// Finding the largest of three numbers using while loop
function findLargestNumber(n1, n2, n3) {
    let largestNum = n1;
    let i = 0;
    while (i < 2) {
      if (n2 > largestNum) {
        largestNum = n2;
      }
      if (n3 > largestNum) {
        largestNum = n3;
      }
      i++;
    }
    return largestNum;
  }
  
  const a = 15;
  const b = 35;
  const c = 7;
  const largestNumber = findLargestNumber(a, b, c);
  console.log(largestNumber); // prints 35