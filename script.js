const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const mark = document.querySelector('.mark');
const percent = document.querySelector('.percent');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times');
const divide = document.querySelector('.divide');
const power = document.querySelector('.power');
const zero = document.querySelector('.zero');
const sum = document.querySelector('.sum');
const backspace = document.querySelector('.backspace');
const operation = document.querySelector('.calc-operation');
const type = document.querySelector('.calc-typed');
const clear = document.querySelector('.c');
const silnia = document.querySelector('.silnia');
const nroot = document.querySelector('.n-root');
const log = document.querySelector('.log');
const root = document.querySelector('.root');
const brackets = document.querySelector('.bracket');
let jd = 0

document.onselectstart = function(){return false}


const addOne = () => {
  one.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '1';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '1';
    }
  });
  two.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '2';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '2';
    }
  });
  three.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '3';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '3';
    }
  });
  four.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '4';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '4';
    }
  });
  five.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '5';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '5';
    }
  });
  six.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '6';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '6';
    }
  });
  seven.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '7';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '7';
    }
  });
  eight.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '8';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '8';
    }
  });
  nine.addEventListener('click', () => {
    if (type.textContent === '0') {
      type.textContent = '9';
    } else if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '9';
    }
  });
  zero.addEventListener('click', () => {
    if (type.textContent !== '0' && type.textContent.length < 15) {
      type.textContent += '0';
    }
  });
  mark.addEventListener('click', () => {
    if (type.textContent.split('').sort()[0] !== '.') {
      type.textContent += '.';
    }
  });
  brackets.addEventListener('click', () => {
    if(type.textContent.charAt(0) !== '-' && type.textContent !== ''){
      type.textContent = '-' + type.textContent
    } else{
      type.textContent = type.textContent.substring(1, type.textContent.length);
    }
  });
  backspace.addEventListener('click', () => {
    if (type.textContent !== '0') {
      type.textContent = type.textContent.substring(0, type.textContent.length - 1);
    }
    if (type.textContent === '') {
      type.textContent = '';
    }
  });
  plus.addEventListener('click', () => {
    if (operation.textContent !== '') {
      action();
      jd = 1;
    } else if (operation.textContent === '' && type.textContent !== '') {
      operation.textContent = parseFloat(type.textContent);
      type.textContent = '';
      jd = 1;
    }
  });
  minus.addEventListener('click', () => {
    if (operation.textContent !== '') {
      action();
      jd = 2;
    } else if (operation.textContent === '' && type.textContent !== '') {
      operation.textContent = parseFloat(type.textContent);
      type.textContent = '';
      jd = 2;
    }
  });
  times.addEventListener('click', () => {
    if (operation.textContent !== '') {
      action();
      jd = 3;
    } else if(type.textContent !== '') {
      operation.textContent = parseFloat(type.textContent);
      type.textContent = '';
      jd = 3;
    }
  });
  divide.addEventListener('click', () => {
    if (operation.textContent !== '') {
      action();
      jd = 4;
    } else if(type.textContent !== '') {
      operation.textContent = parseFloat(type.textContent);
      type.textContent = '';
      jd = 4;
    }
  });
  power.addEventListener('click', () => {
    if (operation.textContent === '') {
      operation.textContent = type.textContent;
      type.textContent = '';
      jd = 5;
    } else if(type.textContent !== '') {
      summary();
      jd = 5;
    }
  });
  root.addEventListener('click', () => {
    if(type.textContent !== ''){
    type.textContent = Math.sqrt(parseFloat(type.textContent));
    }
  });
  nroot.addEventListener('click', () => {
    if(operation.textContent === '') {
      operation.textContent = type.textContent;
      type.textContent = '';
      jd = 8
    }
    else if(type.textContent !== ''){
      action();
      jd = 8;
      }
  });
  silnia.addEventListener('click', () => {
    if(type.textContent !== '' && type.textContent !== '0') {
    let count = 1;
    for (let i = 1; i < parseFloat(type.textContent) + 1; i++) {
      count *= i;
      type.textContent = count;
    }
    } else if(type.textContent === '0') {
      type.textContent = 0;
    }
  
  });
  log.addEventListener('click', () => {
    if(operation.textContent === '') {
      operation.textContent = type.textContent;
      type.textContent = '';
      jd = 6;
    } else{
    type.textContent = (Math.log(parseFloat(operation.textContent)) / Math.log(parseFloat(type.textContent)))
    type.textContent = Math.floor(parseFloat(type.textContent))
    operation.textContent = '';
    }
  });
  percent.addEventListener('click', () => {
    if(operation.textContent === '' && type.textContent !== '') {
      operation.textContent = type.textContent + '%';
      type.textContent = '';
      jd = 7;
    } else if(type.textContent !== ''){
      type.textContent = parseFloat(operation.textContent)/100 * parseFloat(type.textContent);
      operation.textContent = '';
      jd = 7;
    }
  })
  sum.addEventListener('click', summary = () => {
    if(jd === 1 && type.textContent !== ''){
      operation.textContent = parseFloat(type.textContent) + parseFloat(operation.textContent);
      type.textContent = operation.textContent;
      operation.textContent = '';
    } else if(jd === 2 && type.textContent !== ''){
      operation.textContent = parseFloat(operation.textContent) - parseFloat(type.textContent);
      type.textContent = operation.textContent;
      operation.textContent = '';
    } else if(jd === 3 && type.textContent !== ''){
      operation.textContent = parseFloat(type.textContent) * parseFloat(operation.textContent);
      type.textContent = operation.textContent;
      operation.textContent = '';
    } else if(jd === 4 && type.textContent !== ''){
      operation.textContent = parseFloat(operation.textContent) / parseFloat(type.textContent);
      type.textContent = operation.textContent;
      operation.textContent = '';
    } else if(jd === 5 && type.textContent !== ''){
      operation.textContent = parseFloat(operation.textContent)**parseFloat(type.textContent)
      type.textContent = operation.textContent;
      operation.textContent = '';
    } else if(jd === 6 && type.textContent !== ''){
      type.textContent = (Math.log(parseFloat(operation.textContent)) / Math.log(parseFloat(type.textContent)));
      operation.textContent = '';
    } else if(jd === 7 && type.textContent !== ''){
      type.textContent = parseFloat(operation.textContent)/100 * parseFloat(type.textContent);
      operation.textContent = '';
    } else if(jd === 8 && type.textContent !== ''){
      type.textContent = Math.pow(parseFloat(operation.textContent), 1/parseFloat(type.textContent));
      operation.textContent = '';
    }
  });
  clear.addEventListener('click', () => {
    type.textContent = '';
    operation.textContent = '';
    jd = 0;
  });
  const action = () => {
    if(jd === 1 && type.textContent !== ''){
      operation.textContent = parseFloat(type.textContent) + parseFloat(operation.textContent);
      type.textContent = '';
    } else if(jd === 2 && type.textContent !== ''){
      operation.textContent = parseFloat(operation.textContent) - parseFloat(type.textContent);
      type.textContent = '';
    } else if(jd === 3 && type.textContent !== ''){
      operation.textContent = parseFloat(type.textContent) * parseFloat(operation.textContent);
      type.textContent = '';
    } else if(jd === 4 && type.textContent !== ''){
      operation.textContent = parseFloat(operation.textContent) / parseFloat(type.textContent);
      type.textContent = '';
    } else if(jd === 5 && type.textContent !== ''){
      operation.textContent = parseFloat(operation.textContent)**parseFloat(type.textContent)
      type.textContent = '';
    } else if(jd === 6 && type.textContent !== ''){
      type.textContent = (Math.log(parseFloat(operation.textContent)) / Math.log(parseFloat(type.textContent)));
      type.textContent = '';
    } else if(jd === 7 && type.textContent !== ''){
      type.textContent = parseFloat(operation.textContent)/100 * parseFloat(type.textContent);
      type.textContent = '';
    } else if(jd === 8 && type.textContent !== ''){
      operation.textContent = Math.pow(parseFloat(operation.textContent), 1/parseFloat(type.textContent));
      type.textContent = '';
    }
  }
}


addOne();