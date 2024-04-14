// ? TASK-1 : Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin. Meselen 4 neferde "
// ? voted:true " dursa return elesin 4.



// let voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];

// const resultVoted = voters.reduce((count, curr) => {
//   if (curr.voted === true) {
//     count++;
//   }

//   return count;
// }, 0);

// console.log(resultVoted);



// ! TASK-2 : Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:



// let wishlist = [
// { title: "Tesla Model S", price: 90000 },
// { title: "4 carat diamond ring", price: 45000 },
// { title: "Fancy hacky Sack", price: 5 },
// { title: "Gold fidgit spinner", price: 2000 },
// { title: "A second Tesla Model S", price: 90000 }
// ];

// const totalPrice=wishlist.reduce((sum,curr)=>{
//   sum+=curr.price
//   return sum
// },0)

// console.log(totalPrice);



// * TASK-3 : Daxil olunmuş stringdə ən uzun sözü tapan function yazin.



// let string = 'Web Development Tutorial';

// let arr=string.split(" ")

// let uzun = arr[0]

// const findLetter=(arr)=>{
//  for (let i = 0; i < arr.length; i++) {
//    if (arr[i].length > uzun.length) {
//     uzun = arr[i]
//    }
    
//  }
//  return uzun
// }
// console.log(findLetter(arr));



// ? TASK-4 : Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın.


let string = 'web development tutorial necesen ne var ne yox';

let arr = string.split(" ");

const firstLetter = (arr) => {
    
   for (let i = 0; i < arr.length; i++) {
      
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    
    
    return arr.join(" ");
  }
  
 
  console.log(firstLetter(arr)); 
  

// ! TASK-5 : Verilmish stringdən müəyyən sayda sözə kəsmək üçün JavaScript funksiyasını yazın.



// let string = 'Web Development Tutorial';
// let num = 2;

// let arr = string.split(" ");

// const sliceLetter=(arr, num)=> {
       
//     const sliceArr = arr.slice(0, num);
      
//     return sliceArr.join(" ");
//   }
  

//   console.log(sliceLetter(arr, num));

