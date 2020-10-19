
// const konan = {
//   math : 92,
//   English : 92,
//   society : 78,
//   science : 72,
//  Korean : 88,
// };

// const casper = {
//   math : 87,
//   English : 75,
//   society : 100,
//   science : 72,
//   Korean : 98,
// };

// const eden = {
//   math : 100,
//   English : 98,
//   society : 99,
//   science : 22,
//   Korean : 0,
// };

// const hamCee = {
//   math : 100,
//   English : 100,
//   society : 87,
//   science : 56,
//   Korean : 33,
// };

// const idea = {
//   math : 100,
//   English : 98,
//   society : 22,
//   science : 0,
//   Korean : 62,
// };

// const van = {
//   name : "반",
//   math : 92,
//   English : 74,
//   society : 32,
//   science : 100,
//   Korean : 100,
// };

// let student = (" 코난 " + " 캐스퍼 " + " 이든 " + " 햄씨 " + " 이데 " + " 반 ");

// console.log(student)


// function getAverage(math, English , society , science , Korean){
//   let getAverage = (  math + English + society + science + Korean) / 5;

//   console.log(getAverage);
// };

// getAverage(92,92,78,72,88); // 코난 
// getAverage(87,75,100,72,87) // 캐스퍼
// getAverage(100,98,99,22,0) // 이든 
// getAverage(100,100,87,56,22) // 햄씨 
// getAverage(100,98,22,0,62) // 이데
// getAverage(92,74,32,100,100); // 반 


// ㄷㅏ시해보자 

// let subject = {math,english,society,science,korean};

// let getAverage = [

// { name : "코난",
//   subject : [ 100, 90, 80, 70, 60 ]},

// { name : "캐스퍼",
// subject : [ 100, 90, 80, 70, 60 ]},

// { name : "이든",
// subject : [ 100, 90, 80, 70, 60 ]},

// { name : "햄씨",
// subject : [ 100, 90, 80, 70, 60 ]},


// { name : "이데",
// subject : [ 100, 90, 80, 70, 60 ]},


// { name : "반",
// subject : [ 100, 90, 80, 70, 60 ]},

// ];


// 

let student = [
  { name : "코난",
    maths : 92,
    english : 92,
    society : 78,
    science : 72,
   korean : 88,
  },
  
  { name : "캐스퍼",
    maths : 87,
    english : 75,
    society : 100,
    science : 72,
    korean : 98,
  },

  { name : "이든",
    maths : 100,
    english : 98,
    society : 99,
    science : 22,
    korean : 0,
  },
  
  { name : "햄씨",
    maths : 100,
    english : 100,
    society : 87,
    science : 56,
    korean : 33,
  },

  {
    name : "이데",
    maths : 100,
    english : 98,
    society : 22,
    science : 0,
    korean : 62,
  },


  {
    name : "반",
    maths : 92,
    english : 74,
    society : 32,
    science : 100,
    korean : 100,
  }
];


function getAverage(student){
  let getAverage = student.name + "의 평균은 : " + (student.maths + student.english + student.society + student.science + student.korean ) / 5;

  console.log(getAverage);

};



let i = 0;
while(student[i] !== undefined) {
  getAverage(student[i])
  i += 1;
};

// console.log(student);

// for(let i = 0; i < student.length ; i ++) {
//   getAverage(student[i])
// }T

// TODO: 공부하세요
// 자바스크립트 객체
// 자바스크립트 프로토타입

// console.log(Array.prototype);



// student.map(st => getAverage(st))

// let test = [
//   {
//     name : "이든",
//     age : 94
//   },

//   {
//     name : "반",
//     age : 94
//   },
// ]

// console.log(test);
