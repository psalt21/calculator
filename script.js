function calculate(value){
  if(value === 1){
    buildResponse(value)
  }else if(value===2){
    buildResponse(value)
  }else{
    document.getElementById('result').innerText='';
    document.getElementById('result');
    var text = document.createElement('p');
    text.innerText = 'You clicked the wrong button!!!';
    result.appendChild(text);
  }
}

function buildResponse(value){
  document.getElementById('result').innerText='';
  document.getElementById('result');
  var text = document.createElement('p');
  text.innerText = 'you pressed button ' + value;
  result.appendChild(text);
}

// document.querySelector('.button').addEventListener('click', function (e) {
  // console.log('you clicked my button', e);
  // document.getElementById('result');
  // var text = document.createElement('p');
  // text.innerText = 'you pressed button ';
  // result.appendChild(text);
// });
