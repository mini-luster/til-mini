document.querySelector(".night__mode").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#1e1e22";

  document.querySelector("body").style.color = "#efefef";

  document.querySelector(".doc__Question").style.backgroundColor = "#1a1818";
});

document.querySelector(".day__mode").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#efefef";

  document.querySelector("body").style.color = "#1e1e22";

  document.querySelector(".doc__Question").style.backgroundColor = "#dcebff";
});

// 여기서부터 모른다 !

// document.querySelector(".submission").addEventListener("click", () => {
//   answer = prompt("ALL IN US!");
//   rightAnswer = "있지";

//   if ((rightAnswer = "있지")) {
//     document.write("참잘했어요");
//   } else if ((rightAnswer = "원더걸스")) {
//     document.write("미쳤습니까휴먼");
//   }
// });

//=============================================
//👇코난의 어드바이스👇
//=============================================
document.querySelector(".submission").addEventListener("click", () => {
  answer = prompt("ALL IN US!");
  rightAnswer = "있지";
  if (answer === rightAnswer) {
    document.write("참잘했어요");
  } else {
    document.write("미쳤습니까휴먼");
  }
});
