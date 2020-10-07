document.querySelector(".cooltto__numberBtn").addEventListener("click", () => {
  const luckyNumbers = lottery();
  document.querySelector(
    ".cooltto__num.numA"
  ).textContent = luckyNumbers[0].toString();
  document.querySelector(
    ".cooltto__num.numB"
  ).textContent = luckyNumbers[1].toString();
  document.querySelector(
    ".cooltto__num.numC"
  ).textContent = luckyNumbers[2].toString();
  document.querySelector(
    ".cooltto__num.numD"
  ).textContent = luckyNumbers[3].toString();
  document.querySelector(
    ".cooltto__num.numE"
  ).textContent = luckyNumbers[4].toString();
  document.querySelector(
    ".cooltto__num.numF"
  ).textContent = luckyNumbers[5].toString();
});

//=============================================
//👇코난의 어드바이스👇
//=============================================

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
