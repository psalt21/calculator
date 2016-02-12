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
    else if(isOperator(char) && lastInputNotOperator(char)){
      return true;
    }
    // create isDecimal function and isNotDuplicateDecimal function
    else if(char === '.' && isNotDuplicateDecimal(char)){
      return true;
    }
    // if operator is added set decimal flag as true

    // if one operator is added on top of another replace it with new one

    // if after calculation is output and operand is added replace current string with new operand

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

  function isNotDuplicateDecimal(char){
    var lastChar = getScreen().innerText;
    lastChar = lastChar[lastChar.length-1];
    if(lastChar === '.'){
      return !isOperator(lastChar);
    }
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
