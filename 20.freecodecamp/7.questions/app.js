let qBtns = document.querySelectorAll('.question-btn')
let questions = document.querySelectorAll('.question')

questions.forEach((question) => {
    let btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {
        qBtns.forEach((item) => {
            if (item !== btn) {
                item.parentElement.parentElement.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })



})
// qBtns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//         console.log(question);
//     })
// })
// qBtn.addEventListener('click', () => {
//     console.log('Clicked');
// })