function calculate(value){
  if(value === 1 || value === 2 || value === 3 || value === 4 || value === 5 || value === 6 || value === 7 || value === 8 || value === 9 || value === 0 || value === '+' || value === '-' || value === '/' || value === 'x' || value === '.'){
    buildResponse(value)
  }
  if(value === 'c'){
    document.getElementById('screen').innerHTML = '';
  }
}

function buildResponse(value){
  document.getElementById('screen').innerHTML += value;
}




// document.querySelector('.button').addEventListener('click', function (e) {
  // console.log('you clicked my button', e);
  // document.getElementById('result');
  // var text = document.createElement('p');
  // text.innerText = 'you pressed button ';
  // result.appendChild(text);
// });
