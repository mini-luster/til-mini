// function gugudan(dan) {
//   let gugudanStr = "";
//   for (let i = 1; i < 10; i++) {
//     // i의 첫 시작은 1이며 10보다 작을때 안보이게 된다.
//     // ++ 1을 더해줘 + 1과 똑같아
//     // $ 변수로 표기하겠다 선언하는 것
//     gugudanStr += `${dan} x ${i}는 ${dan * i} \n`;
//   }

//   console.log(gugudanStr);

//   return gugudan;
// }

// gugudan(8);

// ===============================================
// 성준이는 수학이 90점, 국어가 75점, 영어가 100점, 과학이 32점 사회가 18점이다.
// (1) 시험 성적 평균을 구하시오.
// (2) 성준이가 최저점수 과목과 최고점수 과목을 제외한 평균을 구하시오.
// (3) 이번 평균성적을 바탕으로 다음 시험에 13%점수가 향상되었다고 했을 때 , 평균점수를 구하시오/
// ===============================================

// (1)
// function getAverage(math, koerea, english, science, society) {
//   let averageScore = 0;
//   let math = 90;
//   let koerea = 75;
//   let english = 100;
//   let science = 32;
//   let society = 18;

//   for(){
//     averageScore = `math + koerea + english + science + society `
//     console.log(averageScore);
//   }
// }
// 실패!

// (2)

// function getAverage(math, korean, english, science, society) {
//   //   let getAverage = (math + korean + society) / 3;
// const higerScore
//   console.log(getAverage);
// }

// getAverage(90, 70, 100, 10, 90);
// getAverage(90, 70, 100, 10, 0);
// 실패!

// 최저랑 최고를 판별하는 방이 뭐야
// 로지컬트레이닝, 알고리즘 사고

// (3)
function getAverage(math, korean, english, science, society) {
  let getAverage = (math + korean + english + science + society) / 5;

  getAverage * 1.13;

  console.log(getAverage * 1.13);
}

getAverage(90, 70, 100, 20, 90);

// 너무 어렵다!!!

// 숙제 
// height 는 무조건 m
//  예를들어 173m  1.73 
//  if 비엠아이 20이면 비만이다. (힌트)
function checkFatHealth(weight, height ){
    const bmiScore = height / 
}