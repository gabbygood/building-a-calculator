const btns = document.querySelectorAll('.btn');
let inputEl = document.querySelector('.input-el');
console.log(inputEl);
const equalBtn = document.querySelector('.equal-btn');
const clearBtn = document.querySelector('.clear-btn');

btns.forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = e.target.dataset.num;
    inputEl.value += id;
  })
})

equalBtn.addEventListener('click', () => {
  const answer = eval(inputEl.value);
  inputEl.value = answer;
})

clearBtn.addEventListener('click', () => {
  inputEl.value = '';
})



localStorage.setItem("list", "ReactJS DEveloper")



