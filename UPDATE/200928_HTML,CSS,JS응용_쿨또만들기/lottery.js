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

  return winningNumberArr.sort((a, b) => Number(a) - Number(b));
}

lottery();

// 공뽑기 (번호만 얻기)
function getLotteryNumberIndex(arr) {
  return Math.round(Math.random() * (arr.length - 1));
}
