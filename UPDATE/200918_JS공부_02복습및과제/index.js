// ==================================
// 도저히 모르겠어서 인터넷에 검색했음
// ==================================

// for (let i = 2; i < 10; i++) {
//   for (var j = i; j < 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// 참신기하다.

// ==================================
// https://tonks.tistory.com/82
// ==================================

function gogodanTable(number) {
  let text = "";

  for( var item = 1;times < 10; times++ ) {
      var anwer = number * times;
      text + = number + "x" + times + "=" + answer + "<br/>";
  }

  return text;
}




// function timesTable ( number ) { 

//     var message = "숫자가 아닙니다. "; 

//     if ( isNaN( number ) ) return message; 

//     number = parseFloat( number ); 		 // 실수로 바꾸기 (parseFloat) 

//     var lastAnswer = parseInt ( number * 9 ); 		 // 마지막 답의 정수 부분  
//     var lastLength = lastAnswer.toString().length; 	 // 위 정수부의 자릿수 알아내기 

//     var text = ""; 

//     for ( var times = 1; times < 10; times++ ) { 

//         var answer = number * times; 

//         answer = parseFloat(  answer.toFixed( 3 )  ); 	 // 소수부에서 반올림하기 

//         var len = parseInt( answer ).toString().length;  	 // 현재 정수부의 자릿수 알아내기 

//         if ( len < lastLength ) answer = "&nbsp;" + answer; 

//         text +=  number  +  " x "  +  times  +  " = "  +  answer  +  "<br />"; 
//     } 

//     return text; 
// }



// function timeTables() {
//     var text ="";

//     for (let number = 2; number < 10; number ++ ){
//         for ( let time = 1;time < 10; times ++){
//             let answer = number * times;
//             text += number + "x" +times + "="+ answer + "<br/>";
//         }

//         text += "<br/>";
//     }

//     return text;
// }

// 아 모르겠어...