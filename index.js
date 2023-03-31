// Button
const buttonAdd = document.querySelector('.button__add');
const buttonRemove = document.querySelector('.button__remove');

// Elements for update
let percentage = 0;
let liters = 0;
let cups = 0;

const maxCups = 8;
const minCups = 0;

const currentLitersEl = document.querySelector('.liters');
const currentPercentageEl = document.querySelector('.percentage');
const currentCupsEl = document.querySelector('.cups');
const progressBarEl = document.querySelector('.progress__bar');

// Progress bar changes
buttonAdd.addEventListener('click', addCup);
buttonRemove.addEventListener('click', removeCup);

function addCup() {
    cups++;
    percentage = (cups / maxCups) * 100;
    liters += 250;
    
    currentLitersEl.textContent = `${liters / 1000} / 2l`;
    currentPercentageEl.textContent = `${percentage}%`;
    currentCupsEl.textContent = `${cups} / ${maxCups} cups`;
    progressBarEl.style.width = `${percentage}%`;

    if (cups === maxCups) {
        buttonAdd.disabled = true;
    }
    else {buttonRemove.disabled = false;}
}

function removeCup() {
    cups--;
    percentage = (cups / maxCups) * 100;
    liters -= 250;

    currentLitersEl.textContent = `${liters / 1000} / 2l`;
    currentPercentageEl.textContent = `${percentage}%`;
    currentCupsEl.textContent = `${cups} / ${maxCups} cups`;
    progressBarEl.style.width = `${percentage}%`;

    if (cups === minCups) buttonRemove.disabled = true;
    else {
        buttonAdd.disabled = false;
    }
}

