function input(total){
  if(total === 'c'){
    document.getElementById('screen').innerText = '';
  }else if(total === "="){
    calculate();
  }else{
    buildResponse(total)
  }
}

function buildResponse(total){
  var grabInput = document.getElementById('screen');
  grabInput.innerText += total;
}

function calculate(){
  var test = document.getElementById('screen');
  test.innerText = eval(test.innerText);
  console.log(test);
}



// document.querySelector('.button').addEventListener('click', function (e) {
  // console.log('you clicked my button', e);
  // document.getElementById('result');
  // var text = document.createElement('p');
  // text.innerText = 'you pressed button ';
  // result.appendChild(text);
// });
