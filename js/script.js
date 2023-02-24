'use strict';

const getList = document.querySelector('.list');

const addString = (userInput) => {
  const createLi = document.createElement('li');
  createLi.innerText = userInput;
  getList.append(createLi);

}

const delElement = () => {
  const li = getList.lastElementChild;
  console.log(li);
  if(li === null) {
    return;
  }
  li.remove();

}
const clearElement = (elem) => {
  const clear = elem.innerHTML = '';
}

const getUserString = () => {
  const userInput = prompt(`Ведите текст для добавления, удаления или очистки списка ${getList.outerHTML}`)
  if(userInput === 'exit' || userInput === null) {
    alert('Всего доброго!');
    return;
  }
  if (userInput.trim() === '') {
    alert('Вы ничего не ввели!')
    return getUserString();
  }
  if (userInput === 'clear') {
    getList.innerHTML = '';
    return getUserString();
  }
  if (userInput === 'del') {
    delElement();
    return getUserString();
  }


  addString(userInput);
console.log(userInput.trim());
 return getUserString();
}

getUserString();
