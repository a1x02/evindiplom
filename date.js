const showTimeButton = document.querySelector('#showTime')
const timeContent = document.querySelector('.time-table')
const timeContentItems = document.querySelectorAll('.time-table__item')
const buttonGoNext = document.querySelector('#next-button')

showTimeButton.addEventListener('click', () => {
    showTimeButton.classList.add('hidden')
    timeContent.classList.remove('hidden')
    buttonGoNext.classList.remove('hidden')
})

timeContentItems.forEach((item) => {
    if (!item.classList.contains('time-table__item_busy')) {
        item.addEventListener('click', () => {
            item.classList.toggle('time-table__item_chosen')
        })
    }
})
