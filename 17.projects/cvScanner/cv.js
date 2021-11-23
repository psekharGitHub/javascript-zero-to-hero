console.log('Welcome to CV Viewer')
const data = [
    {
        name: 'Rohan Das',
        about: 'Freelancing person',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        about: 'Dedicated 9 to 5 person',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        about: 'Free Spirit',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        about: 'Developer by day, Model by night',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        about: 'Workaholic',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

let image = document.getElementById('image');
let name = document.getElementById('name');
let profile = document.getElementById('profile');
let nextBtn = document.getElementById('nextBtn');
// console.log(data)

// console.log(image)
// console.log(name)
// console.log(profile)
let candidate = cvIterator(data);
// console.log(candidate.next().value);
nextCv()
nextBtn.addEventListener('click', nextCv);

function nextCv() {
    let curCand = candidate.next().value;
    if (curCand != undefined) {
        image.innerHTML = `<img src=${curCand.image} class="card-img-top">`;
        name.innerHTML =    `<h5 class="card-title">${curCand.name}</h5>
                            <p class="card-text">${curCand.about}</p>`;
        profile.innerHTML = `   <ul class="list-group list-group-flush"> 
                                    <li class="list-group-item">Age: ${curCand.age}</li>
                                    <li class="list-group-item">City: ${curCand.city}</li>
                                    <li class="list-group-item">Language: ${curCand.language}</li>
                                    <li class="list-group-item">Framework: ${curCand.framework}</li>
                                </ul>`;
    } else {
        window.alert('End of List')
        window.location.reload()
    }
}


function cvIterator(data) {
    let nextIndex = 0;
    return {
        next : function () {
                    if (nextIndex < data.length) {
                        return {
                            value : data[nextIndex++],
                            done : false
                        }
                    } else {
                        return {
                            done : true
                        }
                    }
                }
    }
}