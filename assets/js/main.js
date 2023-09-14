const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const doubleBtn = document.querySelector('.double')
const delenieBtn = document.querySelector('.delenie')
const resultBtn = document.querySelector('.resultBtn')
const resultElement = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

doubleBtn.onclick = function () {
    action = '*'
}

delenieBtn.onclick = function () {
    action = '/'
}



resultBtn.onclick = function () {
    if (action === '+') {
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        resultElement.textContent = sum
    } else if (action === '-') {
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        resultElement.textContent = sum
    } else if (action === '*') {
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        resultElement.textContent = sum
    } else if (action === '/') {
        const sum = Number (inputOne.value) / Number (inputTwo.value)
        resultElement.textContent = sum
    }
}