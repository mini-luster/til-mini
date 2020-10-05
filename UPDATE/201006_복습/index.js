document.querySelector(".cooltto__numberBtn").addEventListener("click", () => {
  const luckyNumbers = lottery();
  document.querySelector(
    ".cooltto__num"
  ).textContent = luckyNumbers[0].toString();
  document.querySelector(
    ".cooltto__num"
  ).textContent = luckyNumbers[1].toString();
  document.querySelector(
    ".cooltto__num"
  ).textContent = luckyNumbers[2].toString();
  document.querySelector(
    ".cooltto__num"
  ).textContent = luckyNumbers[3].toString();
  document.querySelector(
    ".cooltto__num"
  ).textContent = luckyNumbers[4].toString();
  document.querySelector(
    ".cooltto__num"
  ).textContent = luckyNumbers[5].toString();
});
