// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Random Uppercase
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
//Random Lowercase
function getRandomLowerCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

//Random Numbers
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

// Random Symbols
function getRandomSymbol(){
  var symbol = "!@#$%^&*(){}[]=<>/,.~?";
  return symbol[Math.floor(Math.random()*symbol.length)];
}

// Store Functions
const randomFunc = {
  upper : getRandomUpperCase,
  lower : getRandomLowerCase,
  number : getRandomNumber,
  symbol : getRandomSymbol,
  };
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
;

//Generate Password Function
function generatePassword(upper, lower, number, symbol, length){
  let generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  //console.log(typesCount);

  const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  if(typesCount === 0) {
      return '';
  }

  for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          generatedPassword += randomFunc[funcName]();
      });
  }

  const finalPassword = generatedPassword.slice(0, length);


  return finalPassword;
}
