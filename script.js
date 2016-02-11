function input(total){
  var outputLocation = document.getElementById('screen');
  var lastChar = outputLocation.innerText.slice(-1);
  if(total === 'c'){
    document.getElementById('screen').innerText = '';
  }else if(total === '='){
    calculate();
  }else if(total === '.'){
    if(outputLocation.innerText.indexOf('.') !== -1){
      buildResponse('total');
    }
  }else if(total === total && lastChar === total){
    deleteLast();
  }else{
    buildResponse(total);
  }
}

function buildResponse(total){
  var grabInput = document.getElementById('screen');
  grabInput.innerText += total;
}

function calculate(){
  var outputLocation = document.getElementById('screen');
  outputLocation.innerText = eval(outputLocation.innerText);
  console.log(outputLocation.innerText.slice(-1));
}

function deleteLast(){
  outputLocation.innerText.substring(0, outputLocation.length - 1);
}

// document.querySelector('.button').addEventListener('click', function (e) {
  // console.log('you clicked my button', e);
  // document.getElementById('result');
  // var text = document.createElement('p');
  // text.innerText = 'you pressed button ';
  // result.appendChild(text);
// });
