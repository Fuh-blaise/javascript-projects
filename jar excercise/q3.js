// printing the first 10 numbers in javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// printing the first 10 numbers in javascript using while loop
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// printing even numbers in an array
function printEvenNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
      }
    }
  }
  
  const numbers = [8, 17, 32, 78, 51, 91, 28];
  printEvenNumbers(numbers); // prints 8 32  78 24