const buttonCalculate = document.querySelector('.form__button')
const buttonSave = document.querySelector('#save-button')
const finalPrice = document.querySelector('.price__container')

buttonCalculate.addEventListener('click', () => {
    buttonCalculate.classList.add('hidden')
    buttonSave.classList.remove('hidden')
    finalPrice.classList.remove('hidden')
})