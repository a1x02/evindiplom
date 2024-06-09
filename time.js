const buttonCalculate = document.querySelector('.form__button')
const buttonSave = document.querySelector('#save-button')
const aimPrice = document.querySelector('.price__container')
const timeTable = document.querySelector('.time-table')
const finalPrice = document.querySelector('#price')
const modeButton = document.querySelector('#mode')
const spanMode = document.querySelector('#mode-span')
const spanAim = document.querySelector('#aim-span')
const hour1 = document.querySelector('#hour-price-1')
const hour2 = document.querySelector('#hour-price-2')
const hour3 = document.querySelector('#hour-price-3')
const sum1 = document.querySelector('#summary-hour-price-1')
const sum2 = document.querySelector('#summary-hour-price-2')
const sum3 = document.querySelector('#summary-hour-price-3')

buttonCalculate.addEventListener('click', () => {
    buttonSave.classList.remove('hidden')
    aimPrice.classList.remove('hidden')
    timeTable.classList.remove('hidden')
    finalPrice.classList.remove('hidden')
    modeButton.classList.remove('hidden')
})

modeButton.addEventListener('click', () => {
    spanMode.textContent = "Hit"
    spanAim.textContent = "54000"
    hour1.textContent = "1"
    hour2.textContent = "2"
    hour3.textContent = "3"
    sum1.textContent = "11"
    sum2.textContent = "22"
    sum3.textContent = "33"
})