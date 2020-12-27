// 번호뽑기 버튼을 누르면 번호추첨화면으로 전환된다!
// 아래가 수많은 방법들

// document.querySelector(".lotto__numberGner").addEventListener("click", () => {
//   alert("클릭했다");
// });

// ☝️돔을 찍고 , (클래스를 선택하고 ).이벤트()를 불러와!

// document.querySelector(".lotto__numberGner").addEventListener("click", () => {
//   document.querySelector(".lotto__intro").remove();
//   document.querySelector(".lotto__main").style.display = "visible";
// });

// document.querySelector(".lotto__numberGner").addEventListener("click", () => {
//   document.querySelector(".lotto.intro").setAttribute("class", "lotto__main");
//   document.querySelector(".lotto.main").style.display = "visible";
// });

document.querySelector(".lotto__numberGner").addEventListener("click", () => {
  // 인트로화면을 안보이게하고, 메인화면을 보이게 한다!
  document.querySelector(".lotto__intro").style.display = "none";
  document.querySelector(".lotto__main").style.display = "block";

  //   추첨하자
  const luckyNumber = lottery();
  document.querySelector(".lotto_ball .main");
});
