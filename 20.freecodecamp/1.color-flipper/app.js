let changeBtn = document.getElementById('changeBtn')
const color = [ 
    'black','gray','silver','white','maroon','red','purple','fuchsia','green'
]

// function colorIterator(values) {
//     let index = 0
//     return {
//         next : () => {
//             if (index < values.length) {
//                 return {
//                     value : values[index++],
//                     completed : false
//                 }
//             } else {
//                 index = 0
//                 return {
//                     value : values[index++],
//                     completed : false
//                 }
//             }         
//         }
//     }
// }

let colorTag = document.getElementById('colorTag')
colorTag.innerHTML = `Background Color: default`

changeBtn.addEventListener('click', () => {
    let col = color[getRandomNumber()]
    html = `Background Color: ${col}`
    colorTag.innerHTML = html
    document.body.style.backgroundColor = col
})

function getRandomNumber() {
    return Math.floor(Math.random() * color.length)
}