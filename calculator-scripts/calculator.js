function updateCalculation(character){
  let calculation = JSON.parse(localStorage.getItem('calculation')) || ''
  if (character === 'Clear'){
    calculation = '';
    console.log('Calculation cleared');
  } else if (character === '='){
    calculation = eval(calculation);
    console.log(calculation);
  } else if(character === '1'){
    calculation += '1';
    console.log(calculation);
  } else if(character === '2'){
    calculation += '2';
    console.log(calculation);
  } else if(character === '3'){
    calculation += '3';
    console.log(calculation);
  } else if(character === '4'){
    calculation += '4';
    console.log(calculation);
  } else if(character === '5'){
    calculation += '5';
    console.log(calculation);
  } else if(character === '6'){
    calculation += '6';
    console.log(calculation);
  } else if(character === '7'){
    calculation += '';
    console.log(calculation);
  } else if(character === '8'){
    calculation += '8';
    console.log(calculation);
  } else if(character === '9'){
    calculation += '9';
    console.log(calculation);
  } else if(character === '+'){
    calculation += '+';
    console.log(calculation);
  } else if(character === '-'){
    calculation += '-';
    console.log(calculation);
  } else if(character === '*'){
    calculation += '*';
    console.log(calculation);
  } else if (character === '/'){
    calculation += '/';
    console.log(calculation);
  } else{
    calculation += '.'
    console.log(calculation);
  }
  localStorage.setItem('calculation', JSON.stringify(calculation));

  document.querySelector('.show-calculation').innerHTML = calculation;
}