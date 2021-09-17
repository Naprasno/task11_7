/*
window.onload = function workCode()  {
//let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
//let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
let minValue;
let maxValue;
*/
//console.log(intToWords(10));
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
answerField.innerText = `Введите min и max значения`;
orderNumberField.innerText = 0;

const startGame = document.querySelector('button');
startGame.addEventListener('click', gameMinMax);
function gameMinMax(e) {

     minValue = parseInt(document.getElementById('min').value);
     maxValue = parseInt(document.getElementById('max').value);


//проверяем введенные значение, если неверное значение, ставим по умолчанию
minValue = (minValue || 0);
maxValue == 0 ? maxValue=0 : maxValue = (maxValue || 100);

minValue < -999 ? minValue=-999 : minValue=minValue;
maxValue > 999 ? maxValue=999 : maxValue=maxValue;

// прячем-показываем
duplicateFieldMin.textContent = minValue;
duplicateFieldMax.textContent = maxValue;
document.getElementById('change').style.display = 'block';
document.getElementById('changeStart').style.display = 'inline-block';
document.getElementById('changeStartButton').style.display = 'none';


let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
orderNumberField.innerText = orderNumber;
//answerField.innerText = `Вы загадали число ${answerNumber}?`;
if (intToWords(answerNumber).length <= 20) {
  if (answerNumber>0) {
  answerField.innerText = `Вы загадали число ${intToWords(answerNumber)}?`;
  }
  else if (answerNumber<0){
  answerField.innerText = `Вы загадали число минус ${intToWords(answerNumber*(-1))}?`;
  }
  else {
    answerField.innerText = `Вы загадали ${intToWords(answerNumber)}?`;
  }
} else {
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
};
console.log(answerNumber)

//кнопка сброс
document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    min.value = '0';
    max.value = '100';
    orderNumber = 0;
    answerField.innerText = `Введите max и min значения`;
    orderNumberField.innerText = orderNumber;
    duplicateFieldMin.textContent = '';
    duplicateFieldMax.textContent = '';
    document.getElementById('change').style.display = 'none';
    document.getElementById('changeStart').style.display = 'none';
    document.getElementById('changeStartButton').style.display = 'inline-block';

})

//кнопка больше
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            let phraseResult = Math.round(Math.random() * 2);
            if (phraseResult === 0) {
                result = 'Ты загадал'; 
              } else if (phraseResult === 1) {
                result ='Наверное, это число'; 
              } else {
                result = 'Да это легко! это'; 
              }
            //console.log(phraseResult);

            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            //answerField.innerText = `${result} ${answerNumber}?`
            if (intToWords(answerNumber).length <= 20) {
              if (answerNumber>0) {
              answerField.innerText = `${result} ${intToWords(answerNumber)}?`;
              }
              else if (answerNumber<0) {
              answerField.innerText = `${result} минус ${intToWords(answerNumber*(-1))}?`;
              }
              else {
                answerField.innerText = `${result} ${intToWords(answerNumber)}?`;
                }
            } else {
              answerField.innerText = `${result} ${answerNumber}?`;
            };
            console.log(`minValue:${minValue} -> ${answerNumber} <- maxValue:${maxValue}`);
        }
    }
})

//кнопка меньше
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } 
        
        else {
            let phraseResult = Math.round(Math.random() * 2);
            if (phraseResult === 0) {
                result = 'Ты загадал'; 
              } else if (phraseResult === 1) {
                result ='Наверное, это число'; 
              } else {
                result = 'Да это легко! это'; 
              }

            maxValue = answerNumber - 1;
            answerNumber  = Math.round((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            //answerField.innerText = `${result} ${answerNumber }?`;
            if (intToWords(answerNumber).length <= 20) {
              if (answerNumber>0) {
              answerField.innerText = `${result} ${intToWords(answerNumber)}?`;
              }
              else if (answerNumber<0){
              answerField.innerText = `${result} минус ${intToWords(answerNumber*(-1))}?`;
              }
              else {
                answerField.innerText = `${result} ${intToWords(answerNumber)}?`;
                }
            } else {
              answerField.innerText = `${result} ${answerNumber}?`;
            };
            console.log(`minValue:${minValue} -> ${answerNumber} <- maxValue:${maxValue}`);
        }
    }
})

//кнопка угадал
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        let phraseEnd = Math.round(Math.random() * 2);
            if (phraseEnd === 0) {
                resultEnd = 'Я всегда угадываю\n\u{1F60E}'; 
              } else if (phraseEnd === 1) {
                resultEnd ='Ура, угадал, давай заново'; 
              } else {
                resultEnd = 'Это было не сложно, жми заново'; 
              }

        answerField.innerText = resultEnd;
        gameRun = false;
        document.getElementById('change').style.display = 'none';

    }
})


}
