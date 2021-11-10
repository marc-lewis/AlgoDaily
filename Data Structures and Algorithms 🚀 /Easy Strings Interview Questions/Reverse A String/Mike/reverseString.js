console.log("ok, you got this.");

const string = "Steven Universe";


//My First version


// const reverseString = string => {
//   console.log(`string to reverse = ${string}`);

//   const array = Array.from(string);
//   const length = array.length;
//   const reveresedArray = [];
  
//   for (let i = 0; i < length; ++i) {
//     let element = array.pop()
//     reveresedArray.push(element)
//   }
  
//   const reveresedString = reveresedArray.join('')

//   return reveresedString
  
// }


// console.log(`reversed string = ${reverseString(string)}`);


// // Improved Version
const reverseString2 = string => {
  console.log(`string to reverse = ${string}`);

  const array = Array.from(string);
  const length = array.length;
  let newString ='';
  
  for (let i = 0; i < length; ++i) {
    let element = array.pop()
    newString = newString + element;
  }

  return newString;
  
}

// console.log(`reversed string = ${reverseString2(string)}`);

// Two Pointer Technique
const reverseString3 = string => {
  console.log(`string to reverse = ${string}`);

  let stringArray = string.split("");
  let start = 0;
  let end = string.length - 1;

  while (start <= end) {
    const temp = stringArray[start];
    stringArray[start] = stringArray[end];
    stringArray[end] = temp;
    start++;
    end--;
  }
}

// console.log(`reversed string = ${reverseString3(string)}`);