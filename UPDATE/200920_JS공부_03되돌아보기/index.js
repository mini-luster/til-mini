// ===============================================
// 성준이는 수학이 90점, 국어가 75점, 영어가 100점, 과학이 32점 사회가 18점이다.

// (1) 시험 성적 평균을 구하시오.
// (2) 성준이가 최저점수 과목과 최고점수 과목을 제외한 평균을 구하시오.
// (3) 이번 평균성적을 바탕으로 다음 시험에 13%점수가 향상되었다고 했을 때 , 평균점수를 구하시오

// ===============================================

// (1) 시험 성적 평균을 구하시오.
function getAverage_A(math, Korean, English, science, society) {
  let getAverage_A = (math + Korean + English + science + society) / 5;

  console.log(getAverage_A);
  //   document.write(getAverage_A);
}

getAverage_A(90, 75, 100, 32, 18);

// ===============================================
// (2) 성준이가 최저점수 과목과 최고점수 과목을 제외한 평균을 구하시오.
function getAverage_B(math, Korean, English, science, society) {
  let getAverage_B = (math + Korean + science) / 3;

  console.log(getAverage_B);
  //   document.write(getAverage_B);
}

getAverage_B(90, 75, 100, 32, 18);

// ===============================================
// ===============================================
// (2-1) 성준이가 최저점수 과목과 최고점수 과목을 제외한 평균을 구하시오.

// math = prompt("당신의 수학점수는?");
// Korean = prompt("당신의 국어점수는?");
// English = prompt("당신의 영어점수는?");
// science = prompt("당신의 과학점수는?");
// society = prompt("당신의 사회점수?");

// let getAverage_D = [90, 75, 100, 32, 18];
// let max = Math.max.apply(null, getAverage_D);
// let min = Math.min.apply(null, getAverage_D);

// console.log(getAverage_D);

function getAverage_D(math, korean, english, science, society) {
  //   let getAverage = (math + korean + society) / 3;
const higerScore
    let max = Math.max.apply(null, getAverage_D);

  console.log(max);
}

getAverage_D(90, 70, 100, 10, 90);
getAverage_D(90, 70, 100, 10, 0);


// ===============================================

// (3) 이번 평균성적을 바탕으로 다음 시험에 13%점수가 향상되었다고 했을 때 , 평균점수를 구하시오

function getAverage_C(math, Korean, English, science, society) {
  let getAverage_C = (math + Korean + English + science + society) / 5;

  getAverage_C * 1.13;

  console.log(getAverage_C * 1.13);
  //   document.write(getAverage_C);
}

getAverage_C(90, 75, 100, 32, 18);

// ===============================================
// 비만계산기 가져오기

// height는 무조건 m
// 예를들어 173cm는 1.73m
// 비만 계산 방법은 신체질량지수인 BMI(Body Mass Index)에 근거한 방식으로 BMI지수 = 몸무게(kg) ÷ (신장(m) × 신장(m))이다.
// 산출된 값이 18.5 이하면 저체중, 18.5~23은 정상, 23~25는 과체중, 25~30은 비만, 30이상은 고도비만으로 나누어진다.
// ===============================================

// function checkObesity(weight, height) {
//   const heightMeter = height * 2;
//   const bmiScore = weight / heightMeter;

//   if (bmiScore < 18.5) {
//     console.log("저체중");
//   }

//   if ((bmiScore >= 18.5, 19, 20, 21, 23)) {
//     console.log("정상");
//   }

//   if ((bmiScore < 23, 24, 25)) {
//     console.log("과체중");
//   }

//   if ((bmiScore < 26, 27, 28, 29, 30)) {
//     console.log("비만");
//   }

//   if (bmiScore < 30) {
//     console.log("고도비만");
//   }

//   console.log(bmiScore);
// }

// weight(48);
// // height(153);

// let cm, kg, bmi;

// cm = prompt("키를 입력해봐!");
// kg = prompt("몸무게를 입력해봐!");

// cm = cm * 0.01;
// bmi = kg / (cm * cm);

// if (bmi > 30) {
//   document.write("고도비만이다! 우리모두 운동을 해야한다!");
// } else if (bmi > 25.0 && bmi <= 29.9) {
//   document.write("그냥비만이다! 일단 운동을 해야한다!");
// } else if (bmi > 23 && bmi <= 25) {
//   document.write("과체중이다! 식단조절을 해보자!");
// } else if (bmi > 18.5 && bmi <= 22.9) {
//   document.write("정상체중이다! 건강을 위해 운동을 해보자!");
// } else {
//   document.write("저체중이다! 일단 먹어보자!");
// }

// let m, kg, bmi;

m = prompt("키를 입력해봐!");
kg = prompt("몸무게를 입력해봐!");

// m = ;
bmi = kg / (m * m);

if (bmi > 30) {
  document.write("고도비만이다! 우리모두 운동을 해야한다!");
} else if (bmi > 25.0 && bmi <= 29.9) {
  document.write("그냥비만이다! 일단 운동을 해야한다!");
} else if (bmi > 23 && bmi <= 25) {
  document.write("과체중이다! 식단조절을 해보자!");
} else if (bmi > 18.5 && bmi <= 22.9) {
  document.write("정상체중이다! 건강을 위해 운동을 해보자!");
} else {
  document.write("저체중이다! 일단 먹어보자!");
}
