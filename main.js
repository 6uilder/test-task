let validBtn = document.querySelector('.valBtn');
let form = document.querySelector('form');
let nameField = document.querySelector('#name');
let mailField = document.querySelector('#mail');
let telField = document.querySelector('#phone');
let warnMail = document.querySelector('.mail-warning');
let warnPhone = document.querySelector('.phone-warning');
let warn = document.querySelector('.warning');
let end = document.querySelector('.end');
let tileListBtn = document.querySelector('.tile-list');
let main = document.querySelector('.main');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameField.value === ''|| mailField.value === ''|| telField.value === '') {
    end.classList.add('visual')
  }
  if (nameField.value !== ''&& mailField.value !== ''&& telField.value !== '') {
    end.classList.remove('visual')
  }

  if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(mailField.value)) {
    warnMail.classList.add('visual')
  }
  if ( /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(mailField.value)) {
    warnMail.classList.remove('visual')
  }


  if (!/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/.test(telField.value)) {
    warnPhone.classList.add('visual');
  }
  if (/^\d{1}-\d{3}-\d{3}-\d{2}-\d{2}$/.test(telField.value)) {
    warnPhone.classList.remove('visual')
  }
 
  
})

tileListBtn.addEventListener('click', (event) => {
  event.preventDefault();
  main.classList.toggle('listOrNot')
})

function getData() {
  const requestURL = '/data.html';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL);
  xhr.onload = () => {
    if (xhr.status !== 200) {
      return;
    }
    document.querySelector('.main').innerHTML += xhr.response;
  }
  xhr.send();
}

document.querySelector('#get').addEventListener('click', () => {
  getData();
});

let currentState = [];
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let inp3 = document.querySelector('.inp3');
let undoBtn = document.querySelector('.undoBtn');

undoBtn.addEventListener('click', (event) => {
  event.preventDefault();
  currentState.pop();
  [inp1.value, inp2.value, inp3.value] = currentState[currentState.length-1]|| ['', '', ''];
  

})

inp1.addEventListener('input', () => {
  currentState.push([inp1.value, inp2.value, inp3.value]);
})
inp2.addEventListener('input', () => {
  currentState.push([inp1.value, inp2.value, inp3.value]);
})
inp3.addEventListener('input', () => {
  currentState.push([inp1.value, inp2.value, inp3.value]);
})

function aClick() {

}

function setPlusIcon() {
  let Myli = document.querySelector('ul').children;
  console.log(Myli)
  for (let i = 0; i < Myli.length; i++) {
    
    if (Myli[i].children) {
      console.log(Myli[i])
    }
    
  }
 
}
setPlusIcon();