// // ==================================
// //  공이 6개
// //  추첨 시작.
// //  번호를 얻는다. (공뽑기, 1~45중 뽑은 숫자 제거)
// //  공을 뺀다. (숫자 뺀다)
// // ==================================

// function getlotteryNumberSet() {
//   const lotteryNumberSet = [];

//   for (let i = 1; i < 46; i++) {
//     lotteryNumberSet.push(i);
//   }

//   return lotteryNumberSet;
// }

// //  추첨 시작.
// function lottery() {
//   const winNumberArr = [];
//   const lotteryArr = getlotteryNumberSet();
//   console.log(lotteryArr);
//   // 추첨시작
//   let count = 0;

//   while (count !== 6) {
//     getlotteryNumber = lotteryArr[getlotteryNumberindex(lotteryArr)];

//     count++;
//   }
// }

// lottery();

// // 공뽑기
// function getlotteryNumberindex(arr) {
//   return Math.round(Math.random() * arr.length);
// }

// //  MDN index 를 보자.

//==========================================
//  ☝️ 실패작
//==========================================

// 1 ~ 45까지 들어있는 배열을 만들어 주는 로직
function getLotteryNumberSet() {
  const lotteryNumberSet = [];
  for (let i = 1; i < 46; i++) {
    lotteryNumberSet.push(i);
  }
  return lotteryNumberSet;
}
// 추첨시작
function lottery() {
  const winningNumberArr = [];
  let lotteryArr = getLotteryNumberSet();
  let count = 0;
  while (count !== 6) {
    const lotteryNumber = lotteryArr[getLotteryNumberIndex(lotteryArr)];
    winningNumberArr.push(lotteryNumber);
    lotteryArr = lotteryArr.filter((item) => item !== lotteryNumber);
    count++;
  }
  document.write(`추첨 결과 ${winningNumberArr.join(", ")}`);
}
lottery();
// 공뽑기 (번호만 얻기)
function getLotteryNumberIndex(arr) {
  return Math.round(Math.random() * (arr.length - 1));
}
