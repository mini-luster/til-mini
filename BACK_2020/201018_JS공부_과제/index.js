

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



// 👉 숙제 1 --------------------------------------
function getAverage(student){
  let getAverage = student.name + "의 평균은 : " + (student.maths + student.english + student.society + student.science + student.korean ) / 5;
  // 템플릿 리터럴
  // let getAverage = `${student.name}의 평균은 ${(student.maths + student.english + student.society + student.science + student.korean ) / 5}`;

  console.log(getAverage);

};



let i = 0;
while(student[i] !== undefined) {
  getAverage(student[i])
  i += 1;
};




// 👉 숙제 1 끗  -------------------------------------- 
// 👉 숙제 2 --------------------------------------

// console.log( "수학의 평균은 : " + getSubjectAvg(student, "math"));
// console.log( "영어의 평균은 : " + getSubjectAvg(student, "english"));
// console.log( "사회의 평균은 : " + getSubjectAvg(student, "society"));
// console.log( "과학의 평균은 : " + getSubjectAvg(student, "science"));
// console.log( "국어의 평균은 : " + getSubjectAvg(student, "korean"));


let subjectMaths = (student[0].maths + student[1].maths + student[2].maths + student[3].maths + student[4].maths + student[5].maths) / 5;
let subjectEn = (student[0].english + student[1].english + student[2].english + student[3].english + student[4].english + student[5].english) / 5;
let subjectSociety = (student[0].society + student[1].society + student[2].society + student[3].society + student[4].society + student[5].society) / 5;
let subjectScience = (student[0].science + student[1].science + student[2].science + student[3].science + student[4].science + student[5].science) / 5;
let subjectKorean = (student[0].korean + student[1].korean + student[2].korean + student[3].korean + student[4].korean + student[5].korean)/5;

console.log(Math.max(subjectMaths, subjectEn, subjectSociety, subjectScience, subjectKorean), Math.min(subjectMaths, subjectEn, subjectSociety, subjectScience, subjectKorean))

// function getSubjectAvg(students, key) {
//   let totalScore = 0;
//   let cnt = 0;
//   while(students[cnt] !== undefined) {
//     totalScore += students[cnt][key];
//   }
//   cnt += 1;
//   return totalScore / cnt;
// }



 // 👉 숙제 2 끗  --------------------------------------
// 👉 숙제 3 -------------------------------------- 시간부족으로 실패 ...ㅠㅠ

// function subjectAverage(student){
//   let subjectAverage = (student[0].maths + student[1].maths + student[2].maths + student[3].maths + student[4].maths + student[5].maths) / 5;

//   console.log(subjectAverage);

// };


// while(student[i] !== undefined) {
//   subjectAverage(student[i])
//   i += 1;
// };


// 👉 숙제 2 끗  --------------------------------------
// 👉 숙제 3 --------------------------------------

// let i = 0;
// while(student[i] !== undefined) {
//   subjectAverage(student[i])
//   i += 1;
// };


// let subject = [
  
//   {
//     name : "수학",
//     konan : 92,
//     casper : 87,
//     eden : 100,
//     hamCee : 100,
//     idea : 100,
//     van : 92
//   },

//   {
//     name : "영어",
//     konan : 92,
//     casper : 75,
//     eden : 98,
//     hamCee : 100,
//     idea : 98,
//     van : 74
//   },

//   {
//     name : "사회",
//     konan : 78,
//     casper : 100,
//     eden : 99,
//     hamCee : 87,
//     idea : 22,
//     van : 32
//   },

//   {
//     name : "과학",
//     konan : 72,
//     casper : 72,
//     eden : 22,
//     hamCee : 56,
//     idea : 0,
//     van : 100
//   },  
  
//   {
//     name : "국어",
//     konan : 88,
//     casper : 98,
//     eden : 0,
//     hamCee : 33,
//     idea : 62,
//     van : 100
//   },

// ]; 


// function sbjAverage(subject){
//   let sbjAverage = ( subject[0].konan + subject[0].casper + subject[0].eden + subject[0].hamCee + subject[0].idea + subject[0].van ) / 5;
  
//   console.log(sbjAverage);
// };



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


// console.log(student);

// for(let i = 0; i < student.length ; i ++) {
//   getAverage(student[i])
// }T



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



// ];

// function subjectAverage(subject){
//   let subjectAverage = ( subject[0] ) / 5;

//   console.log(student);

// };
