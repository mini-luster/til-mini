

// let getGugudan = document.getElementById("input__gugudan");
// let getGugudanBtn = document.getElementById("gugudan-btn");


// getGugudanBtn.onclick = function() {
//   getGugudan = parseInt(getGugudan.value)

//  if ( isNaN(getGugudan) ) {
//     document.querySelector(".contnets__answer").textContent = "숫자로만써주세욥!"
//  } else if ( getGugudan < 2 || getGugudan > 10 ) {
//     document.querySelector(".contnets__answer").textContent = "2단과 10단 사이에서만 작성해주세욥!"
//   } else {
//     for (let i = 1; i <= 9; i++ ){
//       document.querySelector(".contnets__answer").textContent = getGugudan + "x" + i + "=" + getGugudan * i + '<br>';
//     };
//   }
// }

//  아주 늦은 코난의 수정 코드 반영 

const gugudan_input = document.getElementById("input__gugudan");
const gugudan_btn = document.getElementById("gugudan-btn");
function initialize() {
  document.querySelector(".contnets__answer").textContent = "";
}


gugudan_btn.addEventListener("click", (e) => {
  e.preventDefault();
  initialize();
  gugudan_input_value = parseInt(gugudan_input.value);
  const isNumber = Number.isInteger(gugudan_input_value);


  const isValidNumber = 2 <= gugudan_input_value && gugudan_input_value < 10;


  if (isNumber) {
    if (isValidNumber) {
      for (let i = 1; i <= 9; i++) {
        const tempDiv = document.createElement("div");
        tempDiv.textContent =
          gugudan_input_value + " x " + i + " = " + gugudan_input_value * i;
        document.querySelector(".contnets__answer").appendChild(tempDiv);
      }
    } else {
      document.querySelector(".contnets__answer").textContent =
        "2단과 10단 사이에서만 작성해주세욥!";
    }
  } else {
    document.querySelector(".contnets__answer").textContent =
      "숫자로만써주세욥!";
  }
});