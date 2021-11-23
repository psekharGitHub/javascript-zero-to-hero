const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        });

        //hide all articles
        articles.forEach((article) => {
            article.classList.remove('active')
        });
        //show selected article
        const element = document.getElementById(id) //note: selecting id placeholder, not a specific id
        element.classList.add('active') 
    }
})