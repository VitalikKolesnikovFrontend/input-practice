const inputLog = document.querySelector('#input-log');
const inputClear = document.querySelector('#input-clear');
const inputBlock = document.querySelector('#input-block');
const inputHide = document.querySelector('#input-hide');
const inputColor = document.querySelector('#input-color');
const inputCreate = document.querySelector('#input-create');
const inputRemove = document.querySelector('#input-remove');
const searchForm = document.querySelector('search-form');
const input = document.querySelector('.input');
const form = document.querySelector('form');
const newDiv = document.querySelector('newDiv');
const newInput = document.querySelector('#newInput');
const inputRemoveNth = document.querySelector('#input-remove-nth');
const newBlocks = document.querySelector('.new-blocks');

inputLog.addEventListener('click', () => {
  console.log(input.value);
});

inputClear.addEventListener('click', () => {
  input.value = '';
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  input.disabled = true;
});

inputBlock.addEventListener('click', () => {
  if (input.disabled === false) {
    input.disabled = true;
  } else {
    input.disabled = false;
  }
});

inputHide.addEventListener('click', () => {
  if (form.style.display === '') {
    form.style.display = 'none';
  } else {
    form.style.display = '';
  }
});

inputColor.addEventListener('click', () => {
  const arrColor = ['black', 'red', 'blue', 'green'];
  const randomColor = Math.floor(Math.random() * arrColor.length);
  input.style.backgroundColor = arrColor[randomColor];
  console.log(input.style.backgroundColor);
});

let arrCreate = [];
inputCreate.addEventListener('click', () => {
  let newDiv = document.createElement('div');
  newDiv.className = 'newDiv';
  newDiv.textContent = input.value;
  newBlocks.appendChild(newDiv);
  input.value = '';
  arrCreate.push(newDiv);
  newDiv.id = arrCreate.length;
  console.log(arrCreate);
});

inputRemove.addEventListener('click', () => {
  newBlocks.lastChild.remove();
});

// newInput.addEventListener('click', () => {
//   let inputNumber = document.createElement('input');
//   inputNumber.name = 'inputNumber';
//   inputNumber.type = 'number';
//   form.appendChild(inputNumber);
//   inputNumber.style.marginTop = '10px';
//   newInput.disabled = true;
// });

// inputRemoveNth.addEventListener('click', () => {
//   const myDiv = document.querySelectorAll('.newDiv');
//   form.remove(arrCreate[inputRemoveNth.value]);
// });
