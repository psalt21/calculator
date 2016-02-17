var safeToAddOperand = true;
var safeToAddDecimalFlag = true;
function input(char){
  if(isOperator(char) && lastInputIsOperator()){
    replaceLastWithCurrent(char);
  }
  else if(isValid(char)){
    addToScreen(char);
  }
  function isValid(char){
    // if operand, then add to screen
    if(isOperand(char) && safeToAddOperand === true){
      return true;
    }
    else if (isOperator(char)){
      safeToAddOperand = true;
      safeToAddDecimalFlag = true;
      return true;
    }
    // only one operator in a row

    // create isDecimal function and isNotDuplicateDecimal function

    // if only one decimal since last operator set to true
    else if(isDecimal(char) && safeToAddDecimalFlag === true){
      safeToAddOperand = true;
      safeToAddDecimalFlag = false;
      return true;
    }
    // if one operator is added on top of another replace it with new one
    // else if(isOperand(char)){
      // return true;
    // }
    // if after calculation is output and operand is added replace current string with new operand

    // clear screen
    else if(char === 'c'){
      safeToAddDecimalFlag = true;
      safeToAddOperand = true;
      clearScreen();
    }else if(char === '='){
      safeToAddOperand = false;
      calculate();
    }
  }

  function isOperand(char){
    var operands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return operands.indexOf(char) !== -1;
  }

  function isOperator(char){
    var operators = ['+', '-', '*', '/'];
    return operators.indexOf(char) !== -1;
  }

  function lastInputIsOperator(){
    var lastChar = getScreen().innerText;
    lastChar = lastChar[lastChar.length-1];
    return isOperator(lastChar);
    // if(isOperator(lastChar)){
    //   replaceLastWithCurrent(char);
    // }
  }

  function isDecimal(char){
    var decimal = ['.'];
    return decimal.indexOf(char) !== -1;
  }

  function lastInputNotDecimal(){
    var lastChar = getScreen().innerText;
    lastChar = lastChar[lastChar.length-1];
    return !isDecimal(lastChar);
  }

  // function noDecimalSinceLastOperator(char){
  //   // if string idex of most recent operator is greater than string index of most recent decimal then return true
  //   var operators = ['+', '-', '*', '/'];
  //   var decimal = ['.'];
  //   var fullString = getScreen().innerText;
  //   operatorPosition = fullString.indexOf(operators[3]);
  // }

}

function getScreen() {
  return document.getElementById('screen');
}

function addToScreen(char){
  getScreen().innerText += char;
}

function calculate(){
  getScreen().innerText = eval(getScreen().innerText);
}

function clearScreen(){
  getScreen().innerText = '';
}

function deleteLast(){
  var string = getScreen().innerText;
  string = string.substring(0, string.length - 1);
}

function replaceLastWithCurrent(char){
  var string = getScreen().innerText;
  string = string.slice(0,-1);
  getScreen().innerText = string;
  addToScreen(char);
}
