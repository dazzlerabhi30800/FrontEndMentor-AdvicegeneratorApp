const idNumber = document.querySelector('.number');
const advice = document.querySelector('.advice');
const diceWrapper = document.querySelector('.dice-wrapper');
const dice = document.querySelector('.dice-wrapper img');


const url = 'https://api.adviceslip.com/advice';

fetch(url)
    .then((response) => {
        return response.json();
    })
      .then((data) => {
          let authors = data;
          idNumber.innerText = authors.slip.id;
          advice.innerText = authors.slip.advice;
      })

diceWrapper.addEventListener('click', () => {
    dice.classList.add('active');
    reload = location.reload();
})