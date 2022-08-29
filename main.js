const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
const resetButton = document.querySelector('#Reset-number');
//debugger
function compareValues(sum, luckyNumber){
if (sum % luckyNumber === 0) {
  outputBox.innerText = "Your Birthday is lucky 🔥";
} else {
  outputBox.innerText = "Your Birth is not lucky 😟";
 }
}
function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  compareValues(sum, luckyNumber.value)
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  console.log(dob.length);
  let sum = 0;
  // for (let index = 0; index < dob.length; index++) {
  //   sum = sum + Number(dob.charAt(index));
  // }
for(let surat of dob){
    sum = sum + Number(surat);
}
  return sum;
}

resetButton.addEventListener("click", function ResetButton() {
  console.log("click");
  dateOfBirth.value ="";
   luckyNumber.value ="";
   outputBox.innerText="";
          
});
checkNumberButton.addEventListener("click", checkBirthDateIsLucky);