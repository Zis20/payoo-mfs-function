// common shared function

// console.log('utilities showing')

// function getInputFieldValueById(){

//     console.log('will get value by id')
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function