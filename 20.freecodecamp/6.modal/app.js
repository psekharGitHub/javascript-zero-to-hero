let modalOverlay = document.querySelector('.modal-overlay')
let openBtn = document.querySelector('.modal-btn')
let closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})