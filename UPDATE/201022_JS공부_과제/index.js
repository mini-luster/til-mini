// function gugudan(){
//     let gogoInput = document.getElementById('input').value;
//     let temp = "";
//     let result = "";

//     for (i = 0; i < 10; i++) {
//         result = guguInput * i;
//         temp += guguInput + "X" + i + "=" + result;
//     }

//     document.getElementById('contents').innerHTML = temp;
  
// }


// const input = document.querySelector (".style__input")

// document.getElementById("submit").onclick = function gogodan(){
//     let gogoInput = document.getElementById('input').value;
//     let temp = "";
//     let result = "";

//     for (i = 0; i < 10; i++) {
//         result = guguInput * i;
//         temp += guguInput + "X" + i + "=" + result;
//     }

//     document.getElementById('contents').innerHTML = temp;
// }
// const 

// for (let i = 1; i<=9; i++) {
//     console.log(2 + "x" + i + "=" + 2*i )
// };




// 

window.addEventListener("load", function(){

    let numeric = document.getElementById("input-gugudan");
    let btn = document.getElementById("gugudan-btn");

    btn.onclick = function(){
        numeric = parseInt(numeric.value);

           
           if ( numeric >= 10 ) {
               document.write("어허, 구구단이니까 10아래 숫자로만 해주라")
           } else {
                 for (let i = 1; i<=9; i++) {
                    document.write( numeric + "x" + i + "=" + numeric * i + "//" )
                };
           }

    }

})