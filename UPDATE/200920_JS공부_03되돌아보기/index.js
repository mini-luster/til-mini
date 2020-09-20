// ===============================================
// 성준이는 수학이 90점, 국어가 75점, 영어가 100점, 과학이 32점 사회가 18점이다.

// (1) 시험 성적 평균을 구하시오.
// (2) 성준이가 최저점수 과목과 최고점수 과목을 제외한 평균을 구하시오.
// (3) 이번 평균성적을 바탕으로 다음 시험에 13%점수가 향상되었다고 했을 때 , 평균점수를 구하시오

// ===============================================

function getAverage(math, Korean, English, science, society) {
  let getAverage = (math + Korean + English + science + society) / 5;
}

getAverage(90, 75, 100, 32, 18);
console.log(getAverage);
document.write(getAverage);
