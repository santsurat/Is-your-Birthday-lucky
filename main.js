const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const resetButton = document.querySelector('#Reset-number');
//debugger

function checkBirthDateIsLucky() {
    

    if (dateOfBirth.value && luckyNumber.value !== "") {
        sumOfBirthday()
    } else {
        outputBox.innerText = "print the both fields"
    }


}


function sumOfBirthday() {
    var actualBirthday = dateOfBirth.value
    var sumBirthday = actualBirthday.replaceAll("-", "");
    /* console.log(sumBirthday) */
    var sumOfBirthday = 0;
    for (i = 0; i < sumBirthday.length; i++)
        sumOfBirthday = sumOfBirthday + Number(sumBirthday.charAt(i))
    console.log(sumOfBirthday)
    compare(sumOfBirthday, luckyNumber.value)

}

function compare(sumOfBirthday, lucky) {


    if (sumOfBirthday % lucky === 0) {
        outputBox.innerText="you are lucky"
    } else {
        outputBox.innerText="you are not lucky"
    }


}

resetButton.addEventListener("click", function ResetButton() {
  console.log("click");
  dateOfBirth.value ="";
   luckyNumber.value ="";
   outputBox.innerText="";
          
});
checkNumberButton.addEventListener("click", checkBirthDateIsLucky);