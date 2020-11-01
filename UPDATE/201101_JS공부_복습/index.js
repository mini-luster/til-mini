

let getGugudan = document.getElementById("input__gugudan");
let getGugudanBtn = document.getElementById("gugudan-btn");


getGugudanBtn.onclick = function() {
  getGugudan = parseInt(getGugudan.value)

 if ( isNaN(getGugudan) ) {
    document.querySelector(".contnets__answer").textContent = "숫자로만써주세욥!"
 } else if ( getGugudan < 2 || getGugudan > 10 ) {
    document.querySelector(".contnets__answer").textContent = "2단과 10단 사이에서만 작성해주세욥!"
  } else {
    for (let i = 1; i <= 9; i++ ){
      document.querySelector(".contnets__answer").textContent = getGugudan + "x" + i + "=" + getGugudan * i + '<br>';
    };
  }
}