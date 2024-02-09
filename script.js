const inputField = document.getElementById("text-input");
const inputButton = document.getElementById("check-btn");
const result = document.getElementById("result");

inputButton.addEventListener("click", () => {
  if (inputField.value === "") {
    alert("Please input a value");
    return;
  }
  let str = inputField.value;
  let noPuncStr = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"")
  let reverseStr = noPuncStr.split('').reverse().join(''); 
  if (reverseStr === noPuncStr) {
    result.textContent = `${str} is a palindrome`;
  } else {
    result.textContent = `${str} is not a palindrome`;
  }
});
