var outputLocation = document.getElementById('screen');

function input(total){
  var string = outputLocation.innerText;
  var strLength = string.length;
  var lastChar = string.charAt(strLength - 1);
  if(total === 'c'){
    outputLocation.innerText = '';
  }else if(total === '='){
    calculate();
  }else if(total === '.' && outputLocation.innerText.indexOf('.') !== -1){
      deleteLast();
  }else if(total >= 0){
    buildResponse(total);
  }else if(total === '+' && lastChar === '/' || lastChar === '*' || lastChar === '-' || lastChar === '+' || lastChar === '.'){
    deleteLast();
  }else if(total === '-' && lastChar === '/' || lastChar === '*' || lastChar === '+' || lastChar === '-' || lastChar === '.'){
    deleteLast();
  }else if(total === '/' && lastChar === '*' || lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '.'){
    deleteLast();
  }else if(total === '*' && lastChar === '/' ||  lastChar === '+' || lastChar === '-' || lastChar === '*'){
    deleteLast();
  }else if(total === '.' && lastChar === '/' ||  lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '.'){
    deleteLast();
  }else{
    buildResponse(total);
  }
}

function buildResponse(total){
  outputLocation.innerText += total;
}

function calculate(){
  outputLocation.innerText = eval(outputLocation.innerText);
}

function deleteLast(){
  var string = outputLocation.innerText;
  string = string.substring(0, string.length - 1);
}

// document.querySelector('.button').addEventListener('click', function (e) {
  // console.log('you clicked my button', e);
  // document.getElementById('result');
  // var text = document.createElement('p');
  // text.innerText = 'you pressed button ';
  // result.appendChild(text);
// });
