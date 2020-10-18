
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
//   math : 92,
//   English : 74,
//   society : 32,
//   science : 100,
//   Korean : 100,
// };

let student = (" 코난 " + " 캐스퍼 " + " 이든 " + " 햄씨 " + " 이데 " + " 반 ");

console.log(student)


function getAverage(math, English , society , science , Korean){
  let getAverage = (  math + English + society + science + Korean) / 5;

  console.log(getAverage);
};

getAverage(92,92,78,72,88); // 코난 
getAverage(87,75,100,72,87) // 캐스퍼
getAverage(100,98,99,22,0) // 이든 
getAverage(100,100,87,56,22) // 햄씨 
getAverage(100,98,22,0,62) // 이데
getAverage(92,74,32,100,100); // 반 


