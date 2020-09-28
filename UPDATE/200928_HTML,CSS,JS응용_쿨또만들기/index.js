// 번호뽑기 누르면 화면을 번호추첨화면으로 변경한다.
document
  .querySelector(".lotto__numberGenerate")
  .addEventListener("click", () => {
    // 인트로 화면을 안보이게하고, 메인화면을 보이도록 한다.
    document.querySelector(".lotto__intro").style.display = "none";
    document.querySelector(".lotto__main").style.display = "block";

    // 추첨을 하여 번호를 볼에 끼워넣는다.
    const luckyNumbers = lottery();
    document.querySelector(
      ".lotto_ball.red.main"
    ).textContent = luckyNumbers[0].toString();
    document.querySelector(
      ".lotto_ball.violet.main"
    ).textContent = luckyNumbers[1].toString();
    document.querySelector(
      ".lotto_ball.blue.main"
    ).textContent = luckyNumbers[2].toString();
    document.querySelector(
      ".lotto_ball.green.main"
    ).textContent = luckyNumbers[3].toString();
    document.querySelector(
      ".lotto_ball.orange.main"
    ).textContent = luckyNumbers[4].toString();
    document.querySelector(
      ".lotto_ball.yellow.main"
    ).textContent = luckyNumbers[5].toString();
  });

document.querySelector(".lotto__gameAgain").addEventListener("click", () => {
  // 추첨을 하여 번호를 볼에 끼워넣는다.
  const luckyNumbers = lottery();
  document.querySelector(
    ".lotto_ball.red.main"
  ).textContent = luckyNumbers[0].toString();
  document.querySelector(
    ".lotto_ball.violet.main"
  ).textContent = luckyNumbers[1].toString();
  document.querySelector(
    ".lotto_ball.blue.main"
  ).textContent = luckyNumbers[2].toString();
  document.querySelector(
    ".lotto_ball.green.main"
  ).textContent = luckyNumbers[3].toString();
  document.querySelector(
    ".lotto_ball.orange.main"
  ).textContent = luckyNumbers[4].toString();
  document.querySelector(
    ".lotto_ball.yellow.main"
  ).textContent = luckyNumbers[5].toString();
});
