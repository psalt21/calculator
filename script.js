function input(char){
  if(isValid(char)){
    addToScreen(char);
  }

  function isValid(char){
    // if operand, then add to screen
    if(isOperand(char)){
      return true;
    }
    // only one operator in a row
    else if(isOperator(char) && lastInputNotOperator()){
      return true;
    }
    // create isDecimal function and isNotDuplicateDecimal function
    else if(isDecimal(char) && lastInputNotDecimal()){
      return true;
    }
    // if only one decimal since last operator set to true
    else if(isDecimal(char) && noDecimalSinceLastOperator()){
      return true;
    }
    // if one operator is added on top of another replace it with new one

    // if after calculation is output and operand is added replace current string with new operand

    // if screen blank then treat '' empty string as operator

    // clear screen
    else if(char === 'c'){
      clearScreen();
    }else if(char === '='){
      calculate();
    }
  }

  function isOperand(char){
    console.log(char);
    var operands = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    return operands.indexOf(char) !== -1;
  }

  function isOperator(char){
    var operators = ['+', '-', '*', '/'];
    return operators.indexOf(char) !== -1;
  }

  function lastInputNotOperator(){
    var lastChar = getScreen().innerText;
    lastChar = lastChar[lastChar.length-1];
    return !isOperator(lastChar);
  }

  function isDecimal(char){
    var decimal = ['.'];
    return decimal.indexOf(char) !== -1;
  }

  function lastInputNotDecimal(){
    var lastChar = getScreen().innerText;
    lastChar = lastChar[lastChar.length-1];
    console.log(lastChar);
    return !isDecimal(lastChar);
  }

  function noDecimalSinceLastOperator(){
    // if string idex of most recent operator is greater than string index of most recent decimal then return true
    var lastOperatoe
  }

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
