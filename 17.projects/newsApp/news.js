console.log('Welcome to News App');

// efb28a509f484420b6bc86b8ff4a4738
let source = 'techcrunch';
let apikey = 'efb28a509f484420b6bc86b8ff4a4738';
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);
console.log(xhr);

xhr.onprogress = function () {
    console.log('API in progress');
}

xhr.onload = function (e) {
    if (this.status === 200) {
        artObj = JSON.parse(this.responseText);
        artArr = artObj.articles;
        let html = "";
        let newsAccordion = document.getElementById('newsAccordion');
        // console.log(list);
        artArr.forEach((element, index) => {
            html += `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <strong>${element.title}</strong>
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                            <div class="accordion-body" id="national">${element.description}<a href="${element.url}">Read More</a></div>
                        </div>
                    </div>`;
        });

        newsAccordion.innerHTML += html;
    } else {
        console.log('Some error occured');
    }
}

xhr.send();

console.log('We are done');